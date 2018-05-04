import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckoutComponent, OrderconfirmationComponent, CartComponent]
})
export class CartModule { }
