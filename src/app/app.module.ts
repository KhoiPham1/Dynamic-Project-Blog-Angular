import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailBlogComponent,
    CategoryBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
