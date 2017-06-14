webpackJsonp([2],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecipesModule = (function () {
    function RecipesModule() {
    }
    return RecipesModule;
}());
RecipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recipes__["a" /* Recipes */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recipes__["a" /* Recipes */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__recipes__["a" /* Recipes */]
        ]
    })
], RecipesModule);

//# sourceMappingURL=recipes.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipes_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Recipes = (function () {
    function Recipes(navCtrl, recipesService) {
        this.navCtrl = navCtrl;
        this.recipesService = recipesService;
        this.recipes = [];
    }
    Recipes.prototype.ionViewWillEnter = function () {
        /**
         * TODO: This is added temporary while redux implementation is in progress
         * @type {"../../Observable".Observable<R>}
         */
        // this.recipes$ = this.store.select('recipes', 'recipes');
        // const recipe = new Recipe('kappa', 'keppo', 'koppa', []);
        // setTimeout(() => {
        //   this.store.dispatch(new AddRecipeAction({recipe: recipe}))
        // },500);
        /**
         * TODO: End of todo
         * @type {Array<Recipe>}
         */
        this.recipes = this.recipesService.getRecipes();
    };
    Recipes.prototype.onNewRecipe = function () {
        this.navCtrl.push('EditRecipe', { mode: 'New' });
    };
    Recipes.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push('Recipe', { recipe: recipe, index: index });
    };
    return Recipes;
}());
Recipes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-recipes',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/recipes/recipes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onNewRecipe()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Recipes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let recipe of recipes$ | async; let index = index"\n            (click)="onLoadRecipe(recipe, index)">\n      <h2>{{ recipe.title }}</h2>\n      <ion-note>{{ recipe.difficulty }}</ion-note>\n    </button>\n  </ion-list>\n  <!-- TODO: This is added temporary for implementing the store\n  <ion-list>\n    <button ion-item *ngFor="let recipe of recipes$|async; let index = index"\n            (click)="onLoadRecipe(recipe, index)">\n      <h2>{{ recipe.title }}</h2>\n      <ion-note>{{ recipe.difficulty }}</ion-note>\n    </button>\n  </ion-list>  -->\n</ion-content>\n'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/recipes/recipes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_recipes_service__["a" /* RecipesService */]])
], Recipes);

//# sourceMappingURL=recipes.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map