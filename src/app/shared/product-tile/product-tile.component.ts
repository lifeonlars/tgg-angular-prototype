import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  // use input from the [product] attribute in the home component which binds to the single product
  // in the for loop above
  @Input() product;
  constructor() {}

  ngOnInit() {
    console.log(this.product);
  }

  isArray(array) {
    return Array.isArray(array);
  }
}
