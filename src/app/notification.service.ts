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
}
