import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {AuthGuard} from './auth.guard';
import {CategoryBlogComponent} from './category-blog/category-blog.component';
import {DetailBlogComponent} from './detail-blog/detail-blog.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view/view.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {CategoryAdminComponent} from './category-admin/category-admin.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'list',
    component: ListAdminComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id/edit',
    component: EditBlogComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'category',
    component: CategoryAdminComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'result',
    component: ResultComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id/view',
    component: ViewComponent,
    canActivate: [AuthGuard]
  }]
}, {
  path: '',
  component: UserComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'list',
    component: DetailBlogComponent,
  }, {
    path: 'category',
    component: CategoryBlogComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: ':id/view',
    component: ViewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
