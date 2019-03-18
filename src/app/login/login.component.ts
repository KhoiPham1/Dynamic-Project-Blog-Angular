import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginSvr: LoginService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginSvr.user.name === this.form.get('name').value && this.loginSvr.user.password === this.form.get('password').value) {
      this.loginSvr.login();
      this.router.navigate(['/']).then(() => alert('login success'));
    } else {
      this.router.navigate(['home/login']).then(() => alert('login fail'));
    }
  }
}
