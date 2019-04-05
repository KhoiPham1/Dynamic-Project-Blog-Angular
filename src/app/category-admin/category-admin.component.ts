import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {LoginService} from '../login.service';
import {Category} from '../category';
import {Iblog} from '../iblog';
import {ImageService} from '../image.service';
import {Router} from '@angular/router';
import {DialogService} from '../dialog.service';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {
  categoryList: Category[];
  blogList: Iblog[];
  displayedColumns: string[] = ['id', 'nameImg', 'title', 'update', 'mode', 'delete'];

  constructor(private blogSvr: BlogService,
              public loginSvr: LoginService,
              private imgSvc: ImageService,
              private router: Router,
              private dialogService: DialogService,
              private notifi: NotificationService) {
  }

  ngOnInit() {
    this.blogSvr.getListCategory().subscribe(data => this.categoryList = data);
    this.blogSvr.getList().subscribe(data => this.blogList = data);
  }

  delete(event) {
    this.dialogService.openConfirmDialog('Do you want to delete ?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.blogSvr.delete(event.id).subscribe(() => {
          this.blogList = this.blogList.filter(t => t.id !== event.id);
          this.router.navigate(['/admin/list']);
        });
        this.imgSvc.delete(event.nameImg).subscribe();
        this.notifi.showSuccess();
      }
    });
  }
}
