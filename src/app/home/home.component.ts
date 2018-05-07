import { Component, OnInit } from '@angular/core';
import { ProductTileComponent } from './../shared/product-tile/product-tile.component';
import { Observable } from 'rxjs';
import { ProductApiService } from './../shared/services/product-api.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product$: Observable<any>;
  public productTileProducts$: Observable<any>;
  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    this.product$ = this.productApiService
      .fetchProductById('10010608')
      .map(x => x);

    this.productTileProducts$ = this.productApiService.fetchProducts(4);
    this.productTileProducts$.subscribe(products => {
      console.log(products);
    });
  }

  getProduct() {
    //
  }
}
