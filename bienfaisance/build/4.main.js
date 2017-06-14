webpackJsonp([4],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeModule", function() { return EditRecipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditRecipeModule = (function () {
    function EditRecipeModule() {
    }
    return EditRecipeModule;
}());
EditRecipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_recipe__["a" /* EditRecipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_recipe__["a" /* EditRecipe */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_recipe__["a" /* EditRecipe */]
        ]
    })
], EditRecipeModule);

//# sourceMappingURL=edit-recipe.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipes_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipe = (function () {
    function EditRecipe(navParams, actionSheetCtrl, alertCtrl, toastCtrl, recipesService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipesService = recipesService;
        this.navCtrl = navCtrl;
        this.difficultyOptions = ['Easy', 'Medium', 'Hard'];
        this.mode = 'New';
    }
    EditRecipe.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode === 'Edit')
            this.extractEditRecipeData();
        this.initializeForm();
    };
    EditRecipe.prototype.extractEditRecipeData = function () {
        this.editRecipe = this.navParams.get('recipe');
        this.editRecipeIndex = this.navParams.get('index');
    };
    EditRecipe.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode === 'Edit') {
            title = this.editRecipe.title;
            description = this.editRecipe.description;
            difficulty = this.editRecipe.difficulty;
            for (var _i = 0, _a = this.editRecipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                var ingredientGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
                    'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                    'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](ingredient.amount, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
                });
                ingredients.push(ingredientGroup);
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormArray */](ingredients)
        });
    };
    EditRecipe.prototype.onSubmit = function () {
        if (!this.recipeForm.valid)
            return;
        this.mode === 'Edit' ?
            this.recipesService.updateRecipe(this.editRecipeIndex, this.recipeForm.value) :
            this.recipesService.addRecipe(this.recipeForm.value);
        this.navCtrl.popToRoot();
    };
    EditRecipe.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add ingredient',
                    handler: function () {
                        _this.createNewIngredient();
                    }
                },
                {
                    text: 'Remove all ingredients',
                    role: 'destructive',
                    handler: function () {
                        var formArray = _this.recipeForm.get('ingredients');
                        var len = formArray.length;
                        if (len > 0) {
                            for (var i = len - 1; i >= 0; i--) {
                                formArray.removeAt(i);
                            }
                            _this.showDeleteSuccessToast();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipe.prototype.createNewIngredient = function () {
        var _this = this;
        var newIngredientAlert = this.alertCtrl.create({
            title: 'Add ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name',
                    type: 'text'
                },
                {
                    name: 'amount',
                    placeholder: 'Amount',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (_a) {
                        var name = _a.name, amount = _a.amount;
                        if (!name.trim() || !amount.trim()) {
                            _this.showIngredientInvalidToast();
                            return;
                        }
                        _this.recipeForm.get('ingredients')
                            .push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
                            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                            'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](amount, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
                        }));
                        _this.showIngredientSuccessToast();
                    }
                }
            ]
        });
        newIngredientAlert.present();
    };
    EditRecipe.prototype.showIngredientInvalidToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Please enter a valid name and amount ',
            duration: 2000
        });
        toast.present();
    };
    EditRecipe.prototype.showIngredientSuccessToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Ingredient was successfully added',
            duration: 1000
        });
        toast.present();
    };
    EditRecipe.prototype.showDeleteSuccessToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Ingredients were successfully removed',
            duration: 1000
        });
        toast.present();
    };
    return EditRecipe;
}());
EditRecipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-edit-recipe',template:/*ion-inline-start:"/Users/creua/Develope/creua-app/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ mode }} recipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text"\n                   formControlName="title">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description">\n        </ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of difficultyOptions"\n                      [value]="option">\n            {{ option }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button type="button" block\n            ion-button clear\n            (click)="onManageIngredients()">\n      Manage Incredients\n    </button>\n    <!-- TODO: Move controls to properties -->\n    <ion-list formArrayName="ingredients" no-lines>\n      <ion-grid>\n        <ion-row class="ingredient-item"\n                 *ngFor="let ingredientGroup of recipeForm.get(\'ingredients\').controls; let i = index">\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input [formControl]="ingredientGroup.controls.name" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Amount</ion-label>\n              <ion-input [formControl]="ingredientGroup.controls.amount"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <button type="submit"\n            ion-button block\n            [disabled]="!recipeForm.valid">\n      {{ mode }} Recipe\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/creua/Develope/creua-app/src/pages/edit-recipe/edit-recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_recipes_service__["a" /* RecipesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], EditRecipe);

//# sourceMappingURL=edit-recipe.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map