import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  fileSelect: File;
  option: string;
  contentSelect: string;

  constructor(private blogSvr: BlogService,
              private imageSvr: ImageService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      content: [''],
      category: [''],
      nameImg: [''],
    });
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
    if (this.form.valid && this.fileSelect.name != null) {
      this.form.get('nameImg').setValue(`${Date.now() + this.fileSelect.name}`);
      this.form.get('category').setValue(this.option);
      this.form.get('content').setValue(this.contentSelect);
      const {value} = this.form;
      this.imageSvr.create(fb).subscribe(res => console.log(res));
      this.blogSvr.create(value).subscribe(() => this.router.navigate(['home/create']).then(() => alert('created success')));
    }
  }
}
