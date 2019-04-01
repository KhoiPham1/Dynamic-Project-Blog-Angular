import {Component, OnInit} from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
  listBlog: Iblog[];
  modeBlog: Iblog[] = [];

  constructor(private blogSvr: BlogService,
              public loginSvr: LoginService) {
  }

  ngOnInit() {
    this.blogSvr.getList().subscribe(data => {
      this.listBlog = data;
      for (const elm of this.listBlog) {
        if (elm.mode) {
          this.modeBlog.push(elm);
        }
      }
    });
  }
}
