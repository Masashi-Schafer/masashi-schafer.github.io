(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _image_processor_image_processor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-processor/image-processor.component */ "./src/app/image-processor/image-processor.component.ts");





var routes = [
    { path: 'login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'demo', component: _image_processor_image_processor_component__WEBPACK_IMPORTED_MODULE_4__["ImageProcessorComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <!-- \n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  -->\n</div>\n\n<!--\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Car Detection Demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _image_processor_image_processor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-processor/image-processor.component */ "./src/app/image-processor/image-processor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_login_user_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-login/user-login.service */ "./src/app/user-login/user-login.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                _image_processor_image_processor_component__WEBPACK_IMPORTED_MODULE_6__["ImageProcessorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
            ],
            providers: [
                _user_login_user_login_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/image-processor/image-processor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/image-processor/image-processor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"bg-image\"></div>\n    <div *ngIf=\"garageNumber === 0\" class=\"bg-text\">\n        <h1>Garage 1</h1>\n        <div>\n          <button type=\"button\" disabled>Previous</button>\n          <canvas #canvas id=\"myCanvas1\" width=800 height=500></canvas>\n          <button (click)=\"nextGarage('myCanvas2')\">Next</button>\n        </div>\n        <div>\n            <label class=\"custom-file-upload\">Upload image\n              <span >\n                  <input type=\"file\"style=\"visibility:hidden; display:none;\"\n                  id=\"carImage\" name=\"cars\"\n                  accept=\"image/png, image/jpeg\"\n                  (change)=\"onFileSelected($event)\">\n              </span>\n            </label>\n            <label class=\"custom-file-upload\" \n              *ngIf=\"preProccessedImageSrc !== null\" \n              (click)=\"sendToS3()\">\n              Process Image\n            </label>\n          </div>\n  </div>\n  <div *ngIf=\"garageNumber === 1\" class=\"bg-text\">\n      <h1>Garage 2</h1>\n      <div>\n          <button (click)=\"previousGarage('myCanvas1')\">Previous</button>\n          <canvas #canvas id=\"myCanvas2\" width=800 height=500></canvas>\n          <button (click)=\"nextGarage('myCanvas3')\">Summary</button>\n      </div>\n      <div>\n          <label class=\"custom-file-upload\">Upload image\n            <span >\n                <input type=\"file\"style=\"visibility:hidden; display:none;\"\n                id=\"carImage\" name=\"cars\"\n                accept=\"image/png, image/jpeg\"\n                (change)=\"onFileSelected($event)\">\n            </span>\n          </label>\n          <label class=\"custom-file-upload\" \n            *ngIf=\"preProccessedImageSrc !== null\" \n            (click)=\"sendToS3()\">\n            Process Image\n          </label>\n        </div>\n</div>\n<div *ngIf=\"garageNumber === 2\" class=\"bg-text\">\n    <h1>Summary of Garages</h1>\n      <div>\n      <h1>Summary</h1>\n      <div>\n        <h2>Garage 1: {{getNumberOfCars(0)}}</h2>\n      </div>\n      <div>\n        <h2>Garage 2: {{getNumberOfCars(1)}}</h2>\n      </div>\n      <div>\n          <button (click)=\"previousGarage('myCanvas2')\">Garages</button>\n        </div>\n    </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-processor/image-processor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/image-processor/image-processor.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%; }\n\n* {\n  box-sizing: border-box; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(/assets/images/parking_background.jpg);\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(2px);\n  /* Full height */\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n/* Position text in the middle of the page/image */\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 70%;\n  padding: 20px;\n  text-align: center; }\n\n.myButton {\n  display: inline-block;\n  padding: 15px 25px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999; }\n\n.myButton:hover {\n  background-color: #3e8e41; }\n\n.myButton:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px); }\n\n.custom-file-upload {\n  padding: 15px 25px;\n  font-size: 20px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpc2NoYWZlci9Eb2N1bWVudHMvTW9iaS9KYW5fRGVtby9pbWFnZS1wcm9jZXNzLXByb3RvL3NyYy9hcHAvaW1hZ2UtcHJvY2Vzc29yL2ltYWdlLXByb2Nlc3Nvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDYjs7QUFFRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiw2REFBNEQ7RUFDNUQseUJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQVk7RUFFWixnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBRVAsMEJBQTBCO0VBQzFCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFDRSx3QkFBNEI7RUFBRSxvQkFBb0I7RUFDbEQscUNBQWtDO0VBQUUsaUNBQWlDO0VBQ3JFLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDaEMsV0FBVTtFQUNWLFdBQVU7RUFDVixjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsWUFBVztFQUNYLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUFpQiwwQkFBeUIsRUFBRTs7QUFFNUM7RUFDRSwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLG1DQUEwQjtVQUExQiwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXByb2Nlc3Nvci9pbWFnZS1wcm9jZXNzb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5iZy1pbWFnZSB7XG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcGFya2luZ19iYWNrZ3JvdW5kLmpwZyk7XG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICAgIGZpbHRlcjogYmx1cig4cHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IFxuICBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgICAgIFxuICAgIC8qIFByZXNlcnZlIGFzcGV0IHJhdGlvICovXG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIFBvc2l0aW9uIHRleHQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcGFnZS9pbWFnZSAqL1xuICAuYmctdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5teUJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XG4gIH1cbiAgXG4gIC5teUJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MX1cbiAgXG4gIC5teUJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gICAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gIC5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLmhpZGRlbklucHV0IHtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/image-processor/image-processor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/image-processor/image-processor.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageProcessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProcessorComponent", function() { return ImageProcessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/aws-config */ "./src/app/lib/aws-config.ts");





var CavnasIds = ['myCanvas1', 'myCanvas2'];
var ImageProcessorComponent = /** @class */ (function () {
    function ImageProcessorComponent(router) {
        // console.log('Component Constructed');
        var _this = this;
        this.router = router;
        this._selectedFile = null;
        this._selectedFiles = [null, null];
        this._preProccessedImageSrc = null;
        this._preProccessedImages = [null, null, null];
        this.rekognitionDataObjects = [null, null, null];
        this._rekognitionData = null;
        this.s3Image = null;
        this.garageNumber = 0;
        this.user = {
            token: localStorage.getItem('aws_id_token'),
            userPoolId: _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["PoolData"].UserPoolId,
            region: _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["Region"]
        };
        this.token = localStorage.getItem('aws_id_token');
        this.informationLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.informationLoaded.subscribe(function (event) {
            if (_this.rekognitionDataObjects[_this.garageNumber] === null) {
                _this.rekognitionDataObjects[_this.garageNumber] = event;
            }
            _this.drawPreProcessedImage(_this._preProccessedImages[_this.garageNumber], CavnasIds[_this.garageNumber]);
            // this.drawBoxes(event, CavnasIds[this.garageNumber]);
        });
        // console.log(this.token);
    }
    ImageProcessorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.canvas.toArray());
        this.canvas.changes.subscribe(function (val) {
            // console.log(this.canvas.toArray());
            if (_this._preProccessedImages[_this.garageNumber] !== null) {
                _this.drawPreProcessedImage(_this._preProccessedImages[_this.garageNumber], CavnasIds[_this.garageNumber]);
            }
        });
    };
    ImageProcessorComponent.prototype.ngOnInit = function () {
        var _a;
        if (!this.token) {
            this.router.navigate(['/login']);
        }
        else {
            var login = "cognito-idp." + this.user.region + ".amazonaws.com/" + this.user.userPoolId;
            // console.log(login);
            aws_sdk__WEBPACK_IMPORTED_MODULE_3__["config"].credentials = new aws_sdk__WEBPACK_IMPORTED_MODULE_3__["CognitoIdentityCredentials"]({
                IdentityPoolId: _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["IdentityPool"].Id,
                Logins: (_a = {},
                    _a[login] = this.user.token,
                    _a)
            });
            aws_sdk__WEBPACK_IMPORTED_MODULE_3__["config"].region = _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["Region"];
        }
        // let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        // let ctx = canvas.getContext('2d');
        // ctx.rect(200, 200, 50, 50);
    };
    ImageProcessorComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this._selectedFile = event.target.files[0];
        this._selectedFiles[this.garageNumber] = event.target.files[0];
        this.rekognitionDataObjects[this.garageNumber] = null;
        // console.log(this._selectedFile);
        var reader = new FileReader();
        reader.onloadend = function () {
            //  this._preProccessedImageSrc = reader.result;
            _this._preProccessedImages[_this.garageNumber] = reader.result;
            _this.drawPreProcessedImage(reader.result, CavnasIds[_this.garageNumber]);
            //  console.log(this._preProccessedImageSrc);
        };
        reader.readAsDataURL(this._selectedFiles[this.garageNumber]);
    };
    ImageProcessorComponent.prototype.sendToS3 = function () {
        var _this = this;
        var S3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_3__["S3"]({ apiVersion: '2006-03-01', region: _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["Region"] });
        // let key = `test-images/test123.png`;
        var key = 'test-images/Screen Shot 2019-01-07 at 2.35.11 PM.png';
        // let params = {
        //   Bucket: BucketName, 
        //   Key: key
        //  };
        var objKey = 'test-images/test_file.' + Date.now().toString(); // + this._selectedFile.name;
        // console.log(objKey);
        //  let objKey = 'test-images/' + this._selectedFile.name;
        var uploadParams = {
            Key: objKey,
            ContentType: this._selectedFiles[this.garageNumber].type,
            Body: this._selectedFiles[this.garageNumber],
            Bucket: _lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["BucketName"]
        };
        S3.putObject(uploadParams, function (err, data) {
            if (err) {
                console.log('error here: ', err);
                // results.innerHTML = 'ERROR: ' + err;
            }
            else {
                //set timeout to grab dynamoinfo here
                // console.log('about to check dynamo');
                var t_1 = null;
                var getDynamoInfo_1 = function (tableName, dynamoKey, emitter) {
                    var db = new aws_sdk__WEBPACK_IMPORTED_MODULE_3__["DynamoDB"]();
                    var dbParams = {
                        Key: { key: { 'S': dynamoKey } },
                        TableName: tableName,
                        AttributesToGet: ['payload'],
                        ConsistentRead: true
                    };
                    // console.log(dbParams);
                    db.getItem(dbParams, function (db_err, db_data) {
                        // console.log('db_err: ', db_err);
                        if (db_err || Object.keys(db_data).length === 0) {
                            // console.log('about to reset timer...');
                            console.log(db_err);
                            t_1 = setTimeout(function () { getDynamoInfo_1(_lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["TableName"], dynamoKey, emitter); }, 200);
                        }
                        else {
                            console.log('about to clear timer...');
                            console.log('db_data: ', db_data);
                            this._rekognitionData = JSON.parse(db_data.Item['payload'].S);
                            var cars_index = this._rekognitionData.Labels.findIndex(function (label) { return label.Name === 'Car'; });
                            console.log(this._rekognitionData);
                            emitter.emit(this._rekognitionData.Labels[cars_index].Instances);
                            // this.drawBoxes(this._rekognitionData.Labels[cars_index]); //can't access inside function
                            clearTimeout(t_1);
                        }
                    });
                };
                getDynamoInfo_1(_lib_aws_config__WEBPACK_IMPORTED_MODULE_4__["TableName"], objKey, _this.informationLoaded);
                // console.log('data: ', data);
            }
        });
    };
    ImageProcessorComponent.prototype.drawBoxes = function (carLabels, canvasId) {
        console.log('car labels: ', carLabels);
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        // ctx.beginPath();
        carLabels.forEach(function (label) {
            ctx.rect(canvas.width * label.BoundingBox.Left, canvas.height * label.BoundingBox.Top, canvas.width * label.BoundingBox.Width, canvas.height * label.BoundingBox.Height);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            console.log(label.BoundingBox);
        });
    };
    Object.defineProperty(ImageProcessorComponent.prototype, "selectedFile", {
        get: function () {
            return this._selectedFiles[this.garageNumber];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageProcessorComponent.prototype, "preProccessedImageSrc", {
        get: function () {
            return this._preProccessedImages[this.garageNumber];
        },
        enumerable: true,
        configurable: true
    });
    ImageProcessorComponent.prototype.nextGarage = function (canvasId) {
        this.garageNumber++;
        // this.drawPreProcessedImage(this._preProccessedImages[this.garageNumber], canvasId);
        // if (this.rekognitionDataObjects[this.garageNumber] !== null) {
        //   this.drawBoxes(this.rekognitionDataObjects[this.garageNumber], CavnasIds[this.garageNumber]);
        // }
    };
    ImageProcessorComponent.prototype.previousGarage = function (canvasId) {
        this.garageNumber--;
        console.log('here...');
        // this.drawPreProcessedImage(this._preProccessedImages[this.garageNumber], canvasId);
        // console.log(canvasId);
        // if (this.rekognitionDataObjects[this.garageNumber] !== null) {
        //   console.log('masashi here');
        //   this.drawBoxes(this.rekognitionDataObjects[this.garageNumber], CavnasIds[this.garageNumber]);
        // }
    };
    ImageProcessorComponent.prototype.drawPreProcessedImage = function (imgSrc, canvasId) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            var canvas = document.getElementById(canvasId);
            console.log(img);
            var ctx = canvas.getContext('2d');
            console.log('about to clear');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log('cleared');
            // ctx.
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            if (_this.rekognitionDataObjects[_this.garageNumber] !== null) {
                _this.drawBoxes(_this.rekognitionDataObjects[_this.garageNumber], CavnasIds[_this.garageNumber]);
            }
        };
        img.src = imgSrc;
        // let img = document.createElement('img');
    };
    ImageProcessorComponent.prototype.getNumberOfCars = function (index) {
        return (this.rekognitionDataObjects[index] !== null ? this.rekognitionDataObjects[index].length.toString() + ' cars'
            : 'No image processed');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ImageProcessorComponent.prototype, "canvas", void 0);
    ImageProcessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-processor',
            template: __webpack_require__(/*! ./image-processor.component.html */ "./src/app/image-processor/image-processor.component.html"),
            styles: [__webpack_require__(/*! ./image-processor.component.scss */ "./src/app/image-processor/image-processor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ImageProcessorComponent);
    return ImageProcessorComponent;
}());



/***/ }),

