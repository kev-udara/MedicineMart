(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./cart/cart.module": [
		"./src/app/cart/cart.module.ts",
		"cart-cart-module"
	],
	"./products/products.module": [
		"./src/app/products/products.module.ts",
		"products-products-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        pathMatch: 'full',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule',
        canActivate: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _blocks_root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/root/app.component */ "./src/app/blocks/root/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/blocks.module */ "./src/app/blocks/blocks.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm5/ngmodule-material-carousel.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__["BlocksModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"].forRoot()
            ],
            bootstrap: [_blocks_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blocks/blocks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/blocks/blocks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BlocksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksRoutingModule", function() { return BlocksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var BlocksRoutingModule = /** @class */ (function () {
    function BlocksRoutingModule() {
    }
    BlocksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BlocksRoutingModule);
    return BlocksRoutingModule;
}());



/***/ }),

/***/ "./src/app/blocks/blocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.module.ts ***!
  \*****************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blocks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks-routing.module */ "./src/app/blocks/blocks-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/blocks/header/header.component.ts");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/app.component */ "./src/app/blocks/root/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







var BlocksModule = /** @class */ (function () {
    function BlocksModule() {
    }
    BlocksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _blocks_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlocksRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], BlocksModule);
    return BlocksModule;
}());



/***/ }),

