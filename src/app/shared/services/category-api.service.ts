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
export class CategoryApiService {

  constructor(private afs: AngularFirestore) {

  }

  getProductTiles(categoryId) {
    return this.afs.collection<any>('product-tiles', ref => ref
      .limit(20)
      .where('categories.2.id', '==', categoryId))
      .valueChanges();
  }
}
