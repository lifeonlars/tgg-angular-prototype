import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';

@NgModule({
  imports: [CommonModule],
  exports: [ProductTileComponent],
  declarations: [ProductTileComponent]
})
export class SharedModule {}
