import { Injectable } from "@angular/core";

@Injectable()

class globalUser {
	public id: number;
	public name: string;
	public email: string;
}

export class GlobalVarsService {
	globalUser: globalUser;
	userInitials: string = '';

	constructor() {}

	setCurrentUser(value) {
		this.globalUser = value;
		this.setUserInitials();
	}

	setUserInitials(){
		let acronym = this.globalUser.name.match(/\b(\w)/g);
		this.userInitials = acronym.join('');
	}

	getUserInitials(){
		console.log(this.userInitials);
		return this.userInitials;
	}

	getCurrentUser() {
		return this.globalUser;
	}

	logOutUser(){
		this.userInitials = '';
		this.globalUser = {id:0, name:'Enter Name...', email:''};
	}

}
