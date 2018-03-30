import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { OrderEntity } from '../../../business-entities/order-entity';


@Injectable()
export class FirestoreService {

  private ordersCollection: AngularFirestoreCollection<OrderEntity>;
  private orders: Observable<OrderEntity[]>;
  private orderDoc: AngularFirestoreDocument<OrderEntity>;

  constructor(private angularFirestore: AngularFirestore) {

    this.ordersCollection = this.angularFirestore.collection('Orders', order => order.orderBy('total', 'asc'));
    this.fetchOrders();

  }

  public getOrders(): Observable<OrderEntity[]> {
    return this.orders;
  }

  public addOrder(order: OrderEntity): void {
    this.ordersCollection.add(order);
  }

  public deleteOrder(order: OrderEntity): void {
    this.orderDoc = this.angularFirestore.doc(`Orders/${order.orderId}`);
    this.orderDoc.delete();
  }

  private fetchOrders(): void {
    this.orders = this.ordersCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as OrderEntity;
            data.orderId = a.payload.doc.id;
            return data;
          });

      });
  }

}
