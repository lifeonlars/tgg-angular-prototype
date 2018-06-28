import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryMenuService } from './shared/services/category-menu.service';
import { Observable } from 'rxjs';

const routes: Routes = [

  { path: 'category-listing', component: CategoryListingComponent },
  {path: 'category-listing/:id', component: CategoryListingComponent, runGuardsAndResolvers: 'always'},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  private categories: Observable<any>;

  constructor() {

  }
}
