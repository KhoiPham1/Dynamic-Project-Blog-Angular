import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  fileSelect: File;

  constructor(private blogSvr: BlogService,
              private imageSvr: ImageService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      category: ['', [Validators.required]],
      imgName: ['', [Validators.required]],
    });
  }

  onSelect(event) {
    this.fileSelect = event.target.files[0];
  }

  onSubmit() {
    const fb = new FormData();
    fb.append('file', this.fileSelect, this.fileSelect.name);
    if (this.form.valid && this.fileSelect.name != null) {
      this.form.get('imgName').setValue(this.fileSelect.name);
      const {value} = this.form;
      this.imageSvr.create(fb).subscribe(res => console.log(res));
      this.blogSvr.create(value).subscribe(() => this.router.navigate(['create']).then(() => alert('created success')));
    }
  }
}
