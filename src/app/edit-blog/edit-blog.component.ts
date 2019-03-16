import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iblog} from '../iblog';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  formBlog: FormGroup;
  fileSelect: File;
  blog: Iblog;
  contentSelect: string;
  option: string;

  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private imgService: ImageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.formBlog = this.fb.group({
      title: [''],
      content: [''],
      category: [''],
      nameImg: [''],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getById(id).subscribe(
      next => {
        this.blog = next;
        this.formBlog.patchValue(this.blog);
      },
      error => {
        console.log(error);
        this.blog = null;
      }
    );
  }

  onOption(event) {
    this.option = event;
  }

  onContent(event) {
    this.contentSelect = event.html;
  }

  onSelect(event) {
    this.fileSelect = event.target.files[0];
  }

  onSubmit() {
    const fb = new FormData();
    fb.append('file', this.fileSelect, Date.now() + this.fileSelect.name);
    if (this.formBlog.valid && this.fileSelect.name != null) {
      this.formBlog.get('nameImg').setValue(`${Date.now() + this.fileSelect.name}`);
      this.formBlog.get('category').setValue(this.option);
      this.formBlog.get('content').setValue(this.contentSelect);
      const {value} = this.formBlog;
      this.imgService.create(fb).subscribe(res => console.log(res));
      this.blogService.updateBlog(value).subscribe(() => this.router.navigate(['home/create']).then(() => alert('created success')));
    }
  }

}
