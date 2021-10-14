import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OverlayContainer} from '@angular/cdk/overlay';
import {SampleDialogComponent} from './sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ng-outrance-apparel';


  constructor(private dialog: MatDialog, private overlay: OverlayContainer) {
  }

  ngOnInit(): void {

  }


}
