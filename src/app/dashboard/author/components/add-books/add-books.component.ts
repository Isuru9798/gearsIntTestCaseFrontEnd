import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {

  image: string = '';
  btn_enable = false;
  addBookForm = new FormGroup({});

  constructor(
    private imageUploadService: CommonServiceService,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.bookFormBuilder();
  }

  // form builder
  bookFormBuilder() {
    this.addBookForm = new FormGroup({
      book_name: new FormControl(null, Validators.required),
      image_url: new FormControl(null, [Validators.required]),
      status: new FormControl(1, [Validators.required]),
    });
  }

  onSubmit() {
    if (
      this.addBookForm.get('book_name').value !== '' &&
      this.addBookForm.get('book_name').valid &&
      this.addBookForm.get('image_url').value !== '' &&
      this.addBookForm.get('image_url').valid
    ) {
      this.btn_enable = false;
      this.authorService.addBook(this.addBookForm.value).subscribe(
        // The response data
        (res) => {
          this.bookFormBuilder();
          this.image = '';
          alert('new book added!');
        },
        // If there is an error
        (error) => {
          this.btn_enable = true;
          console.log(error);
        },
      );
    } else {
      alert('fill the form');
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      // upload image
      this.imageUploadService.imageUpload(formData).subscribe(
        res => {
          // set image url to form controller
          this.image = res['image_url'];
          this.addBookForm.controls.image_url.setValue(res['image_url']);
          this.btn_enable = true;
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}
