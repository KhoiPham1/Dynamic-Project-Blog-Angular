import {Component, OnInit, ViewChild} from '@angular/core';
import {BlogService} from "../blog.service";
import {Iblog} from "../iblog";
import {MatSort, MatTableDataSource} from "@angular/material";
import {ImageService} from "../image.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  name: string;
  blogList: Iblog[];
  listBlog: Iblog[];
  displayedColumn: string[] = ['action', 'title', 'category', 'update', 'delete'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private blogSvr: BlogService,
              private imgSvr: ImageService,
              private router: Router) {
    this.dataSource = new MatTableDataSource<Iblog>(this.blogList);
  }

  ngOnInit() {
    this.name = localStorage.getItem('names')
    console.log(this.name);
    this.blogSvr.getTitle(this.name).subscribe(data => {
      this.dataSource.data = data;
      this.listBlog = data;
    });
    this.dataSource.sort = this.sort;

    // localStorage.setItem('names', null)

  }

  selectAll() {
    for (const elm of this.dataSource.data) {
      elm.boxCheck = !elm.boxCheck;
    }
  }

  oneSelect(event) {
    event.boxCheck = !event.boxCheck;
  }

  delete(event) {
    this.blogSvr.delete(event.id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(t => t.id !== event.id);
      this.router.navigate(['admin/list']).then(() => alert('deleted success'));
    });
    this.imgSvr.delete(event.nameImg).subscribe();
  }

  deleteSelect() {
    for (const elm of this.dataSource.data) {
      if (elm.boxCheck === true) {
        this.blogSvr.delete(elm.id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(t => t.id !== elm.id);
        });
        this.imgSvr.delete(elm.nameImg).subscribe();
      }
    }
    for (const elm of this.dataSource.data) {
      if (elm.boxCheck === true) {
        this.router.navigate(['admin/list']).then(() => alert('deleted success'));
        break;
      }
    }
  }

}
