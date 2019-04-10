import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../login.service';
import {Iblog} from '../iblog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  listBlog: Iblog[] = [];
  name: string;
  blogControl = new FormControl();
  filteredBlogs: Observable<Iblog[]>;
  toHighlight = '';
  display: string;

  constructor(public loginSvr: LoginService,
              private blogService: BlogService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getName(event) {
    this.name = event;
    if (event !== '') {
      this.display = 'none';
    } else {
      this.display = 'contents';
    }
  }

  focusInput(event) {
    this.blogService.getList().subscribe(data => this.listBlog = data);

    this.filteredBlogs = this.blogControl.valueChanges
      .pipe(
        startWith(''),
        map(blog => blog ? this.filterBlogs(blog) : this.listBlog.slice(0, 0))
      );
  }
  chooseName(event) {
    this.name = event;
  }

  search() {
    localStorage.setItem('names', this.name);
    if (this.router.url !== '/admin/result') {
      this.router.navigate(['admin/result']);
    } else {
      this.router.navigate(['admin/result']).then(() => location.reload());
    }

  }

  private filterBlogs(name: string): Iblog[] {
    // const filterValue = name.toLowerCase();
    // return this.listBlog.filter(blog => blog.title.toLowerCase().indexOf(filterValue) === 0);
    this.toHighlight = name;
    return name ? this.listBlog.filter(state =>
      state.title.toLowerCase().indexOf(name.toLowerCase()) === 0) : [];
  }
}
