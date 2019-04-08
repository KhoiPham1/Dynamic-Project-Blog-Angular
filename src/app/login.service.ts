import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    name: 'dat',
    password: 'dat'
  };

  constructor(private router: Router,
              private notif: NotificationService) {
  }

  isAuthentical(): boolean {
    return !!localStorage.getItem('user');
  }

  login() {
    localStorage.setItem('user', JSON.stringify({token: 'jwt will come later', name: this.user.name}));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => this.notif.showLogoutSuccess());
  }
}
