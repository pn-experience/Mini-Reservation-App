import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import {
  CalendarModal,
  CalendarModalOptions
} from 'ion2-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      defaultDateRange: this.dateRange
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date, type) => {
      if (type === 'done') {
        this.dateRange = Object.assign({}, {
          from: date.from.dateObj,
          to: date.to.dateObj,
        })
      }
      console.log(date);
      console.log('type', type);
    });
  }

}
