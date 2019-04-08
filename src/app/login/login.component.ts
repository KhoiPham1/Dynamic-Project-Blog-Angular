import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from "../notification.service";
import swal from 'sweetalert';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginSvr: LoginService,
              private fb: FormBuilder,
              private router: Router,
              private notif: NotificationService) {
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
      this.router.navigate(['admin']).then(() => swal("Congrats!", "Login success", "success"));
    } else {
      this.router.navigate(['login']).then(() => alert('login fail'));
    }
  }
}
