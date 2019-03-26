import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BlogService} from '../blog.service';
import {LoginService} from '../login.service';
import {Category} from '../category';
import {Iblog} from '../iblog';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {
  categoryList: Category[];
  displayedColumns: string[] = ['id', 'nameImg', 'title'];

  constructor(private blogSvr: BlogService,
              public loginSvr: LoginService) {
  }

  ngOnInit() {
    this.blogSvr.getListCategory().subscribe(data => this.categoryList = data);
  }
}
