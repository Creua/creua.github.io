webpackJsonp([1],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneModule", function() { return SceneModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SceneModule = (function () {
    function SceneModule() {
    }
    return SceneModule;
}());
SceneModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__scene__["a" /* Scene */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scene__["a" /* Scene */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__scene__["a" /* Scene */]
        ]
    })
], SceneModule);

//# sourceMappingURL=scene.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(95);
/* unused harmony export PAGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PAGES = {
    SHOPPING_LIST: 'ShoppingList',
    RECIPES: 'Recipes',
    BLOG: 'Blog'
};
var Scene = (function () {
    function Scene(sceneData) {
        var _this = this;
        this.sceneData = sceneData;
        this.scene = {};
        this.shoppingListPage = PAGES.SHOPPING_LIST;
        this.recipesPage = PAGES.RECIPES;
        this.blogPage = PAGES.BLOG;
        this.sceneData.getScene().then(function (data) { return _this.scene = data; });
    }
    return Scene;
}());
Scene = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-scene',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/scene/scene.html"*/'<ion-tabs *ngIf="scene.structure && scene.structure.menu.center.length > 0">\n  <ion-tab [root]="shoppingListPage"\n           tabIcon="list-box" tabTitle="Shopping List">\n  </ion-tab>\n  <ion-tab [root]="recipesPage"\n           tabIcon="book" tabTitle="Recipes">\n  </ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/scene/scene.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["c" /* SceneData */]])
], Scene);

//# sourceMappingURL=scene.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map