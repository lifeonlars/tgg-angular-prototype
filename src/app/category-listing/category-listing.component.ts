import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryApiService } from '../shared/services/category-api.service';
import { ProductTileComponent } from './../shared/product-tile/product-tile.component';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  private categoryId: String;
  private navigationSubscription: Subscription;
  protected productTiles$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryApiService) {
    // subscribe to route params to notify component when new id clicked
    this.route.params.subscribe(params => {
    console.log(params);
      this.productTiles$ = this.categoryService.getProductTiles(params.id);
      // productTiles.subscribe(product => {
      //   console.log(product);
      // });
    });
   }

  ngOnInit() {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }


  // ... your class variables here

 initialiseInvites() {
   // Set default values and re-fetch any data you need.
 }

}
