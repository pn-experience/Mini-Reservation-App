import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DatepickerPage } from '../datepicker/datepicker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
  public openModal(){
    var modalPage = this.modalCtrl.create(DatepickerPage); modalPage.present();
  }
}