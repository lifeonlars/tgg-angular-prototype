import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CategoryMenuService } from '../../shared/services/category-menu.service';
import { Observable } from 'rxjs';
import { CategoryListingComponent } from '../../category-listing/category-listing.component';

@Component({
  selector: 'app-primarynav',
  templateUrl: './primarynav.component.html',
  styleUrls: ['./primarynav.component.scss']
})
export class PrimarynavComponent {
  private categories: Observable<any>;
  constructor(
    private categoryMenuService: CategoryMenuService,
    protected routes: Router) {

    this.categories = this.categoryMenuService.getCategoryTree();
    this.categories.subscribe(categories => {
      categories.forEach( category => {
        console.log('category path: ', category.path);
        const menuItem =  {
          path: 'category-listing:' + category.path,
          component: CategoryListingComponent
        };

        this.routes.config.unshift(menuItem);


      });
      console.log('this routes: ', this.routes.config);
    });
  }

//   ngOnInit()  {

//   }
}


