import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toast: ToastrService) {
  }

  showSuccess() {
    this.toast.success('Delete Success', 'Notification');
  }

  createSuccess() {
    this.toast.success('Create Success', "Notification")
  }

  showEditSuccess() {
    this.toast.success('Update Success', "Notification")
  }

  showLogoutSuccess() {
    this.toast.success('Logout Success', 'Notification')
  }
  showLoginSuccess() {
    this.toast.success('Login Success', 'Notification')
  }
}
