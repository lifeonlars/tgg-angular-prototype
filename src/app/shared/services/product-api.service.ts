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
  public products$: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  fetchProductById(id: string) {
    this.productDoc = this.afs.doc<any>('products/' + id);
    this.product$ = this.productDoc.valueChanges();

    return this.product$;
  }

  // return products based on the number passed in
  fetchProducts(noProducts: number) {
    return this.afs.collection<any>('product-tiles', ref => ref.limit(noProducts)).valueChanges();
  }
  fetchProductsArrayByIds() { }

  fetchProductsByCategory() { }

  fetchProductsByKeyword() { }
}
