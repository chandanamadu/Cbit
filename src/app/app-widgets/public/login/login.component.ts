import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../../app-backend/communication/firestore/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
	private router: Router,
	private route: ActivatedRoute,
	private firestoreService: FirestoreService,
  ) { }

  public ngOnInit() {
  }

  public testHere(): void {
	this.firestoreService.getOrders().subscribe(data => {
		console.log(data);
	});
  }

}
