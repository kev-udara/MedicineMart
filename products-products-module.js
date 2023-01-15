(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: ProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_product_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/product-data.service */ "./src/app/core/products/product-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDataService", function() { return _products_product_data_service__WEBPACK_IMPORTED_MODULE_0__["ProductDataService"]; });




/***/ }),

/***/ "./src/app/core/products/product-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/products/product-data.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDataService", function() { return ProductDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductDataService = /** @class */ (function () {
    function ProductDataService($http) {
        this.$http = $http;
    }
    ProductDataService.prototype.getAllProducts = function () {
        return this.$http.get('products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
    };
    ProductDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductDataService);
    return ProductDataService;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");
/* harmony import */ var _core_products_product_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/products/product-data.service */ "./src/app/core/products/product-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm5/ngmodule-material-carousel.js");










var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MmMaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__["MatCarouselModule"].forRoot()
            ],
            providers: [_core_products_product_data_service__WEBPACK_IMPORTED_MODULE_5__["ProductDataService"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/products/products.component.html":
/*!***********************************************************!*\
  !*** ./src/app/products/products/products.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n          href=\n\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<mat-card class=\"example-card\">\n  <mat-carousel\n  timings=\"250ms ease-in\"\n  [autoplay]=\"true\"\n  interval=\"5000\"\n  color=\"accent\"\n  maxWidth=\"auto\"\n  proportion=\"30\"\n  slides=\"5\"\n  [loop]=\"true\"\n  [hideArrows]=\"true\"\n  [hideIndicators]=\"false\"\n  [useKeyboard]=\"true\"\n  [useMouseWheel]=\"false\"\n  orientation=\"ltr\"\n>\n  <mat-carousel-slide\n    #matCarouselSlide\n    *ngFor=\"let slide of slides; let i = index\"\n    [image]=\"slide.image\"\n    overlayColor=\"#00000040\"\n    [hideOverlay]=\"false\"\n  >\n  <div\n  style=\"width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center\"\n>\n  <h1 style=\"padding: 10px; opacity: 88%;\">Your Trusted Consultant <br>&nbsp;For Health & Well-Being</h1>\n  <button style=\"border-radius: 25px; box-shadow: none; border: none; padding: auto; height: 30px;width: 120px;\"><i class=\"fa fa-phone\"></i>&nbsp;&nbsp;Contact Us</button>\n</div>\n</mat-carousel-slide>\n</mat-carousel>\n  <mat-card-content style=\"margin-top: 15px;\">\n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        (keyup)=\"applyFilter($event.target.value)\"\n        placeholder=\"Filter\" \n      />\n      <mat-icon matSuffix class=\"email-icon\">filter_list</mat-icon>\n    </mat-form-field>\n    <table matSort mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"background-color: transparent;\">\n      <!--- Note that these columns can be defined in any order.\n                          The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"imgUrl\">\n        <th mat-header-cell *matHeaderCellDef>Image</th>\n        <td mat-cell *matCellDef=\"let product\"> \n          <img [src]=\"product.imgUrl\" class=\"product-listing-image\" style=\"border-radius: 15px; box-shadow: inset; margin-right: 11px;\" />\n        </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let product\" class=\"name\">{{ product.name }}</td>\n      </ng-container>\n\n      <!-- Description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Description</th>\n        <td mat-cell *matCellDef=\"let product\" class=\"description\">{{ product.description }}</td>\n      </ng-container>\n\n      <!-- Price Column -->\n      <ng-container matColumnDef=\"price\" >\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Price</th>\n        <td mat-cell *matCellDef=\"let product\" class=\"price\">\n          {{ product.price | currency :'Rs.'}}\n        </td>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"action\" >\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\">Action</th>\n        <td mat-cell *matCellDef=\"let product\">\n          <pm-add-to-cart [product]=\"product\"></pm-add-to-cart>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [pageSizeOptions]=\"[3, 6, 9]\"\n      showFirstLastButtons\n    ></mat-paginator>\n    <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/products/products/products.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/products/products/products.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Istok+Web&display=swap\");\n.example-card {\n  max-width: 100%;\n  background-color: rgb(28, 77, 71);\n  font-family: \"Figtree\", sans-serif;\n  height: 147%;\n  border-radius: 0%;\n}\n.full-width {\n  width: 100%;\n}\n.example-header-image {\n  background-size: cover;\n}\n.like-button {\n  background-color: rgb(61, 166, 156);\n  left: 40px;\n  border-radius: 15px;\n}\n.share-button {\n  background-color: rgb(61, 166, 156);\n  left: 55px;\n  border-radius: 15px;\n}\n.mat-table {\n  box-shadow: none;\n  width: 100%;\n}\n.mat-cell {\n  padding: 8px 8px 8px 0;\n}\n.product-listing-image {\n  height: 20em;\n  width: 15em;\n}\n@media all and (max-width: 699px) {\n  .product-listing-image {\n    height: 9em;\n    width: 7em;\n  }\n}\n.mat-spinner {\n  margin: 10% auto;\n}\n.name {\n  font-size: smaller;\n}\n.description {\n  font-size: smaller;\n}\n.cart-button {\n  background-color: rgb(41, 113, 107);\n  margin-left: 35px;\n}\nmat-paginator {\n  background-color: transparent;\n}\n.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: black !important;\n}\n.name {\n  font-family: \"Istok Web\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnNhbWFyYXNpbmdoZS9Eb2N1bWVudHMvTXktUHJvamVjdHMvTUVBTi1hcHAvbWVkaWNpbmUtbWFydC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNSO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0NKO0FERUU7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQ0NKO0FBQ0Y7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDQUo7QURJRTtFQUNFLG1DQUFBO0VBQ0EsaUJBQUE7QUNESjtBREtFO0VBQ0UsNkJBQUE7QUNGSjtBRE9FO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtBQ0pKO0FEUUU7RUFDRSxvQ0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Jc3RvaytXZWImZGlzcGxheT1zd2FwJyk7XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjgsIDc3LCA3MSkgO1xuICAgIGZvbnQtZmFtaWx5OiAnRmlndHJlZScsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxNDclO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICB9XG5cbiAgLmZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5saWtlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDE2NiwgMTU2KTtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuc2hhcmUtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY2LCAxNTYpO1xuICAgIGxlZnQ6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5tYXQtdGFibGV7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcbiAgfVxuXG4gIC5wcm9kdWN0LWxpc3RpbmctaW1hZ2V7XG4gICAgaGVpZ2h0OiAyMGVtO1xuICAgIHdpZHRoOiAxNWVtO1xuICB9XG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2OTlweCl7XG4gICAgLnByb2R1Y3QtbGlzdGluZy1pbWFnZXtcbiAgICAgIGhlaWdodDogOWVtO1xuICAgICAgd2lkdGg6IDdlbTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNwaW5uZXJ7XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgfVxuXG4gIC5uYW1le1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjsgXG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IHNtYWxsZXI7IFxuICB9XG4gIFxuXG4gIC5jYXJ0LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDExMywgMTA3KTtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgfVxuXG5cbiAgbWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBcbiAgXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfSBcbiAgXG4gIFxuICAubmFtZXtcbiAgICBmb250LWZhbWlseTogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXN0b2srV2ViJmRpc3BsYXk9c3dhcFwiKTtcbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgNzcsIDcxKTtcbiAgZm9udC1mYW1pbHk6IFwiRmlndHJlZVwiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDE0NyU7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubGlrZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDE2NiwgMTU2KTtcbiAgbGVmdDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnNoYXJlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY2LCAxNTYpO1xuICBsZWZ0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XG59XG5cbi5wcm9kdWN0LWxpc3RpbmctaW1hZ2Uge1xuICBoZWlnaHQ6IDIwZW07XG4gIHdpZHRoOiAxNWVtO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2OTlweCkge1xuICAucHJvZHVjdC1saXN0aW5nLWltYWdlIHtcbiAgICBoZWlnaHQ6IDllbTtcbiAgICB3aWR0aDogN2VtO1xuICB9XG59XG4ubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IDEwJSBhdXRvO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4uY2FydC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDExMywgMTA3KTtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiSXN0b2sgV2ViXCIsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/products/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/cart/cart.service */ "./src/app/core/cart/cart.service.ts");





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productDataService, cartService) {
        this.productDataService = productDataService;
        this.cartService = cartService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loading = true;
        this.subscriptions = [];
        this.displayedColumns = ['imgUrl', 'name', 'description', 'price', 'action',];
        this.slides = [
            { 'image': 'assets/Tablet_Summer 2019_Desrosiers.jpg' },
            { 'image': 'assets/pharmacist-wearing-face-mask-white-coat-holding-medicine-pharmacy-store-during-corona-virus-pandemic_308072-601.webp' },
            { 'image': 'assets/EzrWyOoXMAUlvHI.jpeg' },
            { 'image': 'assets/three-pharmacists-helping-each-other-1fgcvulokjazfbyb.jpg' },
            { 'image': 'assets/Pharmacists.jpg' }
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.productDataService
            .getAllProducts()
            .subscribe(function (products) { return _this.onDataLoad(products); }));
    };
    ProductsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    ProductsComponent.prototype.addItemToCart = function (product) {
        this.cartService.addToCart(product, 2);
    };
    ProductsComponent.prototype.onDataLoad = function (products) {
        this.loading = false;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = products;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ProductsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProductsComponent.prototype, "paginator", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pm-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ProductDataService"], _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map