import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    name: 'dat',
    password: 'dat'
  };

  constructor(private router: Router) {
  }

  isAuthentical(): boolean {
    return !!localStorage.getItem('user');
  }

  login() {
    localStorage.setItem('user', JSON.stringify({token: 'jwt will come later', name: this.user.name}));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => alert('logout success'));
  }
}
