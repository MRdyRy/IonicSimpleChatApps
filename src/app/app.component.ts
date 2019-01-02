import { SigninPage } from './../pages/signin/signin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { timer } from 'rxjs/observable/timer';

const config = {
  apiKey: 'AIzaSyBDzz6T_9wVXj1C3N2os8LnYDQh9fkBreU',
  authDomain: 'realtime-database-fa526.firebaseapp.com',
  databaseURL: 'https://realtime-database-fa526.firebaseio.com',
  projectId: 'realtime-database-fa526',
  storageBucket: 'realtime-database-fa526.appspot.com',
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = SigninPage;

  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
    timer(3000).subscribe(() => this.showSplash = false);
  }
}

