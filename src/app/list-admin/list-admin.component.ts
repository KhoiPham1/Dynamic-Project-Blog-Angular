import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Iblog} from '../iblog';
import {BlogService} from '../blog.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {ImageService} from '../image.service';
import {DialogService} from '../dialog.service';
import {NotificationService} from '../notification.service';
import {Category} from '../category';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit, AfterViewInit {
  blogList: Iblog[];
  displayedColumns: string[] = ['action', 'title', 'category.category', 'update', 'mode', 'delete'];
  dataSource: any;
  categoryList: Category[];
  mode: boolean;
  arrayInterOne = null;
  arrayInterTwo = null;
  @ViewChild(MatSort) sort: MatPaginator;


  constructor(private blogSvr: BlogService,
              private imgSvr: ImageService,
              private router: Router,
              private dialogService: DialogService,
              private notifi: NotificationService) {
    this.dataSource = new MatTableDataSource<Iblog>(this.blogList);
  }

  ngOnInit() {
    this.blogSvr.getList().subscribe(data => {
      this.dataSource.data = data;
    });
    this.blogSvr.getListCategory().subscribe(data => this.categoryList = data);
  }

  selectAll() {
    for (const elm of this.dataSource.data) {
      elm.boxCheck = !elm.boxCheck;
    }
  }

  oneSelect(event) {
    event.boxCheck = !event.boxCheck;
  }

  getCategory(event) {
    const array = [];
    this.blogSvr.getList().subscribe(data => {
      for (const item of data) {
        if (item.category.category === event) {
          array.push(item);
        }
      }
      this.arrayInterOne = array;
    });
  }

  getMode(event) {
    this.mode = event === 'Public';
    const array = [];
    this.blogSvr.getList().subscribe(data => {
      for (const item of data) {
        if (item.mode === this.mode) {
          array.push(item);
        }
      }
      this.arrayInterTwo = array;
    });
  }

  clearOne() {
    this.arrayInterOne = null;
  }
  clearTwo() {
    this.arrayInterTwo = null;
  }

  filter() {
    const array = [];
    if (this.arrayInterOne !== null && this.arrayInterTwo !== null) {
      for (const item of this.arrayInterOne) {
        for (const code of this.arrayInterTwo) {
          if (item.mode === code.mode && item.category.category === code.category.category) {
            array.push(item);
          }
        }
      }
      this.dataSource.data = array;
    }
    if (this.arrayInterOne === null && this.arrayInterTwo !== null) {
      this.dataSource.data = this.arrayInterTwo;
    }
    if (this.arrayInterOne !== null && this.arrayInterTwo === null) {
      this.dataSource.data = this.arrayInterOne;
    }
    if (this.arrayInterOne === null && this.arrayInterTwo === null) {
      this.blogSvr.getList().subscribe(data => {
        this.dataSource.data = data;
      });
    }
  }

  delete(event) {
    this.dialogService.openConfirmDialog('Do you want to delete blog: ' , event.title)
      .afterClosed().subscribe(res => {
        if (res) {
          this.blogSvr.delete(event.id).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(t => t.id !== event.id);
          });
          this.imgSvr.delete(event.nameImg).subscribe();
          this.notifi.showSuccess();
        }
      }
    );
  }

  deleteSelect() {
    this.dialogService.openConfirmDialog('Do you want to delete all ?', '')
      .afterClosed().subscribe(res => {
        if (res) {
          for (const elm of this.dataSource.data) {
            if (elm.boxCheck === true) {
              this.blogSvr.delete(elm.id).subscribe(() => {
                this.dataSource.data = this.dataSource.data.filter(t => t.id !== elm.id);
              });
              this.imgSvr.delete(elm.nameImg).subscribe();
              this.notifi.showSuccess();
            }
          }
        }
      }
    );
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
}

// viewaffterinit để sắp xếp category

