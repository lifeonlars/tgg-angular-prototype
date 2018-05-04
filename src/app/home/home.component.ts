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
  constructor(private productApiService: ProductApiService) {}

  ngOnInit(product$ = this.productApiService.fetchProductById('10010608')) {}

  getProduct() {
    //
  }
}
