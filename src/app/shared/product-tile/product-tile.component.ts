import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  @Input() product: Array<any>;
  constructor() {}

  ngOnInit() {

    console.log(this.product);

  }

  wholePrice(price){
    return price.split('.', 1);
  }

  decimalPrice(price){
    const decimal = price.split('.', 2)[1];
    return decimal ? '.' + decimal : '.00';
  }
}
