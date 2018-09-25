import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { DatepickerPage } from '../datepicker/datepicker';
import { GlobalVarsService } from './../../providers/global-variables-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('content') nav: NavController;

  userInitials: string = '';

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public events: Events,
      public globalVars: GlobalVarsService ) {
    }

    public openModal(){
      var modalPage = this.modalCtrl.create(DatepickerPage); modalPage.present();
    }

    ionViewDidLoad(){
      this.userInitials = this.globalVars.getUserInitials();
    }
}