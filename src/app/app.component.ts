import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { MdButton, MdInput, MdList, MdListItem, MdIcon } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
}