/***/ "./src/app/blocks/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blocks/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 135vh\">\n<mat-toolbar class=\"example-toolbar\">\n  <mat-toolbar-row>\n    <button mat-icon-button \n    (click) = \"sidenav.toggle()\"\n    fxShow=\"true\"\n    fxHide.gt-sm\n    >\n  <mat-icon>menu</mat-icon>\n  </button>\n      <a class=\"logo\" [routerLink]=\"['/']\"></a>\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n      <a mat-button routerLink=\"/products\"\n      routerLinkActive=\"active-link\">Products</a>\n    </div>\n    <span class=\"header-spacer\"></span>\n      <a *ngIf=\"!user\" mat-button routerLink=\"/auth\"\n      routerLinkActive=\"active-link\" style=\"right: 2%;\">\n      <mat-icon>\n        person_outliner\n      </mat-icon>\n      Login</a>\n      <div style=\"right: 2%;\">\n        <a mat-button *ngIf=\"user\" [matMenuTriggerFor]=\"menu\" >\n         <mat-icon>account_box</mat-icon>\n\n         <span fxShow=\"true\" fxHide.lt-md=\"true\">{{user.firstname}}</span>\n         \n        </a>\n        <mat-menu #menu=\"matMenu\">\n         <button (click)=\"logout()\" mat-menu-item class=\"logout-button\">Log Out</button>\n        </mat-menu>\n      </div>\n      <pm-cart-items-count></pm-cart-items-count>\n    </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container fxFlexFill>\n  <mat-sidenav #sidenav style=\"background-color: rgb(61, 166, 156);\">\n    <mat-nav-list >\n      <a \n      mat-list-item \n      routerLink=\"/products\" \n      (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\"\n      style=\"background-color: rgb(41, 113, 107); margin-left: 0.1px; \"\n      >\n        Products\n      </a>\n    </mat-nav-list>\n\n  </mat-sidenav>\n  <mat-sidenav-content style=\"background-color: white;\">\n    <router-outlet> \n    </router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/blocks/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/blocks/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@600&display=swap\");\n.example-toolbar {\n  background-color: rgb(44, 123, 116);\n  font-family: \"Cormorant SC\", serif;\n  font-size: 25px;\n}\na {\n  margin: 2px;\n}\n.active-link {\n  background-color: rgb(61, 166, 156);\n}\n.logo {\n  background-image: url('logo.png');\n  height: 220px;\n  width: 220px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-right: 0.2em;\n  margin: 0px;\n  padding: 0px;\n}\n.header-spacer {\n  flex: 1 1 auto;\n}\n.mat-icon {\n  vertical-align: middle;\n  margin: 0 5px;\n}\n.logout-button {\n  background-color: rgb(61, 166, 156);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnNhbWFyYXNpbmdoZS9Eb2N1bWVudHMvTXktUHJvamVjdHMvTUVBTi1hcHAvbWVkaWNpbmUtbWFydC9zcmMvYXBwL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRkFBQTtBQUVSO0VBQ0ksbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNBSjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUE7RUFDSSxtQ0FBQTtBQ0RKO0FESUE7RUFFSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtBO0VBQ0ksY0FBQTtBQ0ZKO0FES0E7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUNGSjtBRE1BO0VBQ0ksbUNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K1NDOndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uZXhhbXBsZS10b29sYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgMTIzLCAxMTYpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IFNDJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIFxufVxuXG5he1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY2LCAxNTYpO1xufVxuXG4ubG9nb3tcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nJyk7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXItc3BhY2Vye1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LWljb257XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgNXB4O1xuXG59XG5cbi5sb2dvdXQtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY2LCAxNTYpO1xufVxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K1NDOndnaHRANjAwJmRpc3BsYXk9c3dhcFwiKTtcbi5leGFtcGxlLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDEyMywgMTE2KTtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IFNDXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmEge1xuICBtYXJnaW46IDJweDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxNjYsIDE1Nik7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nXCIpO1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMjIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmhlYWRlci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDE2NiwgMTU2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blocks/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blocks/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        this.logoutEvent.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "logoutEvent", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/blocks/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/blocks/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/blocks/root/app.component.html":
/*!************************************************!*\
  !*** ./src/app/blocks/root/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\n    <pm-header [user]=\"user$ | async\" (logoutEvent)=\"logout()\">\n    </pm-header>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blocks/root/app.component.scss":
/*!************************************************!*\
  !*** ./src/app/blocks/root/app.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9yb290L2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blocks/root/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/blocks/root/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.authService.findMe(), this.authService.user);
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/blocks/root/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/blocks/root/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        this.authService.redirectUrl = state.url;
        if (this.authService.isUserLoggedIn) {
            return true;
        }
        this.router.navigate(["auth"]);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/log.service */ "./src/app/core/log.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/core/auth/token-storage.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(httpClient, tokenStorage, logService) {
        this.httpClient = httpClient;
        this.tokenStorage = tokenStorage;
        this.logService = logService;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.apiUrl = "/api/auth/";
        this.redirectUrlAfterLogin = "";
    }
    Object.defineProperty(AuthService.prototype, "isUserLoggedIn", {
        get: function () {
            return this.user$.value !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "loggedInUser", {
        get: function () {
            return this.user$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "redirectUrl", {
        set: function (url) {
            this.redirectUrlAfterLogin = url;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var loginCredentials = { email: email, password: password };
        this.logService.log("login credentials", loginCredentials);
        return this.httpClient
            .post(this.apiUrl + "login", loginCredentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var user = _a.user, token = _a.token;
            _this.setUser(user);
            _this.tokenStorage.setToken(token);
            _this.logService.log("user found", user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this.redirectUrlAfterLogin);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.logService.log("Server Error Occurred: " + e.error.message + " ", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Your login details could not be verified. Please try again");
        }));
    };
    AuthService.prototype.logout = function () {
        this.tokenStorage.removeToken();
        this.setUser(null);
        this.logService.log("user did logout successfull");
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.user$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (userToSave) {
        var _this = this;
        return this.httpClient.post(this.apiUrl + "register", userToSave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var user = _a.user, token = _a.token;
            return _this.setUserAfterUserFoundFromServer(user, token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.logService.log("server error occured", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Registration failed please contact to admin");
        }));
    };
    AuthService.prototype.findMe = function () {
        var _this = this;
        var token = this.tokenStorage.getToken();
        if (!token) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }
        return this.httpClient.get(this.apiUrl + "findme").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var user = _a.user, token = _a.token;
            return _this.setUserAfterUserFoundFromServer(user, token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.logService.log("Your login details could not be verified. Please try again", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Your login details could not be verified. Please try again");
        }));
    };
    AuthService.prototype.setUserAfterUserFoundFromServer = function (user, token) {
        this.setUser(user);
        this.tokenStorage.setToken(token);
        this.logService.log("User found in server", user);
        return this.user$;
    };
    AuthService.prototype.setUser = function (user) {
        if (user) {
            var newUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { id: user._id });
            this.user$.next(newUser);
            this.logService.log("Logged In User", newUser);
        }
        else {
            this.user$.next(null);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
            _core_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.TOKEN_KEY = "MedicineMart.AuthToken";
    }
    TokenStorageService.prototype.setToken = function (token) {
        if (!token) {
            return;
        }
        this.removeToken();
        window.localStorage.setItem(this.TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return window.localStorage.getItem(this.TOKEN_KEY);
    };
    TokenStorageService.prototype.removeToken = function () {
        window.localStorage.removeItem(this.TOKEN_KEY);
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/core/cart/cart-selector.ts":
/*!********************************************!*\
  !*** ./src/app/core/cart/cart-selector.ts ***!
  \********************************************/
/*! exports provided: getCartItems, getCartItemsCount, getIsItemAlreadyInCart, getCartSubTotal, getShippingCost, getEstimatedTax, getOrderTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartItems", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartItemsCount", function() { return getCartItemsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsItemAlreadyInCart", function() { return getIsItemAlreadyInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartSubTotal", function() { return getCartSubTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShippingCost", function() { return getShippingCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEstimatedTax", function() { return getEstimatedTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderTotal", function() { return getOrderTotal; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getCartItems = function (state) { return state.cartItems; };
var getCartItemsCount = function (state) {
    var cartItems = state.cartItems;
    var totalCartCount = cartItems.reduce(function (totalCount, currentItem) { return totalCount + currentItem.quantity; }, 0);
    return totalCartCount;
};
var getIsItemAlreadyInCart = function (productId) {
    return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCartItems, function (items) { return items.filter(function (item) { return item.id === productId; }).length > 0; });
};
var getCartSubTotal = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCartItems, function (items) {
    return items.reduce(function (subTotal, currentItem) { return subTotal + currentItem.itemTotal; }, 0);
});
var SHIPPING = 0.01;
var getShippingCost = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCartSubTotal, function (subTotal) { return subTotal * SHIPPING; });
var TAX = 0.02;
var getEstimatedTax = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCartSubTotal, function (subTotal) { return subTotal * TAX; });
var getOrderTotal = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCartSubTotal, getShippingCost, getEstimatedTax, function (cartSubTotal, shippingCost, estimatedTax) {
    return Math.round((cartSubTotal + shippingCost + estimatedTax) * 100) / 100;
});


/***/ }),

/***/ "./src/app/core/cart/cart-state.ts":
/*!*****************************************!*\
  !*** ./src/app/core/cart/cart-state.ts ***!
  \*****************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = { cartItems: [] };


/***/ }),

/***/ "./src/app/core/cart/cart-store.ts":
/*!*****************************************!*\
  !*** ./src/app/core/cart/cart-store.ts ***!
  \*****************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/store */ "./src/app/core/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-state */ "./src/app/core/cart/cart-state.ts");
/* harmony import */ var _core_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/log.service */ "./src/app/core/log.service.ts");





var CartStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartStore, _super);
    function CartStore(logService) {
        var _this = _super.call(this, _cart_state__WEBPACK_IMPORTED_MODULE_3__["initialState"]) || this;
        _this.logService = logService;
        _this.addCartItem = function (cartItemToAdd) {
            _this.logService.log("[Cart] Add Item", cartItemToAdd);
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: [].concat(_this.state.cartItems, cartItemToAdd) }));
        };
        _this.updateCartItem = function (cartItemToUpdate) {
            _this.logService.log("[Cart] Update Item", cartItemToUpdate);
            var newCartItems = _this.state.cartItems.map(function (i) {
                return i.id === cartItemToUpdate.id ? cartItemToUpdate : i;
            });
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: newCartItems }));
        };
        _this.removeCartItem = function (cartItemToRemove) {
            _this.logService.log("[Cart] Remove Item", cartItemToRemove);
            var newCartItems = _this.state.cartItems.filter(function (i) { return i.id !== cartItemToRemove.id; });
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: newCartItems }));
        };
        _this.clearCart = function () {
            _this.logService.log("[Cart] Clear Item");
            _this.setState(_cart_state__WEBPACK_IMPORTED_MODULE_3__["initialState"]);
        };
        return _this;
    }
    CartStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]])
    ], CartStore);
    return CartStore;
}(_core_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));



