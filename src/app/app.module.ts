import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DetailBlogComponent} from './detail-blog/detail-blog.component';
import {CategoryBlogComponent} from './category-blog/category-blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreateComponent} from './create/create.component';
import {QuillModule} from 'ngx-quill';
import {HomeComponent} from './home/home.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {ViewComponent} from './view/view.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatAutocompleteModule,
  MatCardModule,
  MatIconModule, MatInputModule, MatOptionModule, MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { ResultComponent } from './result/result.component';
import { BoldPipe } from './bold.pipe';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {CategoryAdminComponent} from './category-admin/category-admin.component';
import {DialogoverviewComponent} from './dialog-overview/dialogoverview.component';
import {ResultComponent} from './result/result.component';

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
    ResultComponent,
    BoldPipe
    DialogoverviewComponent,
    ResultComponent
  ],
  entryComponents: [DialogoverviewComponent, ListAdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
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
    MatDialogModule,
    MatAutocompleteModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
