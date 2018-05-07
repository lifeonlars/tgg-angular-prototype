import { Component, OnInit, Input } from '@angular/core';
import { splitAtColon } from '@angular/compiler/src/util';

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

  ngOnInit() {}

  // check if param is array. return true or false
  isArray(array) {
    return Array.isArray(array);
  }

  // return price before decimal
  wholePrice(price: string) {
    return price.split('.', 1);
  }

  // return decimal. if no decimal found return .00
  decimalPrice(price: string) {
    const decimalAmount = price.split('.').slice(1, 2);
    return decimalAmount[0] ? '.' + decimalAmount[0] : '.00';
  }
}