/***/ }),

/***/ "./src/app/core/cart/cart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/cart/cart.service.ts ***!
  \*******************************************/
/*! exports provided: ALLOWED_PRODUCT_QUANTITIES, CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_PRODUCT_QUANTITIES", function() { return ALLOWED_PRODUCT_QUANTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/log.service */ "./src/app/core/log.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-store */ "./src/app/core/cart/cart-store.ts");





var ALLOWED_PRODUCT_QUANTITIES = Array.from({ length: 30 }, function (v, i) { return i + 1; });
var CartService = /** @class */ (function () {
    function CartService(logService, cartStore) {
        this.logService = logService;
        this.cartStore = cartStore;
    }
    CartService.prototype.addToCart = function (product, quantity) {
        this.logService.log("[Cart] Add Item");
        var cartItemToAdd = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product, { quantity: quantity, itemTotal: product.price * quantity });
        this.cartStore.addCartItem(cartItemToAdd);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(cartItemToAdd);
    };
    CartService.prototype.updateCartItem = function (cartItemToUpdate) {
        cartItemToUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cartItemToUpdate, { itemTotal: cartItemToUpdate.price * cartItemToUpdate.quantity });
        this.cartStore.updateCartItem(cartItemToUpdate);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(cartItemToUpdate);
    };
    CartService.prototype.removeCartItem = function (itemtoRemove) {
        this.cartStore.removeCartItem(itemtoRemove);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(itemtoRemove);
    };
    CartService.prototype.clearCart = function () {
        this.cartStore.clearCart();
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"], _cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _utils_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/module-import-guard */ "./src/app/core/utils/module-import-guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_auth_header_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/auth-header-interceptor.service */ "./src/app/core/interceptors/auth-header-interceptor.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _interceptors_http_error_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/http-error-interceptor.service */ "./src/app/core/interceptors/http-error-interceptor.service.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_utils_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_header_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AuthHeaderInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_http_error_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpErrorInterceptorService"],
                    multi: true
                }
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth-header-interceptor.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/interceptors/auth-header-interceptor.service.ts ***!
  \**********************************************************************/
