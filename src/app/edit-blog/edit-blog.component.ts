import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iblog} from '../iblog';
import {Category} from '../category';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  form: FormGroup;
  fileSelect: File;
  blog: Iblog;
  categoryList: Category[];

  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private imgService: ImageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      nameImg: [''],
    });
    this.blogService.getListCategory().subscribe(data => this.categoryList = data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getById(id).subscribe(
      next => {
        this.blog = next;
        this.form.patchValue(this.blog);
      },
      error => {
        console.log(error);
        this.blog = null;
      }
    );
  }

  onSelect(event) {
    this.fileSelect = event.target.files[0];
  }

  onSubmit() {
    if (this.form.valid && this.fileSelect != null) {
      const post = this.blog;
      this.imgService.delete(post.nameImg).subscribe();
      const fb = new FormData();
      fb.append('file', this.fileSelect, Date.now() + this.fileSelect.name);
      this.form.get('nameImg').setValue(`${Date.now() + this.fileSelect.name}`);
      const {value} = this.form;
      const data = {
        ...this.blog,
        ...value
      };
      this.imgService.create(fb).subscribe(res => console.log(res));
      this.blogService.updateBlog(data).subscribe(() => this.router.navigate(['admin/list']).then(() => alert('edited success')));
    }
    if (this.form.valid && this.fileSelect == null) {
      const {value} = this.form;
      this.form.get('nameImg').setValue(`${this.blog.nameImg}`);
      const data = {
        ...this.blog,
        ...value
      };
      this.blogService.updateBlog(data).subscribe(() => this.router.navigate(['admin/list']).then(() => alert('edited success')));
    }
  }

}
