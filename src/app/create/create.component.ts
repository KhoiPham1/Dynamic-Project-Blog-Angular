import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../blog.service';
import {ImageService} from '../image.service';
import {Router} from '@angular/router';
import {Category} from '../category';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  fileSelect: File;
  categoryList: Category[];
  isChoose = true;

  constructor(private blogSvr: BlogService,
              private imageSvr: ImageService,
              private fb: FormBuilder,
              private router: Router,
              private notif: NotificationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      nameImg: [''],
      boxCheck: [false],
      mode: ['', [Validators.required]]
    });
    this.blogSvr.getListCategory().subscribe(data => this.categoryList = data);
  }

  onSelect(event) {
    this.fileSelect = event.target.files[0];
    if (this.fileSelect !== undefined) {
      this.isChoose = false;
    }
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
        this.router.navigate([`admin/list`]).then(() => this.notif.createSuccess());
      });
    }
  }
}
