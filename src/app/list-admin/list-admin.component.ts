import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {ImageService} from '../image.service';
import {DialogoverviewComponent} from "../dialogoverview/dialogoverview.component";

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit, AfterViewInit {
  blogList: Iblog[];
  displayedColumns: string[] = ['action', 'title', 'category.category', 'update', 'mode', 'delete'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatPaginator;


  constructor(private blogSvr: BlogService,
              private imgSvr: ImageService,
              private router: Router,
              public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Iblog>(this.blogList);
  }

  ngOnInit() {
    this.blogSvr.getList().subscribe(data => {
      this.dataSource.data = data;
    });
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

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'category.category':
          return item.category.category;
        default:
          return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogoverviewComponent, {
  //       width: '250px'
  //     });
  // }
}

//viewaffterinit để sắp xếp category

