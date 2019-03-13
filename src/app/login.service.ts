import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    name: 'dat',
    password: 'dat'
  };
  inter: any;

  constructor(private router: Router) {
  }

  isAuthentical(): boolean {
    return !!this.inter;
  }

  login() {
    this.inter = true;
  }

  logout() {
    this.inter = null;
    this.router.navigate(['/']).then(() => alert('logout success'));
  }
}
