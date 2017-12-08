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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\r\n  <header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" (click)=\"navbarCollapsed = true\">Matt Stillson</a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\r\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" (click)=\"navbarCollapsed = true\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\" (click)=\"navbarCollapsed = true\">About Me!</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/resume']\" (click)=\"navbarCollapsed = true\">My Resume</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/examples']\" (click)=\"navbarCollapsed = true\">Examples</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </header>\r\n</div>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer class=\"bd-footer text-muted small bg-dark\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <h1>HOLY BATMAN!</h1>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"align-self-end\">\r\n          <p>sub section 1</p>\r\n        </div>\r\n        <div class=\"\">\r\n          <p>sub section 2</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n          Icons made by Freepik from <a href=\"http://http://www.freepik.com/\">www.flaticon.com</a>\r\n        <p>bread crumbs</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
    { path: '', pathMatch: 'full', redirectTo: 'home' },
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

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\r\n  position: relative;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.timeline:before {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 40px;\r\n  width: 2px;\r\n  margin-left: -1.5px;\r\n  content: '';\r\n  background-color: #f1f1f1;\r\n}\r\n.timeline > li {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.timeline > li:after, .timeline > li:before {\r\n  display: table;\r\n  content: ' ';\r\n}\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n.timeline > li .timeline-panel {\r\n  position: relative;\r\n  float: right;\r\n  width: 100%;\r\n  padding: 0 20px 0 100px;\r\n  text-align: left;\r\n}\r\n.timeline > li .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n.timeline > li .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n.timeline > li .timeline-image {\r\n  position: absolute;\r\n  z-index: 100;\r\n  left: 0;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-left: 0;\r\n  text-align: center;\r\n  color: white;\r\n  border: 7px solid #f1f1f1;\r\n  border-radius: 100%;\r\n}\r\n.timeline > li .timeline-image h4 {\r\n  font-size: 10px;\r\n  line-height: 14px;\r\n  margin-top: 12px;\r\n}\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n  padding: 0 20px 0 100px;\r\n  text-align: left;\r\n}\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n.timeline > li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.timeline .timeline-heading h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n.timeline .timeline-heading h4.subheading {\r\n  text-transform: none;\r\n}\r\n.timeline .timeline-body > ul, .timeline .timeline-body > p {\r\n  margin-bottom: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .timeline:before {\r\n    left: 50%;\r\n  }\r\n  .timeline > li {\r\n    min-height: 100px;\r\n    margin-bottom: 100px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    float: left;\r\n    width: 41%;\r\n    padding: 0 20px 20px 30px;\r\n    text-align: right;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    left: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: -50px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n    margin-top: 16px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    float: right;\r\n    padding: 0 30px 20px 20px;\r\n    text-align: left;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .timeline > li {\r\n    min-height: 150px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-left: -75px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    margin-top: 30px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .timeline > li {\r\n    min-height: 170px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px 100px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 170px;\r\n    height: 170px;\r\n    margin-left: -85px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    margin-top: 40px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 100px 20px 20px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg2\" id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center\">\r\n          <h2 class=\"section-subheading\">About Me</h2>\r\n          <h3 class=\"section-subheading text-muted\">Matthew Stillson</h3>\r\n          <h3 class=\"section-subheading text-muted\">A brief history of my career.</h3>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <ul class=\"timeline\">\r\n            <li>\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/attractive.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2018 and Beyond!</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">What the future holds...</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    After doing a bit of research and looking at jobs from several different companies I found a commin theme and really narrowed down the certification list to these:\r\n                    ITIL, AWS, Azure, CISSP, GIAC: Blue Team related, SQL Developer, The intresting thing to me is that I have experience in all of the subjects, I guess its time to study!\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/html.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2014 to Present Day</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">\"I dont always code, but when I do its in production!\"</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    In 2014 I had really wanted to expand my knowledge in systems and the infrastructures they are in. Today I can say that I really have a good grasp on how things work or how they should work. Having knowledge in C#, .Net, HTML5, CSS3, SCSS, Javascript, Node, Git, Python, Powershell, Azure, AWS, SQL along with NoSql, JSON and the list is still growing for software related items.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/brainstorming.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2008 to 2014</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">Transition to Security</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    During these 6 years I really focused and found a natural flow in removing viruses and reverse-engineering them to see what they were doing and what they were really looking for. I developed a set of tools for a group I worked for to aid in this process. During this time we were very succesful and I also managed the group and maintained the tools and guides we used in order to get a system back up and running.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/layout.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2005 to 2006</h4>\r\n                  <hr>\r\n                  <h4 class=\"subheading\">Starting out as a System Administrator</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p class=\"text-muted\">\r\n                    During this time I worked for a company that really pushed me into the system administrator world. Working inside of several large companies in the Tampa Bay area as well as numerious smaller companies. We also had space in a disaster recovery facility which had a backbone that strectched to all major U.S. trunks.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-image\">\r\n              <div class=\"timeline-image\">\r\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/webdesign/svg/pantone.svg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <br>\r\n                  <h4>2000 to 2003</h4>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p class=\"text-muted quicksand\">\r\n                      During my years in highschool I consistently recieved high marks and remarks from the teachers in regards to my knowledge and how quickly I was able to get work done or pick up a new program. In 2003 I recieved my A+ certification and thus began my career in Information Technology.\r\n                    </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n"

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
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/examples/examples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <h2>Examples Section</h2>\r\n  </div>\r\n  <br/>\r\n  <div class=\"container\">\r\n    <p>\r\n      I have 15+ years of experience in IT and have retained a huge amount of information new and old. When I sit down to start coding I will take a module or program and memorize a huge amount of the commands and see how I can automate a process that would normally take a person a long time to complete. Most times there is a package that is already made and the code just needs to fit the need.\r\n    </p>\r\n  </div>\r\n</section>\r\n<br/>\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"container-fluid\">\r\n      <h3>Code: </h3>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Powershell</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Python</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Javascript</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">HTML</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Security Related Scripts</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">SQL</a>\r\n    </div>\r\n    <br/>\r\n    <h3>Latest books I have read.</h3>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book1</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book2</a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <a href=\"\" target=\"_blank\">Book3</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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
            styles: [__webpack_require__("../../../../../src/app/components/examples/examples.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"bd-masthead\">\r\n  <div class=\"container-fluid\">\r\n    <img class=\"bd-booticon\" src=\"assets/img/webdesign/svg/placeholder.svg\" alt=\"ng-bootstrap logo\"/>\r\n    <p class=\"lead d-none d-md-block\">\r\n      Thank you for visiting my website! I have plently of examples of code for Powershell, Python, C#, .Net, Angular and plently of other one of items.\r\n    </p>\r\n    <p class=\"lead\">\r\n      <a\r\n        class=\"btn btn-outline-primary\"\r\n        [routerLink]=\"['/resume']\">Resume</a>\r\n      <a\r\n        class=\"btn btn-outline-primary\"\r\n        href=\"https://github.com/mattstillson\" target=\"_blank\">GitHub</a>\r\n    </p>\r\n  </div>\r\n</main>\r\n<section class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <img src=\"assets/img/webdesign/svg/design-tool.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Code Icon (code/)\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <h4>Code</h4>\r\n      <p class=\"text-muted\">\r\n        I started off writing small batch files to automate the boring stuff, I.E. empty the recycbin, clean temp files, empty out the browers cache, clean up printers and reinstall drivers. Then as time went on I realized there was so much more to writing scripts that I have now developed a fully automated employee onboarding process. Currently I know: HTML5, CSS3, JavaScript, C#, .NET Core, ASP.NET, Python, SQL, Powershell, Shell Scripting, XML. Cloud technologies I have worked with have been Azure and AWS as well as being familure with version control systems.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/security.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"UI Widgets icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Security</h4>\r\n        <p class=\"text-muted\">\r\n          Security has always been a huge passion of mine in every job and in every job I always learn a little more about what to look for in keeping things secure. There are a few sites that I am subscribed to and get emails constantly get updated with the newest threats and vulnerabilities. I do read the SAN's white papers and listen to there POD cast the \"SAN STORM!\", starting next year I will be enrolling in a trainning class to get my CISSP.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-md-5\">\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/tools.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Quality icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Networking</h4>\r\n        <p class=\"text-muted\">\r\n          Networking\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/analysis.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Accessible icon (escalator)\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Databases</h4>\r\n        <p class=\"text-muted\">\r\n\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-md-5\">\r\n      <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/compass.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Team icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Cloud</h4>\r\n        <p class=\"text-muted\">\r\n\r\n        </p>\r\n      </div>\r\n\r\n       <div class=\"col-sm-2\">\r\n        <img src=\"assets/img/webdesign/svg/search.svg\" class=\"img-fluid d-none d-sm-block\" alt=\"Community icon\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h4>Connecting</h4>\r\n        <p class=\"text-muted\">\r\n\r\n        </p>\r\n      </div>\r\n    </div>\r\n    </section>\r\n\r\n    <section id=\"contact\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 mx-auto text-center\">\r\n            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\r\n            <hr class=\"primary\">\r\n            <p>Ready to have me as part of the team? Thats great! Send me a E-Mail or you can reach out to me!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg text-center\">\r\n            <i class=\"fa fa-envelope-o fa-3x sr-contact\"></i>\r\n            <p>\r\n              <a href=\"mailto:matt.stillson21@gmail.com\">Matt.Stillson21@gmail.com</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n"

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
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
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

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/resume/resume.component.css")]
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