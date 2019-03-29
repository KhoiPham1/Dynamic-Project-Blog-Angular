import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Iblog} from "../iblog";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listBlog: Iblog[] = [];
  blogNames: Iblog[];
  name: string;

  blogControl = new FormControl();
  filteredBlogs: Observable<Iblog[]>;

  constructor(public loginSvr: LoginService,private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.blogService.getList().subscribe(data => this.listBlog = data);

    this.filteredBlogs = this.blogControl.valueChanges
      .pipe(
        startWith(''),
        map(blog => blog ? this.filterBlogs(blog) : this.listBlog.slice())
      );
  }

  getName(event) {
    this.name = event;
  }

  search() {
    console.log(this.name);
    localStorage.setItem('names', this.name);
    // this.blogService.getBlogByName(this.name).subscribe(data => this.blogNames = data);
    // location.reload();
    this.router.navigate(['admin/result']).then(() => location.reload());

  }

  private filterBlogs(value: string): Iblog[] {
    const filterValue = value.toLowerCase();
    return this.listBlog.filter(blog => blog.title.toLowerCase().indexOf(filterValue) === 0);
  }

}