/*! exports provided: AuthHeaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptorService", function() { return AuthHeaderInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/token-storage.service */ "./src/app/core/auth/token-storage.service.ts");



var AuthHeaderInterceptorService = /** @class */ (function () {
    function AuthHeaderInterceptorService(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    AuthHeaderInterceptorService.prototype.intercept = function (req, next) {
        var token = this.tokenStorage.getToken();
        var clonedRequest = req.clone({
            headers: req.headers.set("Authorization", token ? "Bearer " + token : "")
        });
        return next.handle(clonedRequest);
    };
    AuthHeaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthHeaderInterceptorService);
    return AuthHeaderInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/interceptors/http-error-interceptor.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/interceptors/http-error-interceptor.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptorService", function() { return HttpErrorInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HttpErrorInterceptorService = /** @class */ (function () {
    function HttpErrorInterceptorService(snackBar) {
        var _this = this;
        this.snackBar = snackBar;
        this.showSnackBar = function (response) {
            var text = "Error Message: " + response.message;
            if (text) {
                _this.snackBar.open(text, "Close", { duration: 7000 });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
        };
    }
    HttpErrorInterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.showSnackBar));
    };
    HttpErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HttpErrorInterceptorService);
    return HttpErrorInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/log.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/log.service.ts ***!
  \*************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log.apply(console, msg);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/core/store.ts":
/*!*******************************!*\
  !*** ./src/app/core/store.ts ***!
  \*******************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var Store = /** @class */ (function () {
    function Store(intialState) {
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](intialState);
        this.state$ = this._state$.asObservable();
    }
    Store.prototype.select = function (selectorFunction) {
        return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(selectorFunction));
    };
    Object.defineProperty(Store.prototype, "state", {
        // sync
        get: function () {
            return this._state$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.setState = function (nexState) {
        console.log('-----------------------');
        console.log('Previous State', this.state);
        this._state$.next(nexState);
        console.log('Current State', this.state);
        console.log('-----------------------');
    };
    return Store;
}());



/***/ }),

