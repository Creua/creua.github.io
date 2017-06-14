webpackJsonp([0],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    return ShoppingListModule;
}());
ShoppingListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopping_list__["a" /* ShoppingList */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping_list__["a" /* ShoppingList */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shopping_list__["a" /* ShoppingList */]
        ]
    })
], ShoppingListModule);

//# sourceMappingURL=shopping-list.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingList = (function () {
    function ShoppingList(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.buttonText = 'Add';
        this.buttonColor = 'primary';
    }
    ShoppingList.prototype.ionViewWillEnter = function () {
        this.loadItems();
    };
    ShoppingList.prototype.loadItems = function () {
        this.buttonText = 'Add';
        this.buttonColor = 'primary';
        this.selectedItemIndex = -1;
        this.selectedName = '';
        this.selectedAmount = 0;
        this.shoppingList = this.shoppingListService.getShoppingList();
    };
    ShoppingList.prototype.onAddShoppingItem = function (form) {
        this.selectedItemIndex !== -1 ?
            this.shoppingListService.updateShoppingListItem(form.value, this.selectedItemIndex) :
            this.shoppingListService.addShoppingListItem(form.value);
        form.reset();
        this.loadItems();
    };
    ShoppingList.prototype.removeItem = function (index) {
        this.shoppingListService.removeShoppingListItem(index);
        this.loadItems();
    };
    ShoppingList.prototype.editItem = function (item, index) {
        this.setSelectedItem(item);
        this.setItemEdit(index);
    };
    ShoppingList.prototype.setSelectedItem = function (_a) {
        var name = _a.name, amount = _a.amount;
        this.selectedName = name;
        this.selectedAmount = amount;
    };
    ShoppingList.prototype.setItemEdit = function (index) {
        this.buttonColor = 'secondary';
        this.selectedItemIndex = index;
        this.buttonText = "Edit";
        this.shoppingList.forEach(function (item) { return item.edit = false; });
        this.shoppingList[index].edit = true;
    };
    return ShoppingList;
}());
ShoppingList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/shopping-list/shopping-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Shopping List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="onAddShoppingItem(form)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input type="text" name="name"\n                   placeholder="Milk"\n                   [ngModel]="selectedName"\n                   required>\n        </ion-input>\n        <ion-input type="number" name="amount"\n                   placeholder="2"\n                   [ngModel]="selectedAmount"\n                   required>\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block\n            [disabled]="form.invalid"\n            [color]="buttonColor">\n      {{ buttonText }}\n    </button>\n    <ion-list>\n      <ion-item-sliding *ngFor="let shoppingItem of shoppingList; let index = index"\n                        (press)="editItem(shoppingItem, index)"\n                        [class.edit]="shoppingItem.edit">\n        <ion-item>\n          <h3><span>Name: {{ shoppingItem.name }} </span> <span>Amount:({{ shoppingItem.amount }})</span></h3>\n        </ion-item>\n        <ion-item-options>\n          <button ion-button color="danger"\n                  (click)="removeItem(index)">\n            <ion-icon name="trash"></ion-icon>\n            Remove\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/shopping-list/shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["a" /* ShoppingListService */]])
], ShoppingList);

//# sourceMappingURL=shopping-list.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map