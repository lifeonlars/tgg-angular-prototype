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
export class CategoryMenuService {

  private afDoc: AngularFirestoreDocument<any>;
  menu$: Observable<any>;
  public products$: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  public getCategoryTree() {
    return this.afs.collection<any>('category-tree').valueChanges();
  }


}
