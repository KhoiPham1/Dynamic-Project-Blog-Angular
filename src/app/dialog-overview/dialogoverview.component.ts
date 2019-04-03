import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialogoverview',
  templateUrl: './dialogoverview.component.html',
  styleUrls: ['./dialogoverview.component.scss']
})
export class DialogoverviewComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) private data) {
  }

  ngOnInit() {
  }
}
