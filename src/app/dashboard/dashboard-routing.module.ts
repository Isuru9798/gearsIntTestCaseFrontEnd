import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guard/auth.guard';
import { AuthorsManageComponent } from './admin/components/authors-manage/authors-manage.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: DashboardHomeComponent
  },
  {
    path: 'authors',
    canActivate: [AuthGuard],
    component: AuthorsManageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
