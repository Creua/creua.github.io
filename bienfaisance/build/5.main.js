webpackJsonp([5],{

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* Blog */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog__["a" /* Blog */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* Blog */]
        ]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Blog = (function () {
    function Blog(navParams, navCtrl, sceneData, alertCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.sceneData = sceneData;
        this.alertCtrl = alertCtrl;
        this.scene = {};
    }
    Blog.prototype.ngOnInit = function () {
        var _this = this;
        this.blog = this.navParams.get('blog');
        this.blogIndex = this.navParams.get('index');
        this.sceneData.getScene().then(function (data) { return _this.scene = data; });
    };
    Blog.prototype.openGroup = function (group) {
        this.sceneData.openGroup(group);
    };
    Blog.prototype.openLink = function (url) {
        this.sceneData.openLink(url);
    };
    Blog.prototype.sendForm = function (form) {
        this.sceneData.sendForm(form);
    };
    return Blog;
}());
Blog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-blog',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/blog/blog.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button outline menuToggle>\n      <ion-icon [name]="scene.groupIcon || \'menu\'"></ion-icon>\n    </button>\n    <ion-title>{{ scene.page ? scene.page.title : \'...\' }}</ion-title>\n    <ion-buttons end>\n      <button ion-button outline menuClose="right" menuToggle="right" end>\n        <ion-icon [name]="scene.subjectIcon || \'more\'"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="!!scene.page" padding>\n    <div *ngFor="let el of scene.page.elements" class="element" [ngSwitch]="el.type">\n      <h2 *ngSwitchCase="\'title\'" padding-top>{{ el.content }}</h2>\n      <h4 *ngSwitchCase="\'subtitle\'" padding-top>{{ el.content }}</h4>\n      <ion-card *ngSwitchCase="\'caption\'"><ion-card-content [innerHTML]="el.content"></ion-card-content></ion-card>\n      <div *ngSwitchCase="\'content\'" [innerHTML]="el.content" class="element_content" padding></div>\n      <ion-card *ngSwitchCase="\'image\'">\n        <img *ngSwitchCase="\'image\'" [src]="el.props[0]" (onerror)="this.src = scene.defaultImage"/>\n        <ion-card-content *ngIf="el.content">{{ el.content }}</ion-card-content>\n      </ion-card>\n      <button *ngSwitchCase="\'link\'" padding-left ion-button outline (click)="openLink(el.props[1])">{{ scene.dictionary[el.props[0]] ? scene.dictionary[el.props[0]][scene.language] : el.props[0] }}</button>\n      <ion-list *ngSwitchCase="\'form\'" padding-top>\n        <h3 *ngIf="scene.containers.form[el.props[0]].menu">{{ scene.dictionary[scene.containers.form[el.props[0]].menu] ? scene.dictionary[scene.containers.form[el.props[0]].menu][scene.language] : scene.containers.form[el.props[0]].menu }}</h3>\n        <form [formGroup]="scene.containers.form[el.props[0]].edit">\n          <ion-item *ngFor="let input of scene.containers.form[el.props[0]].elements" [ngSwitch]="input.type">\n            <ion-label *ngIf="input.type !== \'checkbox\'" floating>{{ input.label || (scene.dictionary[input.props[0]] ? scene.dictionary[input.props[0]][scene.language] : (scene.dictionary[input.props[1]] ? scene.dictionary[input.props[1]][scene.language] : input.props[1])) }}</ion-label>\n            <ion-input *ngSwitchCase="\'input\'" type="text" [formControlName]="input.props[0]"></ion-input>\n            <ion-input *ngSwitchCase="\'e-mail\'" type="email" pattern="[^ @]*@[^ @]*" [formControlName]="input.props[0]"></ion-input>\n            <ion-input *ngSwitchCase="\'text-area\'" type="text-area" [formControlName]="input.props[0]"></ion-input>\n            <ion-select *ngSwitchCase="\'select\'" type="text" [formControlName]="input.props[0]">\n              <ion-option *ngFor="let opt of scene.containers.select[input.props[0]].elements" [value]="opt.props[0]">\n                {{ scene.dictionary[opt.props[0]] ? scene.dictionary[opt.props[0]][scene.language] : opt.props[0] }}\n              </ion-option>\n            </ion-select>\n            <ion-label *ngIf="input.type === \'checkbox\'" stacked text-wrap padding-bottom>{{ input.label || (scene.dictionary[input.props[0]] ? scene.dictionary[input.props[0]][scene.language] : (scene.dictionary[input.props[1]] ? scene.dictionary[input.props[1]][scene.language] : input.props[1])) }}</ion-label>\n            <ion-checkbox *ngSwitchCase="\'checkbox\'" [formControlName]="input.props[0]"></ion-checkbox>\n          </ion-item><br/>\n          <ion-fab right padding-right>\n            <button ion-fab color="green"><ion-icon name="checkmark"></ion-icon></button>\n          </ion-fab><br/><br/>\n          <!--button (click)="sendForm(el.props[0])" outline ion-button icon-only><ion-icon name="checkmark"></ion-icon></button-->\n        </form>\n      </ion-list>\n    </div>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/blog/blog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* SceneData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Blog);

//# sourceMappingURL=blog.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map