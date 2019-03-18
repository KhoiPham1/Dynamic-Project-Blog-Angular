import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import {QuillModule} from 'ngx-quill';
import { HomeComponent } from './home/home.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailBlogComponent,
    CategoryBlogComponent,
    CreateComponent,
    HomeComponent,
    EditBlogComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
