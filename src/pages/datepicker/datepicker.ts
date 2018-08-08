import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar'
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
	selector: 'page-datepicker',
	template:
		`<ion-content>
				<ion-calendar [(ngModel)]="date"
							  (onSelect)="onSelect($event)"
							  [options]="options"
							  type="string"
							  format="YYYY-MM-DD">
				</ion-calendar>
				<ul>
					<li *ngFor="let item of reservedDates | async">{{item.test}}</li>
				</ul>
		</ion-content>
		<ion-footer>
			<ion-navbar>
						<button class="btn no-outline" (click)="closeModal()"><img src="../assets/imgs/icons/close--white.svg" alt="" aria-hidden="true" /> Cancel</button>
						<button [disabled]="!selected" class="btn" (click)="reserve()"><img src="../assets/imgs/icons/check.svg" alt="" aria-hidden="true" /> Reserve</button>
			</ion-navbar>
		</ion-footer>`
})
export class DatepickerPage {
	selected: boolean = false;
	reservedDates: Observable<any>;
	date: {
		from: string
		to: string
	};
	
	options: CalendarComponentOptions = {
		pickMode: 'range'
	};

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, db: AngularFirestore) {
		this.reservedDates = db.collection('Test').valueChanges();
	}
	

	public closeModal(){
		this.viewCtrl.dismiss();
	}
	
	onSelect($event) {
		if ($event.selected == true){
			this.selected = true;
		}
		console.log(this.selected);
	}
	reserve(){
		this.closeModal();
	}
	ngOnInit(){

	}
	ngOnDestroy(){

	}
}
