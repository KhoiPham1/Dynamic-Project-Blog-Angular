import { Component, OnInit } from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  blog: Iblog;
  constructor(private blogSvr: BlogService,
              private active: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.active.snapshot.paramMap.get('id');
    this.blogSvr.getById(id).subscribe(data => this.blog = data);
  }

}
