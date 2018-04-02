import { AngularFireAuth  } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
  private user:  Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
	this.user = afAuth.authState;
  }

  public signInWithGoogle(): Promise<any> {
	const provider = new firebase.auth.GoogleAuthProvider();
	return this.afAuth.auth.signInWithPopup(provider);
  }

  public signOut(): void {
	this.afAuth.auth.signOut();
  }

  public emailSignUp(credentials: any): Promise<any> {
	return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password ).then((response) => {
		console.log(response);
	}).catch(error => console.log(error));
  }

  public emailLogin(credentials: any): Promise<any> {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then((response) => {
		console.log(response);
		}).catch(error => console.log(error));
  }
}
