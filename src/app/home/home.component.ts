import { Component, OnInit } from '@angular/core';
import { ProductTileComponent } from './../shared/product-tile/product-tile.component';
import { Observable } from 'rxjs';
import { ProductApiService } from './../shared/services/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product$: Observable<any>;
  public products$;
  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    this.product$ = this.productApiService.fetchProductById('10010608');
    this.products$ = this.productApiService.fetchProducts(4);
    // this.products$.subscribe(x => console.log(x));
  }



  getProduct() {
    //
  }
}
