import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { env } from 'process';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../../models/author';
import { AuthorAction } from '../../models/author-action';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-authors-manage',
  templateUrl: './authors-manage.component.html',
  styleUrls: ['./authors-manage.component.scss']
})
export class AuthorsManageComponent implements OnInit, OnDestroy, AfterViewInit {

  authors: Author[] = [];

  // table
  @ViewChild(DataTableDirective, { static: false }) dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private adminService: AdminServiceService
  ) { }

  ngOnInit(): void {
    this.dtOptions = this.tableOption();
    this.getAuthors();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  tableOption() {
    return {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [10, 20, 30],
      processing: true,
      destroy: true
    };
  }

  active(id: string) {
    let status: AuthorAction = {
      author_id: id,
      action: environment.active
    }
    this.adminService.authorStatus(status).subscribe(
      // The response data
      (res) => {
        alert(res['message']);
        this.getAuthors();
      },
      // If there is an error
      (error) => {
        console.log(error);
      },
    );
  }
  deactive(id: string) {
    let status: AuthorAction = {
      author_id: id,
      action: environment.deactive
    }
    this.adminService.authorStatus(status).subscribe(
      // The response data
      (res) => {
        alert(res['message']);
        this.getAuthors();
      },
      // If there is an error
      (error) => {
        console.log(error);
      },
    );
  }

  reRerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  // api calls
  getAuthors() {
    this.adminService.getAuthors().subscribe(
      // The response data
      (res: Author[]) => {
        this.authors = res;
        this.reRerender();
      },
      // If there is an error
      (error) => {
        console.log(error);
      },
    );
  }

  ngOnDestroy(): void {
    // unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
