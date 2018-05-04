import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private productDoc: AngularFirestoreDocument<any>;
  product$: Observable<any>;

  constructor(private afs: AngularFirestore) {}

  fetchProductById(id: string) {
    this.afs.doc<any>('/products/' + id);
    this.product$ = this.productDoc.valueChanges();
    return this.product$;
  }

  fetchProductsArrayByIds() {}

  fetchProductsByCategory() {}

  fetchProductsByKeyword() {}
}
