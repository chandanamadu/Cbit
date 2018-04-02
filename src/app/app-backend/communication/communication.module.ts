import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { WebsocketService } from './websocket/websocket.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreService } from './firestore/firestore.service';
import { environment } from '../../../environments/environment';

@NgModule({
	imports: [
		CommonModule,
		AngularFireModule.initializeApp(environment.firebaseConfig, 'cbit-app'),
		AngularFirestoreModule,
	],
	declarations: [],
	providers: [
		DataService,
		WebsocketService,
		FirestoreService,
	],
})
export class CommunicationModule { }
