import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { GlobalVarsService } from '../providers/global-variables-service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {


  rootPage: any = LoginPage;
  userInitials: string = '';
  pages: Array<{title: string, component: any}>;
  @ViewChild('content') nav: NavController;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public globalVars: GlobalVarsService,
    public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  navigateToLogin(){
    this.globalVars.logOutUser();
    this.menuCtrl.close();
    this.nav.push(LoginPage);
  }

  ionViewWillLoad() {

  }

}
