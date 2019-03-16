import { Component, OnInit } from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
  listBlog: Iblog[];
  constructor(private blogSvr: BlogService) { }

  ngOnInit() {
    this.blogSvr.getList().subscribe(data => this.listBlog = data);
  }

}