/***/ "./src/app/core/utils/module-import-guard.ts":
/*!***************************************************!*\
  !*** ./src/app/core/utils/module-import-guard.ts ***!
  \***************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core Module in the\n            AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container>\n<h1 mat-dialog-title>{{cartItem.quantity}} item/s added to cart</h1>\n<div mat-dialog-content>\n    <div class=\"pm-dialog-row\">\n        <img mat-cartd-image src=\"{{cartItem.imgUrl}}\" alt=\"{{cartItem.name}}\" class=\"product-listing-image\">\n        <span class=\"mat-caption\">\n            {{cartItem.name}} {{cartItem.itemTotal|currency}}\n        </span>\n        \n    </div>\n    <div class=\"pm-dialog-row\">\n      <button mat-raised-button [tabIndex]=\"0\" color=\"primary\" \n      (click)=\"continueShopping()\" class=\"shopping-btn\">\n      Continue Shopping\n      </button>\n      <div class=\"pm-dialog-row\">\n        <button mat-raised-button color=\"accent\" (click)=\"goToCart()\">\n            Go to Cart\n        </button>\n      </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-listing-image {\n  height: 5em;\n  width: 3.5em;\n  padding: 20px;\n  margin: 2px;\n  border-radius: 27px;\n}\n\n.mat-dialog-title {\n  padding: 0px;\n  text-align: center;\n  margin: 0px;\n}\n\n.pm-dialog-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.shopping-btn {\n  background-color: rgb(61, 166, 156);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnNhbWFyYXNpbmdoZS9Eb2N1bWVudHMvTXktUHJvamVjdHMvTUVBTi1hcHAvbWVkaWNpbmUtbWFydC9zcmMvYXBwL3NoYXJlZC9jYXJ0L2FkZC10by1jYXJ0LWRpYWxvZy9hZGQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jYXJ0L2FkZC10by1jYXJ0LWRpYWxvZy9hZGQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcnQvYWRkLXRvLWNhcnQtZGlhbG9nL2FkZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3RpbmctaW1hZ2V7XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgd2lkdGg6IDMuNWVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGV7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnBtLWRpYWxvZy1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2hvcHBpbmctYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY2LCAxNTYpO1xufSIsIi5wcm9kdWN0LWxpc3RpbmctaW1hZ2Uge1xuICBoZWlnaHQ6IDVlbTtcbiAgd2lkdGg6IDMuNWVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wbS1kaWFsb2ctcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zaG9wcGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDE2NiwgMTU2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddToCartDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartDialogComponent", function() { return AddToCartDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddToCartDialogComponent = /** @class */ (function () {
    function AddToCartDialogComponent(data, router, matDialogRef) {
        this.router = router;
        this.matDialogRef = matDialogRef;
        this.cartItem = data.cartItem;
    }
    AddToCartDialogComponent.prototype.ngOnInit = function () { };
    AddToCartDialogComponent.prototype.goToCart = function () {
        var _this = this;
        this.router.navigate(["cart"]).then(function () { return _this.closeDialog(); });
    };
    AddToCartDialogComponent.prototype.continueShopping = function () {
        var _this = this;
        this.router.navigate(["products"]).then(function () { return _this.closeDialog(); });
    };
    AddToCartDialogComponent.prototype.closeDialog = function () {
        this.matDialogRef.close();
    };
    AddToCartDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-add-to-cart-dialog',
            template: __webpack_require__(/*! ./add-to-cart-dialog.component.html */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-to-cart-dialog.component.scss */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddToCartDialogComponent);
    return AddToCartDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"atc-container\" style=\"background-color: transparent; box-shadow: none;\">\n    <mat-card-content>\n        <mat-form-field class=\"atc-quantity\" style=\"left: 21%;\">\n          <mat-label>Quantity</mat-label>\n            <mat-select name=\"quantity\" [(value)]=\"quantity\">\n                <mat-option *ngFor=\"let quantity of availableQuantities\" [value]\n                =\"quantity\" style=\"background-color: rgb(41, 113, 107)\">\n                  {{quantity}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <span class=\"atc-spacer\"></span>\n        <button mat-raised-button color=\"primary\" (click)=\"addItemToCart()\" \n        *ngIf=\"!(isItemAlreadyInCart|async)\" style=\"left: 30%; background-color: rgb(61, 166, 156);\">\n         <mat-icon>\n            add_shopping_cart\n         </mat-icon>\n         <span class=\"addcart-btn-text\">Add to Cart</span>\n        </button>\n        <button mat-raised-button color=\"primary\" class=\"btn-md\" [routerLink]=\"['../cart']\"\n        *ngIf=\"isItemAlreadyInCart|async\" style=\"left: 30%; background-color: rgb(61, 166, 156);\">\n         <mat-icon>\n            shopping_cart\n         </mat-icon>\n         <span class=\"viewcart-btn-text\">View in Cart</span>\n        </button>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJ0L2FkZC10by1jYXJ0L2FkZC10by1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.ts ***!
  \******************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_cart_cart_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/cart/cart-selector */ "./src/app/core/cart/cart-selector.ts");
/* harmony import */ var _core_cart_cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/cart/cart-store */ "./src/app/core/cart/cart-store.ts");
/* harmony import */ var _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/cart/cart.service */ "./src/app/core/cart/cart.service.ts");
/* harmony import */ var _add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-to-cart-dialog/add-to-cart-dialog.component */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts");







