import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable()
export class AuthService {

  private isAuthenticated = false;
  constructor(private firebaseService: FirebaseService) { }

  public getIsAuthenticated(): boolean {
	return this.isAuthenticated;
  }

  public signInWithGoogle(): Promise<any> {
   return this.firebaseService.signInWithGoogle().then(response => {
		if (response && response.additionalUserInfo && response.additionalUserInfo.profile
		&& response.additionalUserInfo.profile.verified_email) {
			this.isAuthenticated = true;
		}
	}).catch((err) => {
		console.error(err);
	});
  }

  public logout() {
	this.firebaseService.signOut();
  }

  public emailLogin(credentials): Promise<any> {
	return this.firebaseService.emailLogin(credentials).then(response => {
		this.isAuthenticated = true;
	}).catch((err) => {
		console.error(err);
	});
  }

  public emailSignUp(credentials): Promise<any> {
	return this.firebaseService.emailSignUp(credentials);
  }

}
