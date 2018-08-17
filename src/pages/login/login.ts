import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { GlobalVarsService } from './../../providers/global-variables-service';

class User {
  public id: number;
  public name: string;
  public email: string;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  
  users: User[];
  user: User;
  nameSelected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalVars: GlobalVarsService) {
    this.users = [
      { id: 1, name: 'Shane Morris', email: 'shane.morris@partnersandnapier.com' },
      { id: 2, name: 'Marco Fesyuk', email: 'shane.morris@partnersandnapier.com' },
      { id: 3, name: 'Geoff Harris', email: 'shane.morris@partnersandnapier.com' }
    ];
    this.user = {id: 0, name: 'Enter Name...', email:''};
  }

  logIn() {
    this.navCtrl.push(HomePage);
  }

  userChange(event: {
      component: SelectSearchableComponent,
      value: any 
  }) {
      this.nameSelected = true;
      this.globalVars.setCurrentUser(event.value);
  }

}