var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartStore, cartService, matDialog) {
        this.cartStore = cartStore;
        this.cartService = cartService;
        this.matDialog = matDialog;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        this.availableQuantities = _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["ALLOWED_PRODUCT_QUANTITIES"];
        this.isItemAlreadyInCart = this.cartStore.select(Object(_core_cart_cart_selector__WEBPACK_IMPORTED_MODULE_3__["getIsItemAlreadyInCart"])(this.product.id));
    };
    AddToCartComponent.prototype.addItemToCart = function () {
        var _this = this;
        this.cartService.addToCart(this.product, this.quantity)
            .subscribe(function (cartItem) { return _this.openDialog(cartItem); });
    };
    AddToCartComponent.prototype.openDialog = function (cartItem) {
        this.matDialog.open(_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddToCartDialogComponent"], {
            width: "350px",
            height: "250px",
            data: { cartItem: cartItem },
            disableClose: true
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddToCartComponent.prototype, "product", void 0);
    AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-add-to-cart',
            template: __webpack_require__(/*! ./add-to-cart.component.html */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./add-to-cart.component.scss */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_cart_cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"], _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "./src/app/shared/cart/cart-items-count/cart-items-count.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/cart/cart-items-count/cart-items-count.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon matBadgeColor=\"accent\" [matBadge]=\"totalItemsInCart$|async\" [routerLink]=\"['cart']\" style=\"margin-top: 25%; margin-right: 25px;\">\n    shopping_cart\n  </mat-icon>"

/***/ }),

/***/ "./src/app/shared/cart/cart-items-count/cart-items-count.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/cart/cart-items-count/cart-items-count.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJ0L2NhcnQtaXRlbXMtY291bnQvY2FydC1pdGVtcy1jb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/cart/cart-items-count/cart-items-count.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/cart/cart-items-count/cart-items-count.component.ts ***!
  \****************************************************************************/
/*! exports provided: CartItemsCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsCountComponent", function() { return CartItemsCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_cart_cart_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/cart/cart-selector */ "./src/app/core/cart/cart-selector.ts");
/* harmony import */ var _core_cart_cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/cart/cart-store */ "./src/app/core/cart/cart-store.ts");




var CartItemsCountComponent = /** @class */ (function () {
    function CartItemsCountComponent(cartStore) {
        this.cartStore = cartStore;
    }
    CartItemsCountComponent.prototype.ngOnInit = function () {
        this.totalItemsInCart$ = this.cartStore.select(_core_cart_cart_selector__WEBPACK_IMPORTED_MODULE_2__["getCartItemsCount"]);
    };
    CartItemsCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-cart-items-count',
            template: __webpack_require__(/*! ./cart-items-count.component.html */ "./src/app/shared/cart/cart-items-count/cart-items-count.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./cart-items-count.component.scss */ "./src/app/shared/cart/cart-items-count/cart-items-count.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_cart_cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"]])
    ], CartItemsCountComponent);
    return CartItemsCountComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MmMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmMaterialModule", function() { return MmMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MmMaterialModule = /** @class */ (function () {
    function MmMaterialModule() {
    }
    MmMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
            ]
        })
    ], MmMaterialModule);
    return MmMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _cart_cart_items_count_cart_items_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart-items-count/cart-items-count.component */ "./src/app/shared/cart/cart-items-count/cart-items-count.component.ts");
/* harmony import */ var _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/add-to-cart/add-to-cart.component */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var _cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/add-to-cart-dialog/add-to-cart-dialog.component */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts");











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cart_cart_items_count_cart_items_count_component__WEBPACK_IMPORTED_MODULE_8__["CartItemsCountComponent"], _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_9__["AddToCartComponent"], _cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddToCartDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MmMaterialModule"]
            ],
            exports: [
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MmMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _cart_cart_items_count_cart_items_count_component__WEBPACK_IMPORTED_MODULE_8__["CartItemsCountComponent"],
                _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_9__["AddToCartComponent"]
            ],
            entryComponents: [_cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddToCartDialogComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinsamarasinghe/Documents/My-Projects/MEAN-app/medicine-mart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map