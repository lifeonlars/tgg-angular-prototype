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
    return this.afs.doc<any>('products/' + id).valueChanges();
  }

  fetchProducts(noOfProducts) {
    return this.afs
      .collection('product-tiles', ref => ref.limit(noOfProducts))
      .valueChanges();
  }

  fetchProductsArrayByIds() {}

  fetchProductsByCategory() {}

  fetchProductsByKeyword() {}
}
