import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import {QuillModule} from 'ngx-quill';
import { HomeComponent } from './home/home.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewComponent } from './view/view.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatOptionModule, MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailBlogComponent,
    CategoryBlogComponent,
    CreateComponent,
    HomeComponent,
    EditBlogComponent,
    ViewComponent,
    UserComponent,
    AdminComponent,
    ListAdminComponent,
    CategoryAdminComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
