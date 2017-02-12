// app.module.ts
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAdnA4pK7a4EoNctHOpjam_iObilCdMXbc",
    authDomain: "angularfire2presentation.firebaseapp.com",
    databaseURL: "https://angularfire2presentation.firebaseio.com",
    storageBucket: "angularfire2presentation.appspot.com",
    messagingSenderId: "628170744128"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  remember: 'default', 
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


//app.component.ts

**Message scrolling**
implements OnInit, AfterViewChecked

    ngOnInit() {
      this.scrollMessagesToBottom();
    }

    ngAfterViewChecked() {
      this.scrollMessagesToBottom();
    }

    scrollMessagesToBottom() {
      var messagesDiv = document.getElementById('messages');
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }


    // app.component.html
    <h1>
  Messages
</h1>
<div>
  <span>logged in as: {{user ? user.auth.email : 'Anonymous'}}</span>
  <button (click)="login()">Login</button>
  <button (click)="logout()">Logout</button>
</div>

<div *ngFor="let message of messages | async">
  <span style="font-weight: bold">[{{message.name}}]</span>
  <span style="font-style: italic; color: grey">{{formatDate(message.time)}}</span>
  <span>{{message.text}}</span>
</div>
<div>
  <input [(ngModel)]="inputText">
  <button (click)="submitMessage(inputText)">Submit</button>
</div>