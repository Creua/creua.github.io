webpackJsonp([3],{

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeModule", function() { return RecipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecipeModule = (function () {
    function RecipeModule() {
    }
    return RecipeModule;
}());
RecipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recipe__["a" /* Recipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recipe__["a" /* Recipe */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__recipe__["a" /* Recipe */]
        ]
    })
], RecipeModule);

//# sourceMappingURL=recipe.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipes_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Recipe = (function () {
    function Recipe(navParams, navCtrl, shoppingListService, recipesService, toastCtrl, alertCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.shoppingListService = shoppingListService;
        this.recipesService = recipesService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    Recipe.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.recipeIndex = this.navParams.get('index');
    };
    Recipe.prototype.onEditRecipe = function () {
        this.navCtrl.push('EditRecipe', {
            mode: 'Edit',
            recipe: this.recipe,
            index: this.recipeIndex
        });
    };
    Recipe.prototype.onDeleteRecipe = function () {
        this.showDeleteConfirmationAlert();
    };
    Recipe.prototype.showDeleteConfirmationAlert = function () {
        var _this = this;
        var deleteConfirmation = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to delete this recipe? This action can\'t be undone',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    cssClass: 'danger-button',
                    handler: function () {
                        _this.deleteRecipe();
                    }
                }
            ]
        });
        deleteConfirmation.present();
    };
    Recipe.prototype.deleteRecipe = function () {
        this.recipesService.removeRecipe(this.recipeIndex);
        this.navCtrl.popToRoot();
    };
    Recipe.prototype.onAddIngredientsToShoppingList = function () {
        !this.ingredientsAdded ? this.addToShoppingList() : this.showConfirmationAddAlert();
    };
    Recipe.prototype.addToShoppingList = function () {
        this.shoppingListService.addShoppingListItems(this.recipe.ingredients);
        this.showSuccesAddedIngredientsToast();
        this.ingredientsAdded = true;
    };
    Recipe.prototype.showSuccesAddedIngredientsToast = function () {
        var successToast = this.toastCtrl.create({
            message: 'Ingredients were successfully added to the shopping list',
            duration: 2000
        });
        successToast.present();
    };
    Recipe.prototype.showConfirmationAddAlert = function () {
        var _this = this;
        var confirmationAddAlert = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to add ingredients? They were already added.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function () { return _this.addToShoppingList(); }
                }
            ]
        });
        confirmationAddAlert.present();
    };
    return Recipe;
}());
Recipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-recipe',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/recipe/recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ recipe.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col>\n        <h2> {{ recipe.title }}</h2>\n        <div class="subtitle">{{ recipe.difficulty }}</div>\n        <ion-row>\n          <ion-col>\n            <p>{{ recipe.description }}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-list>\n              <h3 *ngIf="recipe.ingredients.length > 0">Ingredients</h3>\n              <ion-item *ngFor="let ingredient of recipe.ingredients">\n                {{ ingredient.name }}\n                {{ ingredient.amount }}\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="recipe.ingredients.length > 0">\n          <ion-col>\n            <button ion-button clear\n                    (click)="onAddIngredientsToShoppingList()">\n              Add Ingredients to shopping list\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button outline block\n                    (click)="onEditRecipe()">\n              Edit Recipe\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button outline block color="danger"\n                    (click)="onDeleteRecipe()">\n              Delete recipe\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/recipe/recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* ShoppingListService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_recipes_service__["a" /* RecipesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Recipe);

//# sourceMappingURL=recipe.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map