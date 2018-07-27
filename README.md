# NgPrototype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.4.

## Pre-requistes
NOTE: It's recommended that you add the Git client to the Windows Path so you can use it directly from regular command line/prompt. This is an option during install with most installers.

* [Git client](https://gitforwindows.org/)
* [Node.js]https://nodejs.org/download/
* Cmder Recommended console emulator replacement for cmd.exe

## Downloading the repository

Start your command prompt (either Cmder standard windows cmd.exe).

* Create a new directory where you want to put the files from this repository.
* For example if you already have a directory on c: drive called www you'll first want to navigate to that
* Do this by tying `cd c:\www`
* To create a new directory type `mkdir tgg-angular-prototype` (to call it something else just replace prototype with whatever name you want it to be)
* Make sure to navigate to the new directory by then typing `cd tgg-angular-prototype`

*Then type the following commands.*
* type `npm install -g @angular/cli` in the command line
    * this will download the angular cli
* `git clone https://github.com/lifeonlars/tgg-angular-prototype.git .`
    * NOTE: The "." at the end specifies the current folder as the checkout folder.
    * This should download all the files from the git repository and might take a few minutes.
* When the download is complete type `npm install`
    * This will download all the node dependencies used for the project.
* When the packages download is complete type `ng serve`
    * This will start the local web server and view the prototype in your browser.
    * After a few seconds this should automatically start your browser and open up http://localhost:4200/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## MODULES

### Shared Module

Contains common layout elements like masthead, menus, footer as well as other re-usable components

### Products Module

Contains products page, search/category listing pages

### Cart Module

Contains cart, checkout, order confirmation pages.

### User Module (low priority)

Contains My Account sections

## COMPONENTS

### Re-usable components

 * Product Tile
    - Standard Tile (grid view)
    - List Tile (should list view of tiles be a separate component?)
    - Slim Tile (for certona style widgets and cross sell in cart)
 * Product Slider (standard tiles and slim slider variants)
 * Banner slider (homepage)
 * Pagination component
 * Postcode search
 * Store listing

### UI / Shared Components

 - Masthead
   * Search box
   * Minicart
   * Main Navbar (main menu)
     - Products menu
     - Brands menu
     - Deals & offers menu
     - Installation & services menu
   * Mobile menu
   * Set store
 - Footer


## SERVICES

### Cart Service
 - Load cart contents
 - Add to cart
 - Remove from cart
 - Empty cart
 - Cart Total

### Fulfilment Service (aka delivery/pickup)
 - List delivery options (given region type => region type requires postcode)
 - Calculate delivery cost (given type/postcode)
 - Pick-up options (given store ID => store id requires postcode)
 - Load selected fulfillment options (if delivery or pick-up is selected, load previous options)

 *Product API*

  - Single product by ID
  - Products by category
  - Products by keyword (name only)
  - Products by IDs (array of IDs)

  *Postcode Zone API*
   - Return delivery zone based on postcode (metro, local, regional-a, regional-b, remote)

  *Store API*
   - Load single store information based on ID (Address, opening hours, phone number etc.)

  *Category API*
   - Load single category information based on ID

