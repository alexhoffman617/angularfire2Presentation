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
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig, 'Chat App')
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