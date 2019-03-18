import { Component, OnInit } from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';
import {LoginService} from '../login.service';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
  listBlog: Iblog[];
  constructor(private blogSvr: BlogService,
              public loginSvr: LoginService,
              private imgSvr: ImageService) { }

  ngOnInit() {
    this.blogSvr.getList().subscribe(data => this.listBlog = data);
  }

  delete(i) {
    const blog = this.listBlog[i];
    this.blogSvr.delete(blog.id).subscribe(() =>
      this.listBlog = this.listBlog.filter(t => t.id !== blog.id)
    );
    this.imgSvr.delete(blog.nameImg).subscribe();
  }
}
