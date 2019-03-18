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

const routes: Routes = [{
  path: 'home/create',
  component: CreateComponent,
  canActivate: [AuthGuard]
}, {
  path: 'home/category',
  component: CategoryBlogComponent
}, {
  path: 'home/list',
  component: DetailBlogComponent
}, {
  path: 'home/login',
  component: LoginComponent
}, {
  path: '',
  component: HomeComponent
}, {
  path: 'home/:id/view',
  component: ViewComponent
}, {
  path: 'home/:id/edit',
  component: EditBlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
