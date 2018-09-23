webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<ng-flash-message></ng-flash-message>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_simple_slideshow__ = __webpack_require__("./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_auth_guard__ = __webpack_require__("./src/app/service/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_root_root_component__ = __webpack_require__("./src/app/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_foodrecipes_foodrecipe_foodrecipe_component__ = __webpack_require__("./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_foodrecipes_addrecipe_addrecipe_component__ = __webpack_require__("./src/app/components/foodrecipes/addrecipe/addrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_foodrecipes_allrecipe_allrecipe_component__ = __webpack_require__("./src/app/components/foodrecipes/allrecipe/allrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_foodrecipes_recieview_recieview_component__ = __webpack_require__("./src/app/components/foodrecipes/recieview/recieview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_adminpanel_adminpanel_component__ = __webpack_require__("./src/app/components/admin/adminpanel/adminpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var applicationRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_root_root_component__["a" /* RootComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'foodrecipe', component: __WEBPACK_IMPORTED_MODULE_15__components_foodrecipes_foodrecipe_foodrecipe_component__["a" /* FoodrecipeComponent */] },
    { path: 'addrecipe', component: __WEBPACK_IMPORTED_MODULE_16__components_foodrecipes_addrecipe_addrecipe_component__["a" /* AddrecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'allrecipe', component: __WEBPACK_IMPORTED_MODULE_17__components_foodrecipes_allrecipe_allrecipe_component__["a" /* AllrecipeComponent */] },
    { path: 'allrecipe/:recipename', component: __WEBPACK_IMPORTED_MODULE_18__components_foodrecipes_recieview_recieview_component__["a" /* RecieviewComponent */] },
    { path: 'profile/:recipename', component: __WEBPACK_IMPORTED_MODULE_18__components_foodrecipes_recieview_recieview_component__["a" /* RecieviewComponent */] },
    { path: 'adminpanel', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_adminpanel_adminpanel_component__["a" /* AdminpanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'adminpanel/:recipename', component: __WEBPACK_IMPORTED_MODULE_18__components_foodrecipes_recieview_recieview_component__["a" /* RecieviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_foodrecipes_foodrecipe_foodrecipe_component__["a" /* FoodrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_foodrecipes_addrecipe_addrecipe_component__["a" /* AddrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_foodrecipes_allrecipe_allrecipe_component__["a" /* AllrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_foodrecipes_recieview_recieview_component__["a" /* RecieviewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_adminpanel_adminpanel_component__["a" /* AdminpanelComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(applicationRoutes),
                __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__service_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/adminpanel/adminpanel.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: bisque;\r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: blue;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n  }\r\n  .add{\r\n    width: 100%;\r\n   \r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n  .add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\n  ul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n  img {\r\n    float: center;\r\n}\r\n  .nav_image:hover {\r\n    border-radius: 60%;\r\n    background-color:beige;\r\n}\r\n  #menu-outer {\r\n    margin-top: 0px;\r\n\theight: auto;\r\n    \r\n}\r\n  #horizontal-list{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color:#111111;\r\n    \r\n}\r\n  #pending{\r\n    background-color: yellow;\r\n  }\r\n  #accepted{\r\n    background-color: green;\r\n  }\r\n  #rejected{\r\n    background-color: red;\r\n  }\r\n  .func{\r\n    margin-left:5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/admin/adminpanel/adminpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br><br>\r\n  <button class=\"btn btn-warning btn-lg func\" (click)=\"pending()\">Pending</button>\r\n  <button class=\"btn btn-success btn-lg func\" (click)=\"accepted()\">Accepted</button>\r\n  <button class=\"btn btn-danger btn-lg func\" (click)=\"rejected()\">Rejected</button>\r\n  <hr>\r\n  <h2>{{this.headline}}</h2>\r\n  <hr>\r\n  \r\n      <ul *ngFor=\"let recipies of recipe;let i = index\" [attr.data-index]=\"i\">\r\n        <div *ngIf=\"recipies.status==this.mystate\">\r\n         <div *ngIf=\"recipies.status=='accepted'\">\r\n         <li>\r\n          <button [routerLink]=\"['/adminpanel',recipies.recipename]\" class=\"add\" id=\"accepted\">\r\n            <div id=\"container\"style=\"height:5%\">\r\n                <div class=\"row\" style=\"height:5%\">\r\n                  <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                  <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                  </div>\r\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                  <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                  <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n                  <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </button>\r\n        </li>\r\n        </div>\r\n\r\n        <div *ngIf=\"recipies.status=='rejected'\">\r\n          <li >\r\n           <button [routerLink]=\"['/adminpanel',recipies.recipename]\" class=\"add\" id=\"rejected\">\r\n            <div id=\"container\"style=\"height:5%\">\r\n                <div class=\"row\" style=\"height:5%\">\r\n                  <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                  <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                  </div>\r\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                  <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                  <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n                  <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n                  </div>\r\n                </div>\r\n             </div>\r\n           </button>\r\n         </li>\r\n         </div>\r\n\r\n         <div *ngIf=\"recipies.status=='pending'\">\r\n          <li >\r\n           <button [routerLink]=\"['/adminpanel',recipies.recipename]\" class=\"add\" id=\"pending\">\r\n            <div id=\"container\"style=\"height:5%\">\r\n                <div class=\"row\" style=\"height:5%\">\r\n                  <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                  <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                  </div>\r\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                  <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                  <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n                  <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n                  </div>\r\n                </div>\r\n             </div>\r\n           </button>\r\n         </li>\r\n         </div>\r\n        </div>\r\n      </ul>\r\n    \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/admin/adminpanel/adminpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminpanelComponent = /** @class */ (function () {
    function AdminpanelComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.isadmin();
        this.mystate = "pending";
        this.headline = "Pending Posts";
        this.catogary = {
            "mycatogory": "all"
        };
        this.catogary = {
            "mycatogory": "all"
        };
        this.authservice.getAllRecipe().subscribe(function (res) {
            if (res.state) {
                _this.recipe = res.recipe;
                _this.imgurl = res.pic_url;
                //console.log("ds");
                // console.log(res.recipe);
                //this.recipe=res.recipe;
                //console.log(this.recipe);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
    };
    AdminpanelComponent.prototype.accepted = function () {
        this.mystate = "accepted";
        this.headline = "Accepted Posts";
        ;
    };
    AdminpanelComponent.prototype.rejected = function () {
        this.mystate = "rejected";
        this.headline = "Rejected Posts";
        ;
    };
    AdminpanelComponent.prototype.pending = function () {
        this.mystate = "pending";
        this.headline = "Pending Posts";
    };
    AdminpanelComponent.prototype.isadmin = function () {
        var _this = this;
        if (this.authservice.loggedIn()) {
            //return true;
            this.authservice.Isadmin().subscribe(function (res) {
                if (res.state) {
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    AdminpanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminpanel',
            template: __webpack_require__("./src/app/components/admin/adminpanel/adminpanel.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/adminpanel/adminpanel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminpanelComponent);
    return AdminpanelComponent;
}());



/***/ }),

/***/ "./src/app/components/foodrecipes/addrecipe/addrecipe.component.css":
/***/ (function(module, exports) {

module.exports = ".addrecipe{\r\n        color: aliceblue;\r\n        margin-top: 2%;\r\n        text-align: left;\r\n        padding: 3% 5% 3% 5%;\r\n        background-color: #4c5941;\r\n        border-radius: 10px;\r\n        border-color: #a0a39e;\r\n        border-style: solid;\r\n        border-width: 5px;  \r\n        margin-bottom: 3%; \r\n        font-size: 150%; \r\n}\r\n#rate{\r\n    margin-left: 8%;\r\n}\r\n#catagory{\r\n    margin-left: 8%; \r\n}\r\nbutton{\r\n margin-left: 2%;\r\n margin-right: 2%;\r\n}"

/***/ }),

/***/ "./src/app/components/foodrecipes/addrecipe/addrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container addrecipe\">\r\n  <form class=\"form\" #form=ngForm (submit)=\"addrecipe()\">\r\n      <fieldset>\r\n        <legend style=\"text-align:center\"><h2>Publish Recipe</h2> </legend>\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Recipe Name:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"recipename\" placeholder=\"Food name\" name=\"recipename\" [(ngModel)]=\"recipename\" required>\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Ingredients:</label>\r\n               <!-- <input type=\"textarea\"  class=\"form-control\" id=\"ingredients\"  name=\"ingredients\" [(ngModel)]=\"ingredients\"  > -->\r\n                <textarea cols=\"5\" rows=\"10\" class=\"form-control\" id=\"ingredients\" placeholder=\"enter Ingredients (use ',' to separate)\" name=\"ingredients\" [(ngModel)]=\"ingredients\" ></textarea>\r\n              </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Directions:</label>\r\n              <!--input type=\"text\"  class=\"form-control\" id=\"directions\"  name=\"directions\" [(ngModel)]=\"directions\"  -->\r\n              <textarea cols=\"5\" rows=\"10\" class=\"form-control\" id=\"directions\" placeholder=\"enter Directions\" name=\"directions\" [(ngModel)]=\"directions\" ></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Prep-Time:</label>\r\n              <input type=\"number\"   min=\"0\" class=\"form-control\" id=\"preptime\"  name=\"preptime\" [(ngModel)]=\"preptime\"  >\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Cook-Time:</label>\r\n              <input type=\"number\"   min=\"0\" class=\"form-control\" id=\"cooktime\"  name=\"cooktime\" [(ngModel)]=\"cooktime\"  >\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Ready-Tme:</label>\r\n              <input type=\"number\"   min=\"0\" class=\"form-control\" id=\"readytime\"  name=\"readytime\" [(ngModel)]=\"readytime\"  >\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">No of Serves:</label>\r\n              <input type=\"number\"   min=\"0\" class=\"form-control\" id=\"serves\"  name=\"serves\" [(ngModel)]=\"serves\" >\r\n            </div>\r\n            <!--\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Notes</label>\r\n              <input type=\"text\"  class=\"form-control\" id=\"notes\"  name=\"notes\" [(ngModel)]=\"notes\" >\r\n            </div>\r\n            -->\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Rate:</label><br>\r\n                <input type=\"radio\" class=\"\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\" value=\"Hard\">Hard<br>\r\n                <input type=\"radio\" class=\"\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\" value=\"Normal\">Normal<br>\r\n                <input type=\"radio\" class=\"\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\" value=\"easy\">easy<br>\r\n                <input type=\"radio\" class=\"\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\" value=\"more Easy\">More Easy<br>\r\n              </div>\r\n  \r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Notes:</label>\r\n              <textarea cols=\"5\" rows=\"10\" class=\"form-control\" id=\"notes\" placeholder=\"enter Special notes\" name=\"notes\" [(ngModel)]=\"notes\" ></textarea>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Category:</label><br>\r\n              <input type=\"radio\" class=\"\" id=\"catagory\" name=\"catagory\" [(ngModel)]=\"catagory\" value=\"Rice and Curry\">Rice and curry<br>\r\n              <input type=\"radio\" class=\"\" id=\"catagory\" name=\"catagory\" [(ngModel)]=\"catagory\" value=\"Cakes\">Cakes<br>\r\n              <input type=\"radio\" class=\"\" id=\"catagory\" name=\"catagory\" [(ngModel)]=\"catagory\" value=\"Short Meal\">Short Meal<br>\r\n              <input type=\"radio\" class=\"\" id=\"catagory\" name=\"catagory\" [(ngModel)]=\"catagory\" value=\"Other\">Other<br>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Quick Discription:</label>\r\n              <textarea cols=\"5\" rows=\"10\" class=\"form-control\" id=\"description\" placeholder=\"enter description\" name=\"description\" [(ngModel)]=\"description\" ></textarea>\r\n            </div>\r\n          \r\n            <div>\r\n                <label for=\"exampleInputPassword1\">Image:</label><br>\r\n              <img [src]=\"imageUrl\" style=\"width: 250px; height: 200px;\">\r\n              <input type=\"file\" #image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" required>\r\n          </div>\r\n  \r\n  \r\n          <br><br>\r\n          <div style=\"text-align:center\">\r\n          <button [routerLink]=\"['/foodrecipe']\" class=\"btn btn-info btn-lg back\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span> Back\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Save recipe</button>\r\n        <button type=\"reset\" class=\"btn btn-secondary btn-lg\">Reset</button>\r\n      </div>\r\n      </fieldset>\r\n    </form>\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/components/foodrecipes/addrecipe/addrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddrecipeComponent = /** @class */ (function () {
    function AddrecipeComponent(authservice, ngFlashMessageService, router, _location) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this._location = _location;
        this.imageUrl = "../../../assets/images/defualt.jpg";
        this.fileToUpload = null;
    }
    AddrecipeComponent.prototype.ngOnInit = function () {
    };
    AddrecipeComponent.prototype.addrecipe = function () {
        var _this = this;
        var newrecipe = {
            recipename: this.recipename,
            ingredients: this.ingredients,
            directions: this.directions,
            preptime: this.preptime,
            cooktime: this.cooktime,
            readytime: this.readytime,
            serves: this.serves,
            notes: this.notes,
            rate: this.rate,
            catagory: this.catagory,
            description: this.description,
            fileToUpload: this.fileToUpload
        };
        console.log(newrecipe);
        this.authservice.addrecipe(newrecipe).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                console.log(res.msg);
                _this.router.navigate(['foodrecipe']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
            }
        });
    };
    AddrecipeComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //preview image
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    AddrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addrecipe',
            template: __webpack_require__("./src/app/components/foodrecipes/addrecipe/addrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/foodrecipes/addrecipe/addrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], AddrecipeComponent);
    return AddrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/foodrecipes/allrecipe/allrecipe.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.add{\r\n    width: 100%;\r\n   \r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n/*nav bar*/\r\n.nav_image {\r\n    border-radius: 50%;\r\n    width:30%; \r\n    height: relative;\r\n    color: white;\r\n    padding: 10px;\r\n  }\r\n.nav_image:hover {\r\n    border-radius: 60%;\r\n    background-color:beige;\r\n}\r\n#menu-outer {\r\n    margin-top: 0px;\r\n\theight: auto;\r\n    \r\n    \r\n}\r\n#horizontal-list{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color:#111111;\r\n    \r\n}\r\n#sidebar{\r\n    float: right;\r\n    \r\n    padding: 10px;\r\n}\r\n.sidecontent{\r\n    background-color: #5e6d6d;\r\n    padding-bottom: 5%;\r\n    padding-top: 5%;\r\n}\r\n.headline{\r\n    text-align: center;\r\n}\r\n#sidebarpic{\r\n    height: 35px;\r\n    width: 35px;\r\n}\r\n.sideadd{\r\n    \r\n    width: 90%;\r\n    height: 80px;\r\n    \r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n}\r\n#sidebarpic{\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n.sideadd:hover{\r\n    color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n\r\n}\r\n.bar:hover{\r\n    color: #c9a428;\r\n    background-color: #605f5c;\r\n}\r\n/*dropdown*/\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}"

/***/ }),

/***/ "./src/app/components/foodrecipes/allrecipe/allrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<table class=\"table table-striped\" style=\"text-align:center;background-color: black;\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col-dm-8\">\r\n            <div class=\"dropdown\">\r\n                <button class=\"dropbtn\">SELECT CATOGARY</button>\r\n                <div class=\"dropdown-content\">\r\n                    <button (click)=\"all()\" class=\"btn btn-lg bar\">ALL RECIPES</button><br>\r\n                    <button (click)=\"riceNcurry()\" class=\"btn btn-lg bar\">RICE & CURRY</button><br>\r\n                    <button (click)=\"cakes()\" class=\"btn btn-lg bar\">CAKE</button><br>\r\n                    <button (click)=\"shortmeals()\" class=\"btn btn-lg bar\">SHORT MEALS</button><br>\r\n                    <button (click)=\"other()\" class=\"btn btn-lg bar\">OTHER</button><br>\r\n                </div>\r\n              </div>\r\n        </th>\r\n        <th scope=\"col-dm-8\">\r\n            <div class=\"dropdown\">\r\n          <button [routerLink]=\"['/addrecipe']\" class=\"dropbtn\">ADD NEW RECIPE</button>\r\n              </div>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n      \r\n  \r\n    \r\n\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              \r\n            <div class=\"col-xs-7 col-sm-6 col-lg-8\" >\r\n                <ul *ngFor=\"let recipies of recipe;let i = index\" [attr.data-index]=\"i\">\r\n                    <li *ngIf=\"catogary.mycatogory==recipies.catagory \">\r\n                      <button [routerLink]=\"['/allrecipe',recipies.recipename]\" class=\"add\">\r\n                        <div id=\"container\"style=\"height:5%\">\r\n                            <div class=\"row\" style=\"height:5%\">\r\n                              <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                              <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                              </div>\r\n                              <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                              <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                              <h2 style=\"font-size:110%;\">{{ recipies.description  }}</h2>\r\n                              </div>\r\n                            </div>\r\n                         </div>\r\n                      </button>\r\n                    </li>\r\n                    <li *ngIf=\"catogary.mycatogory=='all'\">\r\n                     <button [routerLink]=\"['/allrecipe',recipies.recipename]\" class=\" add\">\r\n                      <div id=\"container\"style=\"height:5%\">\r\n                          <div class=\"row\" style=\"height:5%\">\r\n                            <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                            <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                            </div>\r\n                            <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                            <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                            <h2 style=\"font-size:110%;\">{{ recipies.description  }}</h2>\r\n                            </div>\r\n                          </div>\r\n                       </div>\r\n                     </button>\r\n                   </li>\r\n                   </ul>\r\n                 </div>\r\n\r\n                 <div class=\"col-xs-5 col-sm-6 col-lg-4\"  >\r\n                    <div id=\"\">\r\n                        <div class=\"sidecontent\">\r\n                            <h2 class='headline'>Most Popular Recipes</h2>\r\n                            <ul *ngFor=\"let recipies of sidebarrecipe;let i = index\" [attr.data-index]=\"i\">\r\n                            <li >\r\n                                <button [routerLink]=\"['/allrecipe',recipies.recipename]\" class=\"sideadd\">\r\n                                  <div id=\"container\"style=\"height:5%\">\r\n                                    <div class=\"row\" style=\"height:5%\">\r\n                                      <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2%;\">\r\n                                      <img src=\"{{ recipies.imageUrl }}\" id=\"sidepic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;margin-top: -30%;margin-left:5%;\">\r\n                                      </div>\r\n                                      <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;margin-top: -5%;\">\r\n                                      <h1  style=\"font-size:120%;\"> {{ recipies.recipename }}</h1><br>\r\n                                      <h2 style=\"font-size:100%;margin-top:-10%;\">LIKES : {{ recipies.likes  }}</h2>\r\n                                      </div>\r\n                                    </div>\r\n                                 </div>\r\n                                </button>\r\n                              </li>\r\n                            </ul>\r\n                        </div>\r\n                </div>\r\n              </div>\r\n               \r\n                 \r\n            </div>\r\n           \r\n        </div>"

/***/ }),

/***/ "./src/app/components/foodrecipes/allrecipe/allrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllrecipeComponent = /** @class */ (function () {
    function AllrecipeComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.catogary = {
            "mycatogory": "all"
        };
        this.authservice.getAllacceptedRecipe().subscribe(function (res) {
            if (res.state) {
                _this.recipe = res.recipe;
                _this.imgurl = res.pic_url;
                //console.log("ds");
                // console.log(res.recipe);
                //this.recipe=res.recipe;
                //console.log(this.recipe);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
        this.authservice.getMostliked().subscribe(function (res) {
            if (res.state) {
                _this.sidebarrecipe = res.recipe;
                _this.sidebarimgurl = res.pic_url;
                //console.log("ds");
                // console.log(res.recipe);
                //this.recipe=res.recipe;
                //console.log(this.sidebarrecipe);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    }
    AllrecipeComponent.prototype.ngOnInit = function () {
    };
    // title = 'Tour of Heroes';
    // heroes = ['Windstorm', 'Bombasto', 'Magneta'];
    // myHero = this.heroes[0];
    AllrecipeComponent.prototype.all = function () {
        this.catogary = {
            "mycatogory": "all"
        };
    };
    AllrecipeComponent.prototype.riceNcurry = function () {
        this.catogary = {
            "mycatogory": "Rice and Curry"
        };
    };
    AllrecipeComponent.prototype.cakes = function () {
        this.catogary = {
            "mycatogory": "Cakes"
        };
    };
    AllrecipeComponent.prototype.shortmeals = function () {
        this.catogary = {
            "mycatogory": "Short Meal"
        };
    };
    AllrecipeComponent.prototype.other = function () {
        this.catogary = {
            "mycatogory": "Other"
        };
    };
    AllrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-allrecipe',
            template: __webpack_require__("./src/app/components/foodrecipes/allrecipe/allrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/foodrecipes/allrecipe/allrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AllrecipeComponent);
    return AllrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.css":
/***/ (function(module, exports) {

module.exports = ".nav_image {\r\n    border-radius: 50%;\r\n    width:150px; \r\n    height: 150px;\r\n  \r\n  }\r\n\r\n\r\n\r\n\r\nimg {\r\n   \r\n    color: white;\r\n    \r\n    padding: 20px;\r\n   \r\n}\r\n\r\n\r\n\r\n\r\n.nav_image:hover {\r\n    border-radius: 60%;\r\n    background-color:beige;\r\n}\r\n\r\n\r\n\r\n\r\n#menu-outer {\r\n    margin-top: 0px;\r\n\theight: auto;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n.table {\r\n\tdisplay: table;   /* Allow the centering to work */\r\n\tmargin: 0 auto;\r\n}\r\n\r\n\r\n\r\n\r\ntable{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color:#111111;\r\n     \r\n}"

/***/ }),

/***/ "./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<slideshow [height]=\"'300px'\"\r\n           [minHeight]=\"'0px'\"\r\n           [autoPlay]=\"true\"\r\n           [showArrows]=\"true\"\r\n           [showDots]=\"true\"\r\n           [imageUrls]=\"imageSources\"\r\n           [lazyLoad]=\"imageSources?.length > 1\"\r\n           [autoPlayWaitForLazyLoad]=\"true\">\r\n</slideshow>\r\n\r\n<app-allrecipe></app-allrecipe>\r\n\r\n\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodrecipeComponent = /** @class */ (function () {
    function FoodrecipeComponent() {
        this.imageSources = ["../../../assets/images/ta.jpg",
            "../../../assets/images/cook1.jpg",
            "../../../assets/images/2c.jpg"];
    }
    FoodrecipeComponent.prototype.ngOnInit = function () {
    };
    FoodrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foodrecipe',
            template: __webpack_require__("./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/foodrecipes/foodrecipe/foodrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FoodrecipeComponent);
    return FoodrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/foodrecipes/recieview/recieview.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ntable{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n\r\n}\r\nimg{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n.liked{\r\n    margin-left: 5%;\r\n    background-color: green;\r\n}\r\n.noliked{\r\n    margin-left: 5%;\r\n    \r\n}\r\n.back{\r\n    margin-right: 5%;\r\n}\r\n.container{\r\n    \r\n    background-color: floralwhite;\r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: #545952;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    margin-bottom: 3%;\r\n    font-size: 160%;\r\n  }"

/***/ }),

/***/ "./src/app/components/foodrecipes/recieview/recieview.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div>\r\n    <br>\r\n    <h1 class=\"alert-heading \">{{myrecipe.recipename}}</h1>\r\n      <img src={{myrecipe.imageUrl}} alt=\"\" class=\"rounded\"/>\r\n      <hr>\r\n      <table >\r\n        <tr>\r\n          <td>Catogory: {{myrecipe.catagory}}</td>\r\n          <td>Rate: {{myrecipe.rate}}</td>\r\n          <td>Likes: {{likes}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Prep-Time: {{myrecipe.preptime}} min.</td>\r\n          <td>Cook-Time: {{myrecipe.cooktime}} min.</td>\r\n          <td>Ready-Time: {{myrecipe.readytime}} min.</td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <td>Serves: {{myrecipe.serves}}</td>\r\n          <td></td>\r\n        </tr>\r\n      </table>\r\n      <hr>\r\n      <div >\r\n          <h3>Description:</h3>\r\n          <p>{{myrecipe.description}}</p> \r\n        </div>\r\n        <hr>\r\n      <div>\r\n        <h3>Ingregients:</h3>\r\n        <p>{{myrecipe.ingredients}}</p> \r\n      </div>\r\n      <hr>\r\n      <div>\r\n          <h3>Directions:</h3>\r\n          <p>{{myrecipe.directions}}</p> \r\n        </div>\r\n      \r\n      <div  *ngIf=\"myrecipe.notes!=''\">\r\n          <hr>\r\n          <h3>Special Notes:</h3>\r\n          <p>{{myrecipe.notes}}</p> \r\n          \r\n        </div>\r\n        <hr>\r\n          <button [routerLink]=\"['../']\" class=\"btn btn-info btn-lg back\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span> Back\r\n          </button>\r\n          <iframe src=\"https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A4200%2Fallrecipe%2Fhot%2520dog&layout=button&size=large&mobile_iframe=true&width=73&height=28&appId\" width=\"73\" height=\"28\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n          <button class=\"btn btn-info btn-lg liked\" (click)=\"unlike()\" *ngIf=\"Islike\">\r\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span> Liked\r\n          </button>\r\n          <button class=\"btn btn-info btn-lg noliked\" (click)=\"like()\" *ngIf=\"Islike==false\">\r\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span> Like \r\n          </button>\r\n\r\n            <div  *ngIf=\"isrealuser==true\">\r\n              <br>\r\n              <button (click)=\"deleterecipe()\">Delete this Recipe</button>\r\n            </div>\r\n            <div *ngIf=\"admin==true\">\r\n                <hr>\r\n                <h3>Status: {{this.status}}</h3>\r\n                <button class=\"btn btn-success btn-lg \" (click)=\"accept()\" *ngIf=\"this.status!='accepted'\">Accept</button>\r\n                <button class=\"btn btn-info btn-lg \" (click)=\"pending()\" *ngIf=\"this.status!='pending'\">Pending</button>\r\n                <button class=\"btn btn-danger btn-lg \" (click)=\"reject()\" *ngIf=\"this.status!='rejected'\">Reject</button>\r\n              </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/foodrecipes/recieview/recieview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecieviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_guard__ = __webpack_require__("./src/app/service/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecieviewComponent = /** @class */ (function () {
    function RecieviewComponent(activatedRoute, authservice, ngFlashMessageService, router, authguard) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.authguard = authguard;
        this.admin = false;
        this.myrecipe = {
            recipename: this.activatedRoute.snapshot.paramMap.get('recipename')
        };
        // console.log(this.myrecipe);
        this.authservice.getviewRecipe(this.myrecipe).subscribe(function (res) {
            if (res.state) {
                _this.recipe = res.recipe;
                _this.likes = _this.recipe.likes;
                _this.myrecipe = {
                    "author": _this.recipe.username,
                    "recipename": _this.recipe.recipename,
                    "ingredients": _this.recipe.ingredients,
                    "directions": _this.recipe.directions,
                    "preptime": _this.recipe.preptime,
                    "cooktime": _this.recipe.cooktime,
                    "readytime": _this.recipe.readytime,
                    "serves": _this.recipe.serves,
                    "notes": _this.recipe.notes,
                    "rate": _this.recipe.rate,
                    "catagory": _this.recipe.catagory,
                    "description": _this.recipe.description,
                    "imageUrl": _this.recipe.imageUrl,
                    "likes": _this.likes,
                };
                _this.status = res.recipe.status;
                //console.log(myrecipe);
                /// console.log(this.recipe.recipename);
                //this.recipe=res.recipe;
                //console.log(this.myrecipe.directions);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
        this.authservice.checklike(this.myrecipe.recipename).subscribe(function (res) {
            if (res.state) {
                //console.log("liked");
                _this.Islike = true;
            }
            else {
                // this.ngFlashMessageService.showFlashMessage({messages: ["NOT LIKED"],dismissible: true,timeout: 4000,type: 'danger'});
                _this.Islike = false;
            }
        });
        this.isadmin();
    }
    RecieviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authservice.loggedIn()) {
            this.authservice.getprofile().subscribe(function (res) {
                if (res.state) {
                    if (res.loggeduser.username == _this.myrecipe.author) {
                        // console.log("real user" );
                        _this.isrealuser = true;
                    }
                    else {
                        _this.isrealuser = false;
                    }
                }
                else {
                    _this.isrealuser = false;
                }
            });
        }
    };
    RecieviewComponent.prototype.like = function () {
        var _this = this;
        if (this.authguard.canActivate()) {
            this.authservice.likeRecipe(this.myrecipe.recipename).subscribe(function (res) {
                if (res.state) {
                    _this.Islike = true;
                    _this.likes = res.likecount;
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: ['SOMETHING WENT WRONG!'], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    RecieviewComponent.prototype.unlike = function () {
        var _this = this;
        if (this.authguard.canActivate()) {
            this.authservice.unlikeRecipe(this.myrecipe.recipename).subscribe(function (res) {
                if (res.state) {
                    _this.Islike = false;
                    _this.likes = res.likecount;
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: ['SOMETHING WENT WRONG!'], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    RecieviewComponent.prototype.deleterecipe = function () {
        var _this = this;
        if (window.confirm("Do you really want to delete this recipe?")) {
            this.authservice.deleterecipe(this.myrecipe.recipename).subscribe(function (res) {
                if (res.state) {
                    //console.log("liked");
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                    _this.router.navigate(['/..']);
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    RecieviewComponent.prototype.isadmin = function () {
        var _this = this;
        if (this.authservice.loggedIn()) {
            //return true;
            this.authservice.Isadmin().subscribe(function (res) {
                if (res.state) {
                    _this.admin = true;
                }
                else {
                    _this.admin = false;
                }
            });
        }
    };
    RecieviewComponent.prototype.accept = function () {
        var _this = this;
        var comment = prompt("Admin comment:", "Nice recipe!");
        var statusdata = {
            recipename: this.myrecipe.recipename,
            status: "accepted",
            comment: comment
        };
        this.authservice.acceptRecipe(statusdata).subscribe(function (res) {
            if (res.state) {
                _this.status = "accepted";
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ['SOMETHING WENT WRONG!'], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RecieviewComponent.prototype.pending = function () {
        var _this = this;
        var comment = prompt("Admin comment:", "pending for administrator review!");
        var statusdata = {
            recipename: this.myrecipe.recipename,
            status: "pending",
            comment: comment
        };
        this.authservice.acceptRecipe(statusdata).subscribe(function (res) {
            if (res.state) {
                _this.status = "pending";
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ['SOMETHING WENT WRONG!'], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RecieviewComponent.prototype.reject = function () {
        var _this = this;
        var comment = prompt("Admin comment:", "Unfitted Content!");
        var statusdata = {
            recipename: this.myrecipe.recipename,
            status: "rejected",
            comment: comment
        };
        this.authservice.acceptRecipe(statusdata).subscribe(function (res) {
            if (res.state) {
                _this.status = "rejected";
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ['SOMETHING WENT WRONG!'], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RecieviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recieview',
            template: __webpack_require__("./src/app/components/foodrecipes/recieview/recieview.component.html"),
            styles: [__webpack_require__("./src/app/components/foodrecipes/recieview/recieview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_auth_guard__["a" /* AuthGuard */]])
    ], RecieviewComponent);
    return RecieviewComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color:rgba(0, 0, 0, 0.7);list-style-type: none;overflow: hidden;padding:10px;\r\n}\r\nnav a:hover{\r\n    color:rgb(79,191,219);\r\n    padding: 9px 9px;\r\n}\r\nnav div ul li a:hover{\r\n    color:rgb(79,191,219);\r\n    border: 1.5px solid rgb(255, 255, 255);\r\n    -webkit-transition:all 0.25s ease-in;\r\n    transition:all 0.25s ease-in;\r\n    padding: 9px 9px;\r\n    border-radius: 10px;\r\n}\r\ndiv ul li a{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    font-size: 5mm;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none; /*remove undeline of link*/\r\n}\r\nnav a{\r\n    margin-left: 20px;\r\n    font-size: 5mm;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none; /*remove undeline of link*/\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Home</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n     \r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/search']\">Search<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n\r\n        <li class=\"nav-item active\" *ngIf='authservice.loggedIn()'>\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n        <li class=\"nav-item active\" *ngIf='!authservice.loggedIn()'>\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">LogIn <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item active\" *ngIf='!authservice.loggedIn()'>\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n\r\n        <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\" *ngIf='authservice.loggedIn()'>LogOut <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authservice, ngFlashMessageService) {
        this.router = router;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authservice.logOut().subscribe(function (res) {
            //console.log(res)
        });
        this.ngFlashMessageService.showFlashMessage({ messages: ["You are successfully logged out!"], dismissible: true, timeout: 4000, type: 'success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/root/root.component.css":
/***/ (function(module, exports) {

module.exports = "#foodrecipes{\r\n    max-width: 50%;\r\n    position: relative;\r\n    left: 50%;\r\n    top: 300px;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    \r\n\r\n}\r\n#particles-js{\r\n    /*background: gray;\r\n    height: 400px;*/\r\n   \r\n  position: relative;\r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0.4))),url('rootcover.b7ba187f5732c6ab0812.jpg');\r\n    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)),url('rootcover.b7ba187f5732c6ab0812.jpg');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover; \r\n    opacity: 0.8;\r\n}\r\nbutton{\r\n  background-color: #514b37;\r\n  border-width: 3px;\r\n}\r\nbutton:hover{\r\n  color: black;\r\n  background-color: #c4bfae;\r\n  border-width: 3px;\r\n}"

/***/ }),

/***/ "./src/app/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"particles-js\" onload=\"window.location.reload()\">\r\n<div id=\"foodrecipes\">\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/foodrecipe']\"><h2>FOOD RECIPES</h2><h5>(click here)</h5></button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/root/root.component.html"),
            styles: [__webpack_require__("./src/app/components/root/root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".searchform{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin-left: 25%;\r\n}\r\n.outerbox{\r\n    text-align: center;\r\n    margin-top: 4%;\r\n}\r\n#menuitem{\r\n    float: center;\r\n    width: 100%;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.container{\r\n    background-color:floralwhite;\r\n   \r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: #545952;\r\n    text-align: center;\r\n    font-size: 3mm;\r\n}\r\n.norecipe{\r\n    text-align: center;\r\n}\r\nimg {\r\n    float: center;\r\n}\r\n.add{\r\n    width: 100%;\r\n   \r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n.searchtab{\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outerbox\">\r\n  <div class=\"searchform\">\r\n      <form class=\"form\" #form=ngForm (submit)=\"searchrecipe()\">\r\n        <div class=\"form-group searchtab\">\r\n            <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Recipe name\" name=\"search\" [(ngModel)]=\"search\" required ><br>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Search</button>\r\n          </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"this.searchstatus==true\">\r\n<div id=\"menuitem\" *ngIf=\"this.recipecount==true\">\r\n    <ul *ngFor=\"let recipies of recipe;let i = index\" [attr.data-index]=\"i\">\r\n       <li >\r\n          <button [routerLink]=\"['/allrecipe',recipies.recipename]\" class=\" add\">\r\n            <div id=\"container\"style=\"height:5%\">\r\n                <div class=\"row\" style=\"height:5%\">\r\n                  <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                  <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                  </div>\r\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                  <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                  <h2 style=\"font-size:110%;\">{{ recipies.description  }}</h2>\r\n                  </div>\r\n                </div>\r\n             </div>\r\n           </button>\r\n      </ul>\r\n    </div>\r\n\r\n    <div id=\"menuitem\" *ngIf=\"this.recipecount==false\">\r\n            <div class=\"norecipe\">\r\n              <h3>NO RECIPE FOUND!</h3>\r\n            </div>\r\n      </div>\r\n  </div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.searchstatus = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchrecipe = function () {
        var _this = this;
        this.searchstatus = true;
        var recipename = {
            recipename: this.search
        };
        this.authservice.searchrecipe(recipename).subscribe(function (res) {
            if (res.state) {
                _this.recipecount = res.recipecount;
                if (res.recipecount) {
                    _this.recipe = res.recipe;
                    _this.imgurl = res.pic_url;
                }
                else {
                    document.getElementById("norecipe").innerHTML = "Hello World";
                }
                //console.log(res);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Server Error!"], dismissible: false, timeout: 4000, type: 'danger' });
                console.log(res);
            }
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#fogot{\r\n    color: aliceblue;\r\n}\r\n\r\n.login{\r\n  color: aliceblue;\r\n  margin-top: 10%;\r\n  text-align: center;\r\n  padding: 5% 5% 5% 5%;\r\n  background-color: #4c5941;\r\n  border-radius: 10px;\r\n  border-color: #a0a39e;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"login\">\r\n<form class=\"form\" #form=ngForm (submit)=\"loginUser()\">\r\n    <fieldset>\r\n      <legend><h2>LogIn</h2></legend>\r\n        <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n            <label for=\"exampleInputPassword1\">Username</label>\r\n            <input type=\"text\" class=\"form-control \" id=\"userename\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\" required>\r\n          </div>\r\n\r\n        <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"userpassword\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" required>\r\n          </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">LogIn</button>\r\n    </fieldset>\r\n  </form><br>\r\n  <div id=\"fogot\"><a (click)=\"fogotpassword()\">fogot password? click here</a></div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, ngFlashMessageService, router, _location) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this._location = _location;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authservice.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authservice.storeData(res.token, res.user);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are loggedin!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/..']);
                //this._location.back();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    ;
    LoginComponent.prototype.fogotpassword = function () {
        var _this = this;
        var myname = {
            myname: prompt("Enter User name:", "Username")
        };
        if (myname.myname != null) {
            this.authservice.fogotpassword(myname).subscribe(function (res) {
                if (res.state) {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                    //this.router.navigate(['../']);
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n  color: aliceblue;\r\n  background-color: #74707a;\r\n  border-style: double;\r\n  border-width: 5px;\r\n  border-color: #545952;\r\n  margin-top: 3%;\r\n  text-align: center;\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n}\r\n.profpic{\r\n  border-radius: 50%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\ntable{\r\n  text-align: left;\r\n}\r\n.add{\r\n    width: 100%;\r\n   \r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n#menupic{\r\n  width: 20%;\r\n  height: 100px;\r\n  float: left;\r\n}\r\ninput[type='file'] {\r\n  color: transparent;\r\n  direction: rtl;\r\n  visibility:hidden; \r\n}\r\n#files{\r\n  margin-left: 50%\r\n}\r\n#pending{\r\n  background-color: yellow;\r\n}\r\n#accepted{\r\n  background-color: green;\r\n}\r\n#rejected{\r\n  background-color: red;\r\n}\r\n#adminpanel{\r\n  margin-left: 0%\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"user\" class=\"container\">\r\n  \r\n  <div><h1>{{user.fullname}}</h1></div>\r\n  <div ><img src=\"{{user.prof_pic_link}}\" alt=\"{{user.prof_pic_alt}}\" class=\"profpic\"></div>\r\n  \r\n  <button id=\"files\" onclick=\"document.getElementById('file').click();return false;\" class=\"btn btn-default btn-lg\">Change picture</button>\r\n  \r\n  <input type=\"file\" (change)=\"profpic($event.target.files)\"  value=\"choose picc\" id=\"file\" accept=\"image/*\">\r\n  <hr>\r\n  <div *ngIf=\"admin==true\">\r\n    <button id=\"adminpanel\" [routerLink]=\"['/adminpanel']\" class=\"btn btn-success btn-lg\">Admin panel</button><hr>\r\n  </div>\r\n  <div *ngIf=\"editData==false\">\r\n  <table >\r\n    <tr>\r\n    <td><h3>First name: {{user.fullname}} </h3></td>\r\n    </tr>\r\n    <tr>\r\n    <td><h3>Last name: {{user.lastname}} </h3></td>\r\n  </tr>\r\n  <tr>\r\n    <td><h3>Email: {{user.email}}</h3></td>\r\n  </tr><tr>\r\n    <td><h3>Phone Number: {{user.phoneno}}</h3></td>\r\n  </tr>\r\n  <tr>\r\n    <td><h3>User name: {{user.username}} </h3></td>\r\n  </tr>\r\n  </table> \r\n  <button (click)=\"editform()\" class=\"btn btn-info btn-lg\">Edit details</button>\r\n  <div><br>\r\n  <button *ngIf=\"changepassword==false\" (click)=\"changepass()\" class=\"btn btn-lg\">Change password</button><br>\r\n    <div *ngIf=\"changepassword==true\">\r\n       <form #form=ngForm (submit)=\"Validate()\">\r\n                <legend><h3>Change Your Password</h3></legend>\r\n                <input type=\"password\" placeholder=\"current Password\" id=\"password\" name=\"oldpassword\" [(ngModel)]=\"oldpassword\" required> <br><br>\r\n                <input type=\"password\" placeholder=\"New Password\" id=\"newpassword\" name=\"newpassword\" [(ngModel)]=\"newpassword\" required> <br><br>\r\n                <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirm_password\" name=\"compassword\" [(ngModel)]=\"compassword\" required> <br><br>\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Save</button>\r\n                <button (click)=\"chngepasscancel()\" type=\"reset\" class=\"btn btn-lg\">Cancel</button>\r\n         </form>\r\n         \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"editData==true\">\r\n  <table >\r\n    <tr>\r\n    <td><h3>Full name: <input type=\"text\" name=\"fullname\" placeholder=\"{{user.fullname}}\" [(ngModel)]=\"fullname\" > </h3></td></tr><tr>\r\n    <td><h3>Last name: <input type=\"text\" name=\"lastname\" placeholder=\"{{user.lastname}}\" [(ngModel)]=\"lastname\" > </h3></td>\r\n  </tr>\r\n  <tr>\r\n    <td><h3>Email:  <input type=\"email\" name=\"email\" placeholder=\"{{user.email}}\" [(ngModel)]=\"email\" > </h3></td></tr><tr>\r\n    <td><h3>Phone Number: <input type=\"number\" name=\"phoneno\" placeholder=\"{{user.phoneno}}\" [(ngModel)]=\"phoneno\" > </h3></td>\r\n  </tr>\r\n  <tr>\r\n    <td><h3>User name: {{user.username}} </h3></td>\r\n  </tr>\r\n \r\n  </table>\r\n  <button (click)=\"saveform()\" class=\"btn btn-success btn-lg\">Save</button>\r\n  <button (click)=\"cancel()\" class=\"btn btn-default btn-lg\">Cancel</button> \r\n</div>\r\n  <hr>\r\n  \r\n  <button class=\"btn btn-danger btn-lg\" (click)=\"deleteacc()\">DELETE ACCOUNT</button>\r\n  <hr>\r\n  <h4>My Recipes</h4>\r\n  <ul *ngFor=\"let recipies of recipe;let i = index\" [attr.data-index]=\"i\" >\r\n      <li *ngIf=\"recipies.status=='pending'\" >\r\n       <button [routerLink]=\"['/profile',recipies.recipename]\" class=\"add\" id=\"pending\">\r\n        <div id=\"container\"style=\"height:5%\">\r\n            <div class=\"row\" style=\"height:5%\">\r\n              <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n              <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n              </div>\r\n              <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n              <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n              <h2 style=\"font-size:160%;\">likes:{{ recipies.likes  }}</h2>\r\n              <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n              <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n              </div>\r\n            </div>\r\n         </div>\r\n       </button>\r\n     </li>\r\n     <li *ngIf=\"recipies.status=='accepted'\">\r\n        <button [routerLink]=\"['/allrecipe',recipies.recipename]\" class=\" add\" id=\"accepted\">\r\n          <div id=\"container\"style=\"height:5%\">\r\n              <div class=\"row\" style=\"height:5%\">\r\n                <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n                <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n                </div>\r\n                <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n                <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n                <h2 style=\"font-size:160%;\">likes:{{ recipies.likes  }}</h2>\r\n                <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n                <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n                </div>\r\n              </div>\r\n           </div>\r\n         </button>\r\n    </li>\r\n    <li *ngIf=\"recipies.status=='rejected'\">\r\n      <button [routerLink]=\"['/profile',recipies.recipename]\" class=\"add\" id=\"rejected\">\r\n        <div id=\"container\"style=\"height:5%\">\r\n            <div class=\"row\" style=\"height:5%\">\r\n              <div class=\"col-dm-8 col-md-push-3\"  style=\"width:40%; padding-left:2% \">\r\n              <img src=\"{{ recipies.imageUrl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:100%;\">\r\n              </div>\r\n              <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\r\n              <h1  style=\"font-size:210%;\"> {{ recipies.recipename }}</h1><br>\r\n              <h2 style=\"font-size:160%;\">likes:{{ recipies.likes  }}</h2>\r\n              <h2 style=\"font-size:160%;\">Status: {{recipies.status}}</h2>\r\n              <h2 style=\"font-size:160%;\">Administrator review: {{recipies.admincomment}}</h2>\r\n              </div>\r\n            </div>\r\n         </div>\r\n      </button>\r\n    </li>\r\n     </ul>\r\n   \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.admin = false;
        this.editData = false;
        this.changepassword = false;
        this.authservice.getprofile().subscribe(function (res) {
            if (res.state) {
                _this.user = res.loggeduser;
                _this.myname = _this.user.username;
                //console.log(this.user);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ['Server Error!'], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
        var myusername = {
            "username": this.myname
        };
        this.authservice.getuserrecipes(myusername).subscribe(function (res) {
            if (res.state) {
                //console.log(res.recipe);
                _this.recipe = res.recipe;
                _this.imgurl = res.pic_url;
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ['Server Error!'], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
        this.isadmin();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.editform = function () {
        this.editData = true;
    };
    ProfileComponent.prototype.cancel = function () {
        this.editData = false;
    };
    ProfileComponent.prototype.saveform = function () {
        var _this = this;
        var newdata = {
            fullname: this.fullname || this.user.fullname,
            lastname: this.lastname || this.user.lastname,
            email: this.email || this.user.email,
            phoneno: this.phoneno || this.user.phoneno
        };
        this.authservice.editUser(newdata).subscribe(function (res) {
            if (res.state) {
                _this.editData = false;
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/..']);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                ;
            }
        });
    };
    ProfileComponent.prototype.profpic = function (file) {
        var _this = this;
        var image = {
            editimage: file.item(0)
        };
        this.authservice.editimage(image).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                //console.log("ela");
                _this.router.navigate(['/..']);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
            }
        });
    };
    ProfileComponent.prototype.changepass = function () {
        this.changepassword = true;
    };
    ProfileComponent.prototype.chngepasscancel = function () {
        this.changepassword = false;
    };
    ProfileComponent.prototype.Validate = function () {
        var _this = this;
        var password = this.newpassword;
        var confirmPassword = this.compassword;
        var oldpassword = this.oldpassword;
        //console.log(password+"ds"+confirmPassword);
        if (password != confirmPassword) {
            window.alert("You new Passwords is not similar with confirm password. Please enter same password in both");
            // console.log("ddd")
        }
        else {
            var password_1 = {
                oldpassword: this.oldpassword,
                newpassword: this.newpassword
            };
            this.authservice.changepassword(password_1).subscribe(function (res) {
                if (res.state) {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                    _this.changepassword = false;
                }
                else {
                    //console.log(res.msg);
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    ProfileComponent.prototype.isadmin = function () {
        var _this = this;
        if (this.authservice.loggedIn()) {
            //return true;
            this.authservice.Isadmin().subscribe(function (res) {
                if (res.state) {
                    _this.admin = true;
                }
                else {
                    _this.admin = false;
                }
            });
        }
    };
    ProfileComponent.prototype.deleteacc = function () {
        var _this = this;
        var password = prompt("Enter Password:");
        if (password != null) {
            this.authservice.deleteacc(password).subscribe(function (res) {
                if (res.state) {
                    _this.authservice.logOut().subscribe(function (res) {
                        if (res.state) {
                            _this.ngFlashMessageService.showFlashMessage({ messages: ["Account Deactivated!"], dismissible: true, timeout: 4000, type: 'success' });
                            _this.router.navigate(['/']);
                        }
                        else {
                            _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                        }
                    });
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register{\r\n\r\n        color: aliceblue;\r\n        margin-top: 2%;\r\n        \r\n        text-align: center;\r\n        padding: 3% 5% 3% 5%;\r\n        background-color: #4c5941;\r\n        border-radius: 10px;\r\n        border-color: #a0a39e;\r\n        border-style: solid;\r\n        border-width: 5px;\r\n      \r\n}"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container register\">\r\n<form class=\"form\" #form=ngForm (submit)=\"registerData()\">\r\n    <fieldset>\r\n      <legend><h2>Register</h2></legend>\r\n        <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n            <label for=\"exampleInputPassword1\">First Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputfullname\" placeholder=\"Your firstname\" name=\"fullname\" [(ngModel)]=\"fullname\" required>\r\n          </div>\r\n\r\n          <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n              <label for=\"exampleInputPassword1\">Last name:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your lastname\" name=\"lastname\" [(ngModel)]=\"lastname\" required >\r\n            </div>\r\n\r\n          <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n              <label for=\"exampleInputPassword1\">Email:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\" required>\r\n            </div>\r\n\r\n          <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\r\n              <label for=\"exampleInputPassword1\">Phone Numer:</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your phone number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required>\r\n            </div>\r\n\r\n\r\n        <div >\r\n            <img [src]=\"imageUrl\" style=\"width: 250px; height: 200px;\">\r\n            <input type=\"file\" #image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" required>\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Register</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary btn-lg\">Reset</button>\r\n    </fieldset>\r\n  </form>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.imageUrl = "../../../assets/images/defualt.jpg";
        this.fileToUpload = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            fullname: this.fullname,
            lastname: this.lastname,
            email: this.email,
            phoneno: this.phoneno,
            fileToUpload: this.fileToUpload
        };
        this.authservice.registerUser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/login']);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //preview image
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, ngFlashMessageService) {
        this.auth = auth;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.ngFlashMessageService.showFlashMessage({ messages: ["You Should login first!"], dismissible: true, timeout: 4000, type: 'danger' });
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var formData = new FormData();
        formData.append('profpic', user.fileToUpload, user.fileToUpload.name);
        formData.append('fullname', user.fullname);
        formData.append('lastname', user.lastname);
        formData.append('email', user.email);
        formData.append('phoneno', user.phoneno);
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/register", formData).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/login", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.authtoken = token;
        this.user = userdata;
    };
    ;
    AuthService.prototype.getprofile = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.get("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/profile", { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.fetchtoken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    ;
    AuthService.prototype.logOut = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/logout", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('tokenid');
    };
    AuthService.prototype.testing = function (user) {
        var formData = new FormData();
        formData.append('profpic', user.fileToUpload, user.fileToUpload.name);
        formData.append('fullname', user.fullname);
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/c", formData).map(function (res) { return res.json(); });
    };
    AuthService.prototype.addrecipe = function (newrecipe) {
        //this.fetchtoken();
        var token = localStorage.getItem("tokenid");
        //let headers = new Headers();
        var formData = new FormData();
        formData.append('Authorization', token);
        //formData.append('content-Type','application/json');
        formData.append('foodimg', newrecipe.fileToUpload, newrecipe.fileToUpload.name);
        formData.append('recipename', newrecipe.recipename);
        formData.append('ingredients', newrecipe.ingredients);
        formData.append('directions', newrecipe.directions);
        formData.append('preptime', newrecipe.preptime);
        formData.append('cooktime', newrecipe.cooktime);
        formData.append('readytime', newrecipe.readytime);
        formData.append('serves', newrecipe.serves);
        formData.append('notes', newrecipe.notes);
        formData.append('rate', newrecipe.rate);
        formData.append('catagory', newrecipe.catagory);
        formData.append('description', newrecipe.description);
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/addrecipe", formData).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.getAllacceptedRecipe = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/getallacceptedrecipe", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllRecipe = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/getallrecipe", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMostliked = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/getmostliked", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getviewRecipe = function (recipename) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/getviewrecipe", recipename, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.likeRecipe = function (recipename) {
        var recipeData = {
            "recipename": recipename
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/likerecipe", recipeData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.unlikeRecipe = function (recipename) {
        var recipeData = {
            "recipename": recipename
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/unlikerecipe", recipeData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checklike = function (recipename) {
        var recipeData = {
            "recipename": recipename
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/checklike", recipeData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getuserrecipes = function (myusername) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/getuserrecipies", myusername, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.editUser = function (editData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/updateprofile", editData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.editimage = function (image) {
        var token = localStorage.getItem("tokenid");
        var formData = new FormData();
        formData.append('Authorization', token);
        formData.append('editprofpic', image.editimage, image.editimage.name);
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/profpicchange", formData).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.deleterecipe = function (recipename) {
        var recipeData = {
            "recipename": recipename
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/deleterecipe", recipeData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.changepassword = function (password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/changepassword", password, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.Isadmin = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/isadmin", { sdsd: "sdd" }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.acceptRecipe = function (recipeData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchtoken();
        //console.log(this.authtoken);
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/acceptrecipe", recipeData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.searchrecipe = function (recipename) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/foodrecipe/searchrecipe", recipename, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteacc = function (pass) {
        var password = {
            password: pass
        };
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/deleteuser", password, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.fogotpassword = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://ec2-13-59-30-146.us-east-2.compute.amazonaws.com/user/fogotpassword", username, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map