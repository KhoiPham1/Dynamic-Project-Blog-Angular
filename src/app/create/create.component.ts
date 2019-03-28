import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {Router} from '@angular/router';
import {Category} from '../category';
import {Iblog} from "../iblog";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  // selected = 'option2';
  form: FormGroup;
  fileSelect: File;
  categoryList: Category[];

  constructor(private blogSvr: BlogService,
              private imageSvr: ImageService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]],
      category: ['Select one', [Validators.required, Validators.minLength(3)]],
      nameImg: [''],
      boxCheck: [false],
      mode: ['']
    });
    this.blogSvr.getListCategory().subscribe(data => this.categoryList = data);
  }

  onSelect(event) {
    this.fileSelect = event.target.files[0];
  }
  dat(event) {
    console.log(event);
  }
  onSubmit() {
    const fb = new FormData();
    fb.append('file', this.fileSelect, Date.now() + this.fileSelect.name);
    if (this.form.valid && this.fileSelect.name != null) {
      if (this.form.get('mode').value === 'Public') {
        this.form.get('mode').setValue(true);
      }
      if (this.form.get('mode').value === 'Private') {
        this.form.get('mode').setValue(false);
      }
      this.form.get('nameImg').setValue(`${Date.now() + this.fileSelect.name}`);
      const {value} = this.form;
      this.imageSvr.create(fb).subscribe();
      this.blogSvr.create(value).subscribe(() => {
        this.router.navigate([`admin/list`]).then(() => alert('created success'));
      });
    }
  }
}
