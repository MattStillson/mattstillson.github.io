webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container header\" id=\"shadow\" style=\"padding-left: 0; padding-right: 0;\">\r\n  <header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" (click)=\"navbarCollapsed = true\">Matt Stillson</a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\r\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" (click)=\"navbarCollapsed = true\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\" (click)=\"navbarCollapsed = true\">About Me!</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/resume']\" (click)=\"navbarCollapsed = true\">My Resume</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/examples']\" (click)=\"navbarCollapsed = true\">Examples</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </header>\r\n</div>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer>\r\n  <div class=\"container-fluid\">\r\n    <p class=\"text-center\">\r\n      © Designed by\r\n      <a href=\"https://MattStillson.github.io\" target=\"_blank\">\r\n        <strong>Matt Stillson | The Architect</strong>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js__ = __webpack_require__("../../../../bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.navbarCollapsed = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__ = __webpack_require__("../../../../../src/app/components/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_examples_examples_component__ = __webpack_require__("../../../../../src/app/components/examples/examples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_examples_examples_component__["a" /* ExamplesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_resume_resume_component__ = __webpack_require__("../../../../../src/app/components/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_examples_examples_component__ = __webpack_require__("../../../../../src/app/components/examples/examples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', pathMatch: 'full', redirectTo: 'path' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_4__components_resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'examples', component: __WEBPACK_IMPORTED_MODULE_5__components_examples_examples_component__["a" /* ExamplesComponent */] },
    { path: '**', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(router)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg2\" id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center\">\r\n          <h2 class=\"section-subheading\">About Me</h2>\r\n          <h3 class=\"section-subheading text-muted\">Matthew Stillson</h3>\r\n          <h3 class=\"section-subheading text-muted\">A brief history of my career.</h3>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <ul class=\"timeline\">\r\n            <li>\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/attractive.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2018 and Beyond!</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">What the future holds...</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    After doing a bit of research and looking at jobs from several different companies I found a commin theme and really narrowed down the certification list to these:\r\n                    ITIL, AWS, Azure, CISSP, GIAC: Blue Team related, SQL Developer, The intresting thing to me is that I have experience in all of the subjects, I guess its time to study!\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/html.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2014 to Present Day</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">\"I dont always code, but when I do its in production!\"</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    In 2014 I had really wanted to expand my knowledge in systems and the infrastructures they are in. Today I can say that I really have a good grasp on how things work or how they should work. Having knowledge in C#, .Net, HTML5, CSS3, SCSS, Javascript, Node, Git, Python, Powershell, Azure, AWS, SQL along with NoSql, JSON and the list is still growing for software related items.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/brainstorming.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2008 to 2014</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">Transition to Security</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    During these 6 years I really focused and found a natural flow in removing viruses and reverse-engineering them to see what they were doing and what they were really looking for. I developed a set of tools for a group I worked for to aid in this process. During this time we were very succesful and I also managed the group and maintained the tools and guides we used in order to get a system back up and running.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/layout.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2005 to 2006</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">Starting out as a System Administrator</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    During this time I worked for a company that really pushed me into the system administrator world. Working inside of several large companies in the Tampa Bay area as well as numerious smaller companies. We also had space in a disaster recovery facility which had a backbone that strectched to all major U.S. trunks.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-image\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/pantone.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2000 to 2003</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p class=\"text-muted quicksand\">\r\n                      During my years in highschool I consistently recieved high marks and remarks from the teachers in regards to my knowledge and how quickly I was able to get work done or pick up a new program. In 2003 I recieved my A+ certification and thus began my career in Information Technology.\r\n                    </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n  position: relative;\n  padding: 0;\n  list-style: none; }\n  .timeline:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 40px;\n    width: 2px;\n    margin-left: -1.5px;\n    content: '';\n    background-color: #f1f1f1; }\n  .timeline > li {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 50px; }\n    .timeline > li:after {\n      display: table;\n      content: ' ';\n      clear: both; }\n    .timeline > li:before {\n      display: table;\n      content: ' '; }\n    .timeline > li .timeline-panel {\n      position: relative;\n      float: right;\n      width: 100%;\n      padding: 0 20px 0 100px;\n      text-align: left; }\n      .timeline > li .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0; }\n      .timeline > li .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0; }\n    .timeline > li .timeline-image {\n      position: absolute;\n      z-index: 100;\n      left: 0;\n      width: 80px;\n      height: 80px;\n      margin-left: 0;\n      text-align: center;\n      color: white;\n      border: 7px solid #f1f1f1;\n      border-radius: 100%; }\n      .timeline > li .timeline-image h4 {\n        font-size: 10px;\n        line-height: 14px;\n        margin-top: 12px; }\n    .timeline > li:last-child {\n      margin-bottom: 0; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      padding: 0 20px 0 100px;\n      text-align: left; }\n      .timeline > li.timeline-inverted > .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0; }\n      .timeline > li.timeline-inverted > .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0; }\n  .timeline .timeline-body > ul {\n    margin-bottom: 0; }\n  .timeline .timeline-body > p {\n    margin-bottom: 0; }\n  .timeline .timeline-heading h4 {\n    margin-top: 0;\n    color: inherit; }\n    .timeline .timeline-heading h4.subheading {\n      text-transform: none; }\n\n@media (min-width: 768px) {\n  .timeline:before {\n    left: 50%; }\n  .timeline > li {\n    min-height: 100px;\n    margin-bottom: 100px; }\n    .timeline > li .timeline-panel {\n      float: left;\n      width: 41%;\n      padding: 0 20px 20px 30px;\n      text-align: right; }\n    .timeline > li .timeline-image {\n      left: 50%;\n      width: 100px;\n      height: 100px;\n      margin-left: -50px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 13px;\n        line-height: 18px;\n        margin-top: 16px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      padding: 0 30px 20px 20px;\n      text-align: left; } }\n\n@media (min-width: 992px) {\n  .timeline > li {\n    min-height: 150px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px; }\n    .timeline > li .timeline-image {\n      width: 150px;\n      height: 150px;\n      margin-left: -75px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 18px;\n        line-height: 26px;\n        margin-top: 30px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 20px 20px; } }\n\n@media (min-width: 1200px) {\n  .timeline > li {\n    min-height: 170px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px 100px; }\n    .timeline > li .timeline-image {\n      width: 170px;\n      height: 170px;\n      margin-left: -85px; }\n      .timeline > li .timeline-image h4 {\n        margin-top: 40px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 100px 20px 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <h2>Examples Section</h2>\r\n  </div>\r\n  <br/>\r\n  <div class=\"container\">\r\n    <p>\r\n      I have 15+ years of experience in IT and have retained a huge amount of information new and old. When I sit down to start coding I will take a module or program and memorize a huge amount of the commands and see how I can automate a process that would normally take a person a long time to complete. Most times there is a package that is already made and the code just needs to fit the need.\r\n    </p>\r\n  </div>\r\n</section>\r\n<br/>\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"container-fluid\">\r\n      <h3>Code: </h3>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"https://github.com/MattStillson/MyTools/tree/master/powershell\" target=\"_blank\">Powershell</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"https://github.com/MattStillson/MyTools/tree/master/python\" target=\"_blank\">Python</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"https://github.com/MattStillson/MyTools/tree/master/JavaScript\" target=\"_blank\">Javascript</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"#\" target=\"_blank\">HTML</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"#\" target=\"_blank\">Security Related Scripts</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"https://github.com/MattStillson/MyTools/tree/master/sql\" target=\"_blank\">SQL</a>\r\n    </div>\r\n    <br/>\r\n    <h3>Latest books I have read.</h3>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book1</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book2</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book3</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/components/examples/examples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"bd-masthead\">\r\n  <div class=\"container-fluid\">\r\n    <img class=\"bd-booticon\" src=\"assets/img/webdesign/svg/placeholder.svg\" alt=\"ng-bootstrap logo\"/>\r\n    <p class=\"lead d-none d-md-block\">\r\n      Thank you for visiting my website! I have plently of examples of code for Powershell, Python, C#, .Net, Angular and plently of other one of items.\r\n    </p>\r\n    <p class=\"lead\">\r\n      <a\r\n        class=\"btn btn-outline-primary\"\r\n        [routerLink]=\"['/resume']\">Resume</a>\r\n      <a\r\n        class=\"btn btn-outline-primary\"\r\n        href=\"https://github.com/mattstillson\" target=\"_blank\">GitHub</a>\r\n    </p>\r\n  </div>\r\n</main>\r\n<section class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <img src=\"assets/img/webdesign/svg/design-tool.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Code Icon (code/)\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <h4>Code</h4>\r\n      <p class=\"text-muted\">\r\n        I started off writing small batch files to automate the boring stuff, I.E. empty the recycbin, clean temp files, empty out the browers cache, clean up printers and reinstall drivers. Then as time went on I realized there was so much more to writing scripts that I have now developed a fully automated employee onboarding process. Currently I know: HTML5, CSS3, JavaScript, C#, .NET Core, ASP.NET, Python, SQL, Powershell, Shell Scripting, XML. Cloud technologies I have worked with have been Azure and AWS as well as being familure with version control systems.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/security.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"UI Widgets icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Security</h4>\r\n        <p class=\"text-muted\">\r\n          Security has always been a huge passion of mine in every job and in every job I always learn a little more about what to look for in keeping things secure. There are a few sites that I am subscribed to and get emails constantly get updated with the newest threats and vulnerabilities. I do read the SAN's white papers and listen to there POD cast the \"SAN STORM!\", starting next year I will be enrolling in a trainning class to get my CISSP.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-md-5\">\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/tools.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Quality icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Networking</h4>\r\n        <p class=\"text-muted\">\r\n          The fundimentals of the OSI model are always something that I am aware of because of coding and scripting you have to think of what level you are attempting to manipulate or create. In the case of creating a application with a load blancer you need to be aware of the inbound connections or database connections, Email encryption, VPN connections. DNS records\r\n          are another key point in networking and setting up routes.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/analysis.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Accessible icon (escalator)\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Databases</h4>\r\n        <p class=\"text-muted\">\r\n          Database work is something I have with in the last year really started to work with a lot more. Database's can used for a multitude of things and the last project I was working on personally was a powershell script to watch log files and if a specific warning shows, it will log it to the database and the database will sending a self healing script back to the machine directly affected.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-md-5\">\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/compass.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Team icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Cloud</h4>\r\n        <p class=\"text-muted\">\r\n          Cloud computing can be comprised of a few different technologies AWS, Azure, Google Cloud as the industry leaders. I have knowledge in AWS as well as Azure, most of my scripts were developed for the enterprise in a azure cloud setting. After doing some research in what Information Technology as a whole is looking for and the direction were going, I find that most companies are using AWS over Azure.\r\n        </p>\r\n      </div>\r\n\r\n       <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/search.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Community icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Infrastructure</h4>\r\n        <p class=\"text-muted\">\r\n          Infrastructure can be defined as a service or on premisis, both I have had experience in creating or developing. VMWare and Hyper-V are the most well known technologies in this world but docker is a exciting technology to work with since containerization of not only your Infrastructure but also your develoment cycle.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    </section>\r\n\r\n    <section id=\"contact\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 mx-auto text-center\">\r\n            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\r\n            <hr class=\"primary\">\r\n            <p>Ready to have me as part of the team? Thats great! Send me a E-Mail or you can reach out to me!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg text-center\">\r\n            <i class=\"fa fa-envelope-o fa-3x sr-contact\"></i>\r\n            <p>\r\n              <a href=\"mailto:matt.stillson21@gmail.com\">Matt.Stillson21@gmail.com</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div id=\"photo-header\" class=\"text-center\">\r\n        <!-- PHOTO (AVATAR) -->\r\n        <div id=\"photo\">\r\n          <img src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA1TAAAAJDA4NjA5N2RlLTBkNDItNGQ1NS04MDc2LWI1Y2JkNzhiNmM1Yw.jpg\" alt=\"matt stillson\">\r\n        </div>\r\n        <div id=\"text-header\">\r\n          <h1>Hello,<br> my name is <span>Matthew Stillson</span> and this is my resume</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-7\">\r\n      <!-- ABOUT ME -->\r\n      <div class=\"box\">\r\n        <h2>About Me</h2>\r\n        <p>15 Years’ experience in enterprise level technical support and engineering along with front end coding and tool building. High-energy individual with excellent skills in problem determination, problem solution, creation of winning solutions for clients and the company. Exceptional and professional communication and collaboration skills to work with teams or individually. Proven performance record to learn new technologies.</p>\r\n      </div>\r\n      <!-- EDUCATION -->\r\n      <div class=\"box\">\r\n        <h2>Certifications:</h2>\r\n        <ul id=\"education\" class=\"clearfix\">\r\n          <li>\r\n            <div class=\"year float-left\">MTA:</div>\r\n            <div class=\"description float-right\">\r\n              <h3>MCP ID: 13559201</h3>\r\n              <p>Software Development, Server, Networking, Desktop</p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"year float-left\">Net+</div>\r\n            <div class=\"description float-right\">\r\n              <h3>CompTIA</h3>\r\n              <p>These are both standard certifications that I have recieved when I first left High School</p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"year float-left\">  A+</div>\r\n            <div class=\"description float-right\">\r\n              <h3>CompTIA</h3>\r\n              <p>These are both standard certifications that I have recieved when I first left High School</p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- EXPERIENCES -->\r\n      <div class=\"box\">\r\n        <div id=\"clear-line\"></div>\r\n        <h2>Experience:</h2>\r\n        <div class=\"job clearfix\">\r\n          <div class=\"col-xs-3\">\r\n            <div class=\"where\">Ultimate Medical Academy</div>\r\n            <div class=\"year\">Sep 2014 - Present</div>\r\n          </div>\r\n          <div class=\"col-xs-9\">\r\n            <div class=\"profession\">Production Engineer</div>\r\n            <div class=\"description\">This role has primary responsibility to provide support of the core business applications for UMA, and is Tier II/III end-user support of the same. This role will act as first level escalation for Tier I Service Desk and Tier II Deskside Support, but will field first level support for all Leadership, Executive and UMA affiliate employees. Members of the Production Engineering team will have shared knowledge and skillset of job responsibilities. There will be individually assigned primary responsibility for some specific core business applications. Team members in this role will be responsible for creating and maintaining up to date documentation and SOPs related to core business systems and processes so to effectively train other support team members as well as customers. Production Engineering team members will engage regularly with Application Owners so to stay up to date with changes, enhancements, bugs, fixes and updates. Production Engineering team members will engage in any outage, as assigned to core business applications, to include up to resolution and RCA processing. Necessary team members will attend Change Management discussions and will participate in Problem Management processes. Developed the NewOnBoarding process utilizing SQL, Powershell, and .NET frameworks.</div>\r\n          </div>\r\n        </div>\r\n        <div id=\"clear-line\"></div>\r\n        <div class=\"job clearfix\">\r\n          <div class=\"col-xs-3\">\r\n            <div class=\"where\">Computer Centers USA, INC.</div>\r\n            <div class=\"year\">Jan 2014 - Aug 2014</div>\r\n          </div>\r\n          <div class=\"col-xs-9\">\r\n            <div class=\"profession\">Assistant Manager</div>\r\n            <div class=\"description\">Worked as Assistant Manager and aided other technicians in troubleshooting systems that were compromised by malware. As part of the Service Operations Center team, we had to be sure that all systems and telephones were functioning. Also developed guides and walk throughs for removing specific malware.</div>\r\n          </div>\r\n        </div>\r\n        <div id=\"clear-line\"></div>\r\n        <div class=\"job clearfix\">\r\n          <div class=\"col-xs-3\">\r\n            <div class=\"where\">Support.com</div>\r\n            <div class=\"year\">2008 - Dec 2013</div>\r\n          </div>\r\n          <div class=\"col-xs-9\">\r\n            <div class=\"profession\">Field Support Manager</div>\r\n            <div class=\"description\">As Lead Field Support Manager was the point of contact for handeling all escalations across the 3 out of 6 Customer Portals and Incidents that came from the tenant's corporate office as well as internal. I was the lead developer for serveral tools that were utilized by the field support team. Most recognized was the field support manager bootdisk, the first year it was created it saved over $3.5 million. The other tools that were developed were to help aid the service technicians remove malware with out crashing the operating system, these tools were developed with automation in mind. I was also part of the quality assurance team in testing work flows and the operation of the service delivery management system was working as intended. As part of the field support manager team we traveled to multiple cities across the US for training sessions, road-show campaigns, marketing events and product demonstrations. This role not only included technical but Sales Engineer understanding.</div>\r\n          </div>\r\n        </div>\r\n        <div id=\"clear-line\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-5\">\r\n      <!-- CONTACT -->\r\n      <div class=\"box clearfix\">\r\n        <h2>Contact</h2>\r\n        <div class=\"contact-item\">\r\n          <div class=\"icon pull-left text-center\"><span class=\"fa fa-phone fa-fw\"></span></div><div class=\"title only pull-right\"><a href=\"tel:813-695-3197\">813-695-3197</a></div>\r\n        </div>\r\n        <div class=\"contact-item\">\r\n          <div class=\"icon pull-left text-center\"><span class=\"fa fa-envelope fa-fw\"></span></div>\r\n          <div class=\"title only pull-right\"><a href=\"mailto:Matt.Stillson21@gmail.com\">Matt.Stillson21@gmail.com</a></div>\r\n        </div>\r\n      </div>\r\n      <!-- SKILLS -->\r\n      <div class=\"box\">\r\n        <h2>Skills</h2>\r\n        <div class=\"skills\">\r\n          <div class=\"item-skills\" data-percent=\"1.00\">HTML</div>\r\n          <div class=\"item-skills\" data-percent=\"0.90\">CSS / SCSS</div>\r\n          <div class=\"item-skills\" data-percent=\"0.80\">jQuery</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">Javascript</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">Angular</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">Node</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">C#</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">.Net</div>\r\n          <div class=\"item-skills\" data-percent=\"0.75\">Powershell</div>\r\n          <div class=\"item-skills\" data-percent=\"0.70\">SQL</div>\r\n          <div class=\"item-skills\" data-percent=\"0.65\">Python</div>\r\n          <div class=\"item-skills\" data-percent=\"0.60\">Shell Scripting</div>\r\n          <div class=\"skills-legend clearfix\">\r\n            <div class=\"legend-left legend\">Beginner</div>\r\n            <div class=\"legend-left legend\"><span>Proficient</span></div>\r\n            <div class=\"legend-right legend\"><span>Expert</span></div>\r\n            <div class=\"legend-right legend\">Master</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- LANGUAGES -->\r\n      <div class=\"box\">\r\n        <h2>Languages</h2>\r\n        <div id=\"language-skills\">\r\n          <div class=\"skill\">English (Native)<div class=\"icons pull-right\"><div style=\"width: 100%;\" class=\"icons-red\"></div></div></div>\r\n        </div>\r\n      </div>\r\n      <!-- HOBBIES -->\r\n      <div class=\"box\">\r\n        <h2>Hobbies</h2>\r\n        <div class=\"hobby\">Ice Hockey</div>\r\n        <div class=\"hobby\">Fishing</div>\r\n        <div class=\"hobby\">Programming</div>\r\n        <div class=\"hobby\">Billiards</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js__ = __webpack_require__("../../../../bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_bundle_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var callback = function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.item-skills').each(function () {
                var newWidth = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent().width() * __WEBPACK_IMPORTED_MODULE_1_jquery__(this).data('percent');
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).width(0);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).animate({
                    width: newWidth,
                }, 1000);
            });
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.icons-red').each(function () {
                var height = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).height();
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).animate({
                    height: 14,
                }, 2000);
            });
        };
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(callback);
        var resize;
        window.onresize = function () {
            clearTimeout(resize);
            resize = setTimeout(function () {
                callback();
            }, 100);
        };
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