/***/ "./src/app/lib/aws-config.ts":
/*!***********************************!*\
  !*** ./src/app/lib/aws-config.ts ***!
  \***********************************/
/*! exports provided: PoolData, IdentityPool, Region, BucketName, TableName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolData", function() { return PoolData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityPool", function() { return IdentityPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketName", function() { return BucketName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableName", function() { return TableName; });
var PoolData = {
    UserPoolId: 'us-west-2_eTI0Uw8a4',
    Region: 'us-west-2',
    ClientId: '7oebojgs5klm1q1fd8lmiflg95'
};
var IdentityPool = {
    Id: 'us-west-2:acdaf442-a864-46ca-bf49-33d0ee46f11c'
};
var Region = 'us-west-2';
var BucketName = 'demo-image-processor';
var TableName = 'rekognition_info';


/***/ }),

/***/ "./src/app/user-login/user-config.ts":
/*!*******************************************!*\
  !*** ./src/app/user-login/user-config.ts ***!
  \*******************************************/
/*! exports provided: PoolData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolData", function() { return PoolData; });
var PoolData = {
    UserPoolId: 'us-west-2_eTI0Uw8a4',
    Region: 'us-west-2',
    ClientId: '7oebojgs5klm1q1fd8lmiflg95'
};


/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>User Login</h2>\n<div>\n  <div>\n    <div>\n        <label>Username</label>\n    </div>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"username\">\n\n    </div>\n    <div>\n        <label>Password</label>\n    </div>\n      <input type=\"password\" id=\"passwordInput\" [(ngModel)]=\"password\">\n      <input type=\"checkbox\" (click)=\"togglePasswordVisibility()\">Show Password\n  </div>\n  <button (click)=\"login()\" >Login</button>\n</div>\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login.service */ "./src/app/user-login/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = null;
        this.password = null;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.ngOnDestroy = function () {
        this.username = null;
        this.password = null;
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.username, this.password)
            .then(function () {
            _this.router.navigate(['/demo']);
        })
            .catch(function (error) {
            console.log(error);
            alert('invalid login');
        });
    };
    UserLoginComponent.prototype.togglePasswordVisibility = function () {
        var x = document.getElementById('passwordInput');
        if (x.type === 'password') {
            x.type = 'text';
        }
        else {
            x.type = 'password';
        }
    };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/user-login/user-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/user-login/user-login.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-config */ "./src/app/user-login/user-config.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.poolData = _user_config__WEBPACK_IMPORTED_MODULE_2__["PoolData"];
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('username: ', username);
            console.log('password: ', password);
            console.log('pool data: ', _this.poolData);
            var authenticationData = {
                Username: username,
                Password: password,
            };
            var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["AuthenticationDetails"](authenticationData);
            var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["CognitoUserPool"](_this.poolData);
            var userData = {
                Username: username,
                Pool: userPool
            };
            var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["CognitoUser"](userData);
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    var accessToken = result.getIdToken().getJwtToken();
                    console.log('result: ', result);
                    /* Use the idToken for Logins Map when Federating User Pools with identity pools or when
                    passing through an Authorization Header to an API Gateway Authorizer*/
                    var idToken = result.getIdToken().getJwtToken();
                    localStorage.setItem('aws_id_token', idToken);
                    // localStorage.setItem('aws_user_pool_id');
                    // localStorage.setItem('', re)
                    // console.log('idToken: ', idToken);
                    return resolve(true);
                    // this.router.navigate(['/demo']);
                },
                onFailure: function (err) {
                    return reject(err);
                },
                newPasswordRequired: function (userAttributes, requiredAttributes) {
                    console.log('User needs new password');
                    console.log(userAttributes, requiredAttributes);
                    delete userAttributes.email_verified;
                    cognitoUser.completeNewPasswordChallenge(password, userAttributes, this);
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/masashischafer/Documents/Mobi/Jan_Demo/image-process-proto/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map