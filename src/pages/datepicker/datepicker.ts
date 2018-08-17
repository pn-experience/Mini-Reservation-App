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
							  (onSelectStart)="onSelect($event)"
							  [options]="options"
							  type="string"
							  format="YYYY-MM-DD">
				</ion-calendar>
				<div style="color:white;font-size:18px;">
					Dates selected: {{date?.from}}
				</div>
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
	dateRangeSelected: any;
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
		this.dateRangeSelected = $event;
		if ($event.selected == true){
			this.selected = true;
		}
			console.log($event);
	}

	reserve(){
		this.closeModal();
	}

	ngOnInit(){

	}

	ngOnDestroy(){

	}
}
