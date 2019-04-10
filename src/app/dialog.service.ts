import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogoverviewComponent} from './dialog-overview/dialogoverview.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog(mes, content) {
    return this.dialog.open(DialogoverviewComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      data: {
        message: mes,
        content
      }
    });
  }
}
