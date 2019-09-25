(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Modules/box/box.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Modules/box/box.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [@changeDivSize]=currentState class=\"box\" [ngClass]=\"elevation\" (mouseover)=\"changeStyle($event)\"\r\n    (mouseout)=\"changeStyle($event)\" style=\"position:relative;height: 272px; \r\n    box-shadow: 0 0 10px rgba(0,0,0,0.6);\r\n    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);\r\n    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);\r\n    -o-box-shadow: 0 0 10px rgba(0,0,0,0.6);\"> -->\r\n    <div>\r\n<div [@changeDivSize]=currentState class=\"box\" [ngClass]=\"elevation\" (mouseover)=\"changeStyle($event)\"\r\n    (mouseout)=\"changeStyle($event)\" >\r\n    <div>\r\n        <p style=\"color: rgb(0, 110, 255); font-weight: bold;\"> Header</p>\r\n        <p (click)=\"goToAssetDetails()\"> <a >{{title}}</a></p>\r\n        <!-- <p>{{Data}} </p> -->\r\n        <div *ngIf=\"Data.length <= limit\">{{Data}}</div>\r\n        <div *ngIf=\"truncating && Data.length > limit\">\r\n            <p>{{Data | truncate : limit}}</p>\r\n            <!-- <p class=\"showMore\" (click)=\"truncating = false\">show more</p> -->\r\n            \r\n        </div>\r\n        <div *ngIf=\"!truncating && Data.length > limit\">\r\n            <p>  {{Data}} </p>\r\n            <p class=\"showMore\" (click)=\"truncating = true\">show less</p>\r\n        </div>\r\n        <br />\r\n        <br />\r\n\r\n        <mat-divider></mat-divider>\r\n        <div>\r\n            <img src=\"../../../assets/EYLogo.png\" style=\"opacity: 0.3; width: 30%; padding-top: 5px\"  />\r\n        </div>\r\n    </div>\r\n</div>   \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/asset-details/asset-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asset-details/asset-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>{{title}}</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Digitization solution.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n<div style=\"background-color: #2e2e38\">\r\n    <img [@changeDivSize]=currentState src = \"../../assets/IndexAssetSpec.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n    </div>\r\n\r\n    <div style=\"background-color: #2e2e38\">\r\n        <img  [@changeDivSize]=currentState src = \"../../assets/IndexBusinessApplication.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n        </div>\r\n\r\n        <div style=\"background-color: #2e2e38\">\r\n            <img  [@changeDivSize]=currentState src = \"../../assets/IndexSector.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n            </div>\r\n\r\n            <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n                <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n            </button> \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div>\r\n        <app-header></app-header>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-toolbar style=\"background-color: white\" class=\"bottomLine\">\r\n            <span class=\"fillSpace\"></span>\r\n            <div class=\"search\">\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" type=\"button\"><i class=\"material-icons\">search</i></button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                &nbsp;&nbsp;&nbsp;&nbsp; <button mat-stroked-button><mat-icon class=\"pr1\" style=\"color: blue\">phone</mat-icon> Option 1</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp; <button mat-stroked-button><mat-icon class=\"pr1\" style=\"color: green\">mood</mat-icon> Option 2</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp; <button mat-stroked-button><mat-icon class=\"pr1\" style=\"color: indigo\">access_time</mat-icon>Option 3</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp; <button mat-stroked-button><mat-icon class=\"pr1\" style=\"color: violet \">cast</mat-icon>Option 4</button>\r\n            </div>\r\n        </mat-toolbar>\r\n    </div>\r\n\r\n    <!-- Header Ends here -->\r\n\r\n\r\n    <mat-drawer-container>\r\n\r\n\r\n        <!-- Side Nav -->\r\n        <mat-drawer style=\"margin-right:5% !important;\" mode=\"side\" position=\"end\" opened>\r\n            <div >\r\n                <app-navbar></app-navbar>\r\n            </div>\r\n        </mat-drawer>\r\n        <!-- Side Nav Ends -->\r\n\r\n        <!-- Dashboard Main Content -->\r\n        <mat-drawer-content class = \"m5\" style=\"overflow:hidden;\">\r\n\r\n\r\n            <div class=\"pl2\">\r\n\r\n                <h4 class=\"header-style\">Header 1</h4>\r\n                <section class=\"card1\" *ngIf=\"r3data != []\">\r\n                    <!-- <div class=\"card--content\" *ngFor=\"let data of r1data; let i=index;\" >\r\n                            <app-box [Data]=\"r1data[i]\" [image]=\"r1images[i]\" [title]=\"r1titles[i]\" [urls]=\"r1urls[i]\"> </app-box>\r\n                    </div> -->\r\n\r\n                    <div class=\"card--content\" *ngFor=\"let data of r3data; let i=index;\">\r\n                        <app-box [Data]=\"r3data[i]\" [image]=\"r3images[i]\" [title]=\"r3titles[i]\" [urls]=\"r3urls[i]\">\r\n                        </app-box>\r\n                    </div>\r\n                </section>\r\n\r\n                <h4 class=\"header-style\" style=\"margin-top:5%\">Header 2</h4>\r\n                <section class=\"card1\" *ngIf=\"r3data != []\">\r\n                    <!-- <div class=\"card--content\" *ngFor=\"let data of r1data; let i=index;\" >\r\n                            <app-box [Data]=\"r1data[i]\" [image]=\"r1images[i]\" [title]=\"r1titles[i]\" [urls]=\"r1urls[i]\"> </app-box>\r\n                    </div> -->\r\n\r\n                    <div class=\"card--content\" *ngFor=\"let data of r3data; let i=index;\">\r\n                        <app-box [Data]=\"r3data[i]\" [image]=\"r3images[i]\" [title]=\"r3titles[i]\" [urls]=\"r3urls[i]\">\r\n                        </app-box>\r\n                    </div>\r\n                </section>\r\n\r\n                <h4 class=\"header-style\" style=\"margin-top:5%\">Header 3</h4>\r\n                <section class=\"card1\" *ngIf=\"r1data != []\">\r\n                    <!-- <div class=\"card--content\" *ngFor=\"let data of r1data; let i=index;\" >\r\n                                    <app-box [Data]=\"r1data[i]\" [image]=\"r1images[i]\" [title]=\"r1titles[i]\" [urls]=\"r1urls[i]\"> </app-box>\r\n                            </div> -->\r\n\r\n                    <div class=\"card--content\" *ngFor=\"let data of r3data; let i=index;\">\r\n                        <app-box [Data]=\"r3data[i]\" [image]=\"r3images[i]\" [title]=\"r3titles[i]\" [urls]=\"r3urls[i]\">\r\n                        </app-box>\r\n                    </div>\r\n\r\n\r\n\r\n                </section>\r\n\r\n                <h4 class=\"header-style\" style=\"margin-top:5%\">Header 4</h4>\r\n                <section class=\"card1\" *ngIf=\"r3data != []\">\r\n                    <!-- <div class=\"card--content\" *ngFor=\"let data of r1data; let i=index;\" >\r\n                                          <app-box [Data]=\"r1data[i]\" [image]=\"r1images[i]\" [title]=\"r1titles[i]\" [urls]=\"r1urls[i]\"> </app-box>\r\n                                  </div> -->\r\n\r\n                    <div class=\"card--content\" *ngFor=\"let data of r3data; let i=index;\">\r\n                        <app-box [Data]=\"r3data[i]\" [image]=\"r3images[i]\" [title]=\"r3titles[i]\" [urls]=\"r3urls[i]\">\r\n                        </app-box>\r\n                    </div>\r\n\r\n\r\n\r\n                </section>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n            <!-- <button [routerLink] = \"['/home']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n            <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-home\"></span>\r\n            <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n            <div class=\"mat-button-focus-overlay\"></div>\r\n        </button> -->\r\n        </mat-drawer-content>\r\n\r\n        <!-- Dashboard Main Content -->\r\n\r\n\r\n\r\n\r\n\r\n    </mat-drawer-container>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email-automation/email-automation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email-automation/email-automation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>ENESA</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Email classification solution V_3_Final.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n<div style=\"background-color: #2e2e38\">\r\n    <img [@changeDivSize]=currentState src = \"../../assets/EnesaAssetSpec.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n    </div>\r\n\r\n    <div style=\"background-color: #2e2e38\">\r\n        <img  [@changeDivSize]=currentState src = \"../../assets/EnesaBusiness.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n        </div>\r\n\r\n        <div style=\"background-color: #2e2e38\">\r\n            <img  [@changeDivSize]=currentState src = \"../../assets/EnesaSector.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n            </div>\r\n\r\n            <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n                <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n            </button> \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-helpdesk/employee-helpdesk.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-helpdesk/employee-helpdesk.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>Employee Helpdesk</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Employee helpdesk and KPI video.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n        <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n        <div class=\"mat-button-focus-overlay\"></div>\r\n    </button> \r\n    \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"bg\">\r\n    <span class=\"font-white\">Innovation Portal</span>\r\n\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <div class=\"font-white\">\r\n        <span >Administration</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n        <i class=\"material-icons\">home</i> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <i class=\"material-icons\">desktop_windows</i> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <i class=\"material-icons\">photo_library</i> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <i class=\"material-icons\">mail</i> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <i class=\"material-icons\">notifications_none</i> &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n    </div>\r\n    <!-- <i class=\"material-icons\">account_circle</i> -->\r\n    <i class=\"material-icons\">person</i>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden\">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;background-image:url('../../assets/digital.gif');position:fixed;width:100%\" >\r\n        <div [@changeHeader]=currentHeaderState class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\" display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h4 style=\"display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                margin-left: 2%;\r\n                font-size: 164%;\r\n                top: 19%;\r\n                left: 5%;\r\n                position: absolute;\"><b>I</b>ntelligent <b>A</b>utomation as a <b>S</b>ervice</h4>\r\n            </div>\r\n        </div>\r\n\r\n        <div [@changeHeader2]=finalHeaderState class=\"container\" style=\"height:58px;\">\r\n            <div   class=\"row\" style=\"padding:1%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display:inline;width:3%;position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h4 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                font-size: 196%;\r\n                top: 10%;\r\n                left: 6%;\r\n                position: absolute;\"><b>IA</b>aa<b>S</b></h4>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"container2\">\r\n        <div class=\"bg\">\r\n            <div class=\"row\" style = \"padding-bottom:5.2%\" >\r\n                <div class=\"col-md-6\" style=\"padding:4%;margin-top:5%\" [@changeDivSize]=currentState >\r\n                    <!-- <p  style=\"font-size: xx-large;font-family: Arial, Helvetica, sans-serif\">Intelligent Automation as a Service</p>\r\n                    <p>Superior client technologies are needed to keep pace with the rapid speed of innovation across\r\n                        service lines and industry sectors. EY must also maintain the highest standards of information\r\n                        security,\r\n                        brand protection and reliability.\r\n                    </p>\r\n                    <p>The Client Technology Platform (CTP) is EY’s globally scalable, public cloud based platform\r\n                        ecosystem. We designed it to support pursuit teams looking to deliver technology-based solutions\r\n                        to clients\r\n                        such that it supports reuse, multi-tenancy, and scalability to client’s usage needs change.\r\n                    </p>\r\n                    <p>The CTP incorporates automation technologies and industry-leading security practices. All of this\r\n                        provides service lines with an agile, fast-build and secure platform that can deliver better\r\n                        client\r\n                        solutions at a lower cost.\r\n                    </p> -->\r\n                    <img src=\"../../assets/services.PNG\" style=\"width:105%\"/>\r\n                </div>\r\n                <div class=\"col-md-6\"style=\"padding:4%;margin-top:5%\" [@changeDivSize]=currentState>\r\n                    <img src=\"../../assets/bg2.JPG\" width=\"85%\" style=\"margin-left:20%\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Begin Yellow bar with button -->\r\n        <div [@changeDivSize]=currentState style=\"background-color: rgb(255,230,0)\">\r\n            <div style=\"text-align: center;padding-top: 1rem;padding-bottom: 1rem\">\r\n                <button mat-button>Subscribe to our Newsletter!</button>\r\n            </div>\r\n        </div>\r\n        <!-- End of Yellow bar with button -->\r\n\r\n        <!-- Begin Our value propositio​n​ -->\r\n        <!-- <div class=\"bg\" style=\"text-align: center\">\r\n            <div style=\"padding-top: 2rem; padding-bottom:2rem\">\r\n                <p style=\"font-size: x-large; color: yellow;\"> Our value propositio​n​</p>\r\n                <p>With the EY Client Technology Platform, EY brings its brightest minds together\r\n                    with leading technologies such as robotic process automation (RPA) and\r\n                    analytics – to solve your business problems.\r\n                </p>\r\n                <p>\r\n                    The platform provides a globally accessible infrastructure, platform services, applications and\r\n                    related capabilities.\r\n                    These features serve as flexible and scalable building blocks to meet the evolving business need for\r\n                    digital solutions.\r\n                </p>\r\n            </div>\r\n        </div> -->\r\n        <!-- End of Our value propositio​n​ -->\r\n    </div>\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border-radius: 21px;border:1px solid black\" _ngcontent-wbk-c22=\"\" color=\"primary\" mat-raised-button=\"\" class=\"mat-raised-button mat-primary\"><span class=\"mat-button-wrapper\">Explore Assets</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100vh;background-color:rgb(55, 73, 100)\">\n   \n    \n       <div style=\"width: 59%;\n       height: 77%;\n       background-color:rgb(55, 73, 100);\n       position: absolute;\n       top:0;\n       bottom: 0;\n       left: 0;\n       right: 0;\n       margin: auto;\">\n    <div class = \"row\" style=\"width:100%;height:100%;margin-left:0px;margin-right:0px\"> \n        <div class = \"col-md-6  col-sm-6 col-xs-6\" style=\"top:31%\">\n\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\n                width: 19%;\n                position: absolute;\n                top: 2%;\n                left: 1%;\"/>\n                <p style=\"    top: 31px;\n                position: relative;\n                font-size: 26px;\n                left: 71px;\n                color: white;\n                font-weight: bold;\">Innovation Portal</p>\n        </div>\n        <div class = \"col-md-6 col-sm-6 col-xs-6\" style=\"border-left: 3px solid white;\n        height: 100%;\">\n<div style=\"top: 16%;\nposition: relative;\nleft:24%\">\n\n<img src=\"../../assets/login_grey.jpg\" style=\"\nwidth: 15%;\nposition: relative;\ntop: -21px;\nleft: 42%;\"/>\n\n       <form class=\"example-form\">\n\n            <mat-form-field class=\"example-full-width\">\n              <input style=\"color:white\" matInput placeholder = \"Username\">\n            </mat-form-field>\n            <br>\n            <br>\n            <mat-form-field class=\"example-full-width\">\n                    <input style=\"color:white\" matInput placeholder = \"Password\" type = \"password\" >\n                  </mat-form-field>\n\n          </form>\n\n          <button style=\"left:38%\" [routerLink] = \"['/dashboard']\"_ngcontent-oeo-c21=\"\" mat-raised-button=\"\" class=\"mat-raised-button mat-button-base\"><span class=\"mat-button-wrapper\">Login</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>\n          \n        </div>\n    </div>\n    </div>  \n    </div>\n\n    \n   \n\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mh1\" style=\"padding-top: 5px \">\r\n        <button mat-stroked-button style=\"background-color: orange; color: white\">\r\n                <mat-icon class=\"pr1\">phone</mat-icon> Studio\r\n        </button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button mat-stroked-button style=\"background-color: cadetblue;color: white\">\r\n                <mat-icon class=\"pr1\">mood</mat-icon> Workbench\r\n        </button>\r\n\r\n        <div style=\"width:100%;height:45px;border-radius: 25px;background-color:rgb(55, 73, 100);margin-top:7%\">\r\n        \r\n                        <span style=\"    font-size: 27px;\r\n                        color: white;\r\n                        margin-left: 8%;\r\n                        margin-top: 3%;\"class=\"glyphicon glyphicon-user\">\r\n                        \r\n                     \r\n                </span>\r\n\r\n                <div style=\"display: inline;\r\n                margin-left: 5%;\r\n                margin-top: 8px;\r\n                position: absolute;\r\n                font-size: 20px;\r\n                color: white;\">Admin</div>\r\n                <!-- <br>\r\n                <br>\r\n                <br> -->\r\n<!-- <button mat-stroked-button style=\"background-color: #B23121; color: white;margin-left:3%;border-radius:20px\">\r\n                <mat-icon class=\"pr1\">email</mat-icon> E-Mail\r\n        </button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button mat-stroked-button style=\"background-color: #4875B4;color: white;border-radius:20px\">\r\n                <mat-icon class=\"pr1\">mood</mat-icon> LinkedIn\r\n        </button> -->\r\n\r\n\r\n        \r\n        </div>\r\n\r\n        <div style=\"margin-top:10%\">\r\n                <mat-chip-list aria-label=\"Fish selection\">\r\n                        <mat-chip  >NLP</mat-chip>\r\n                        <mat-chip  >Risk</mat-chip>\r\n                        <mat-chip  >K-means</mat-chip>\r\n                </mat-chip-list>\r\n                <mat-chip-list aria-label=\"Fish selection\">\r\n                                <mat-chip  >Sales</mat-chip>\r\n                                <mat-chip  >Cybersecurity</mat-chip>\r\n                        </mat-chip-list>\r\n                        <mat-chip-list aria-label=\"Fish selection\">\r\n                                        <mat-chip  >Industrial</mat-chip>\r\n                                        <mat-chip  >Chat Bot</mat-chip>\r\n                                </mat-chip-list>\r\n                                <mat-chip-list aria-label=\"Fish selection\">\r\n                                                <mat-chip  >Security</mat-chip>\r\n                                                <mat-chip  >Medical</mat-chip>\r\n                                                <mat-chip  >Sales</mat-chip>\r\n                                        </mat-chip-list>\r\n        </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ssl-asset/ssl-asset.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ssl-asset/ssl-asset.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>SSL Extraction</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/SSI Solution.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n        <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n        <div class=\"mat-button-focus-overlay\"></div>\r\n    </button> \r\n    \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/Modules/box/box.component.css":
/*!***********************************************!*\
  !*** ./src/app/Modules/box/box.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n    border-radius: 5px;\r\n    border: 0.5px solid #f5f5f5;\r\n    padding: 4%; \r\n    width: 95%;\r\n    height: 200px;\r\n    background-color: white;    \r\n    border-left-color:#013a8f;\r\n    border-left-width: 2px;\r\n    border-bottom-color:#adadad;\r\n    border-bottom-width: 1.5px\r\n  }\r\n  p{\r\n    /* color: white */\r\n}\r\n  .shadow\r\n{\r\n    box-shadow: 5px 05px 5px 5px #bbbbbb;\r\n    \r\n}\r\n  .showMore {\r\n    color:steelblue;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9ib3gvYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQjtFQUNGO0VBQ0E7SUFDRSxpQkFBaUI7QUFDckI7RUFHQTs7SUFFSSxvQ0FBb0M7O0FBRXhDO0VBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9ib3gvYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDQlOyBcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgIFxyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IzAxM2E4ZjtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiNhZGFkYWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxLjVweFxyXG4gIH1cclxuICBwe1xyXG4gICAgLyogY29sb3I6IHdoaXRlICovXHJcbn1cclxuXHJcblxyXG4uc2hhZG93XHJcbntcclxuICAgIGJveC1zaGFkb3c6IDVweCAwNXB4IDVweCA1cHggI2JiYmJiYjtcclxuICAgIFxyXG59XHJcblxyXG4uc2hvd01vcmUge1xyXG4gICAgY29sb3I6c3RlZWxibHVlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modules/box/box.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Modules/box/box.component.ts ***!
  \**********************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BoxComponent = class BoxComponent {
    constructor(router) {
        this.router = router;
        this.limit = 35;
        this.truncating = true;
        this.currentState = 'initial';
        this.elevation = "";
        this.transition();
    }
    transition() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
    ;
    changeStyle($event) {
        this.elevation = $event.type == 'mouseover' ? 'shadow' : '';
    }
    goToAssetDetails() {
        console.log("The URLS are", this.urls);
        if (this.urls != "") {
            this.router.navigate([this.urls]);
        }
    }
};
BoxComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "Data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "urls", void 0);
BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-box',
        template: __webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/index.js!./src/app/Modules/box/box.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ])
        ],
        styles: [__webpack_require__(/*! ./box.component.css */ "./src/app/Modules/box/box.component.css")]
    })
], BoxComponent);



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../email-automation/email-automation.component */ "./src/app/email-automation/email-automation.component.ts");
/* harmony import */ var _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ssl-asset/ssl-asset.component */ "./src/app/ssl-asset/ssl-asset.component.ts");
/* harmony import */ var _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employee-helpdesk/employee-helpdesk.component */ "./src/app/employee-helpdesk/employee-helpdesk.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");










const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: "asset/:id", component: _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__["AssetDetailsComponent"] },
    { path: "enesa", component: _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_6__["EmailAutomationComponent"] },
    { path: "ssl", component: _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_7__["SslAssetComponent"] },
    { path: "employeeHelpdesk", component: _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeHelpdeskComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'UI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm2015/mat-video.js");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm2015/yellowspot-ng-truncate.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm2015/ngx-drag-scroll.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _Modules_box_box_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Modules/box/box.component */ "./src/app/Modules/box/box.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./email-automation/email-automation.component */ "./src/app/email-automation/email-automation.component.ts");
/* harmony import */ var _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ssl-asset/ssl-asset.component */ "./src/app/ssl-asset/ssl-asset.component.ts");
/* harmony import */ var _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./employee-helpdesk/employee-helpdesk.component */ "./src/app/employee-helpdesk/employee-helpdesk.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






// import { slick } from 'angular-slick'























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
            _Modules_box_box_component__WEBPACK_IMPORTED_MODULE_23__["BoxComponent"],
            _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_24__["AssetDetailsComponent"],
            _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_25__["EmailAutomationComponent"],
            _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_26__["SslAssetComponent"],
            _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_27__["EmployeeHelpdeskComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_5__["TruncateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            mat_video__WEBPACK_IMPORTED_MODULE_4__["MatVideoModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_13__["DragScrollModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_18__["JwSocialButtonsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/asset-details/asset-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5oNCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDMge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgyIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmXHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIye1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0gKi9cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMzhcclxufVxyXG4ucHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/asset-details/asset-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AssetDetailsComponent = class AssetDetailsComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.currentState = 'initial';
    }
    ngOnInit() {
        this.title = this.activatedRoute.snapshot.paramMap.get('id');
        this.changeState();
    }
    changeState() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
};
AssetDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AssetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asset-details',
        template: __webpack_require__(/*! raw-loader!./asset-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/asset-details/asset-details.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ])
        ],
        styles: [__webpack_require__(/*! ./asset-details.component.css */ "./src/app/asset-details/asset-details.component.css")]
    })
], AssetDetailsComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background-color: rgb(75, 75, 75);\r\n}\r\n\r\n/* .box {\r\n    border-radius: 25px;\r\n    border: 2px solid #000000;\r\n    padding: 20px; \r\n    width: 86%;\r\n    height: 86%; \r\n  } */\r\n\r\np{\r\n    color: white\r\n}\r\n\r\nmat-grid-tile{\r\n    padding: 2rem\r\n}\r\n\r\n:host ::ng-deep .mat-drawer-inner-container\r\n{\r\n    overflow: hidden !important;\r\n}\r\n\r\n.card1 {\r\n    min-width: 100%;\r\n    min-height: 200px;\r\n    display: flex;\r\n    overflow-x: auto;\r\n  }\r\n\r\n.card--content {\r\n    min-width: 350px;\r\n    margin: 5px;\r\n    overflow-y:hidden\r\n  }\r\n\r\n.card1::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n.search {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.fillSpace {\r\n    flex: 0 1 auto;\r\n  }\r\n\r\n.bottomLine{\r\n    border-bottom-color:#858688;\r\n    border-bottom-width: 1px\r\n   }\r\n\r\n.header-style{\r\n    font-weight: bold;\r\n    margin-left: 0.8%;\r\n  }\r\n\r\n.m5{\r\n    margin-left:5% !important\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBOzs7Ozs7S0FNSzs7QUFFTDtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7RUFDRjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFDQTtJQUNFLDJCQUEyQjtJQUMzQjtHQUNEOztBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbn1cclxuXHJcbi8qIC5ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgICBoZWlnaHQ6IDg2JTsgXHJcbiAgfSAqL1xyXG5cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbm1hdC1ncmlkLXRpbGV7XHJcbiAgICBwYWRkaW5nOiAycmVtXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXJcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZDEge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkLS1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuXHJcbiAgfVxyXG4gIC5jYXJkMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5maWxsU3BhY2Uge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgfVxyXG4gIC5ib3R0b21MaW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojODU4Njg4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4XHJcbiAgIH1cclxuICAuaGVhZGVyLXN0eWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC44JTtcclxuICB9XHJcblxyXG4gIC5tNXtcclxuICAgIG1hcmdpbi1sZWZ0OjUlICFpbXBvcnRhbnRcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.images = ["Group2_1.png", "Group2_2.png", "Group2_3.png", "Group2_4.png", "Group2_5.png",
            "Group2_6.png", "Group2_7.png", "Group2_8.png", "Group2_9.png", "Group2_10.png"
        ];
        this.titles = ["KYC (Pol & Biometrics)", "ENESA",
            "SSI Extraction", "Vendor On-Boarding and Helpdesk",
            "KPI Dashboard", "Employee Helpdesk",
            "Customized Alert", "Invoice & PO Processing",
            "Contract Digitization", "Employee Satisfaction Survey"
        ];
        this.urls = ['asset/KYC (Pol & Biometrics)', 'enesa', 'ssl', 'asset/Vendor On-Boarding and Helpdesk', 'asset/KPI Dashboard', 'employeeHelpdesk', '', 'asset/Invoice & PO Processing', 'asset/Contract Digitization', ''];
        this.KYC = `EY’s KYC digitization solution reliably extracts information from scanned images 
  of proof of identity (PoI) documents such as passport, PAN, national ID cards etc. with minimal 
  training effort. `;
        this.ENESA = `ENESA is a unique solution build by EY which uses Natural Language Processing (NLP) to interpret 
  the query, which is then automatically classified, tagged and allocated in a BPM/Ticketing system. 
  ENESA sends acknowledgement, filters spam and auto resolves cases that doesn’t require human judgement.`;
        this.SSI_Extraction = `EY has built a customisable solution which can be 
  leveraged to extract tabular information efficiently from different document formats automatically 
  henceforth reducing processing time and saving manual effort.`;
        this.VendorOn_Boarding = `EY’s vendor onboarding and helpdesk bot helps the vendors receive quick support and immediate 
  responses to their queries during onboarding and afterwards directly on Kaizala.`;
        this.KPI_Dashboard = `EY’s KPI dashboarding solution provides instant access to the team to their KPIs and dashboards on the Kaizala app. Management 
  dashboards may also be viewed directly on the app, restricting user access as per requirement.`;
        this.Employee_Helpdesk = `Quick answers for all employee queries on the go – using EY’s employee 
  helpdesk solution, the employees get immediate responses to their queries on Kaizala app.`;
        this.Customized_Alert = `Have periodic updates that need to be sent out to your team? Using EY’s 
  customized alert bot, such updates can be automatically sent to the employees on Kaizala.`;
        this.Invoice = `EY has developed a customized solution involving digitization tools and RPA to 
  process these documents and enter the details in the ERP systems thus reducing manual effort, processing 
  time, error and increasing efficiency.`;
        this.ContractDigitization = `EY has build this solution which 
  helps to extract most commonly used information from the contracts automatically thereby significantly reducing 
  the cost and improving efficiency.`;
        this.Survey = `EY’s employee satisfaction survey solution on Kaizala provides a single platform to roll out the 
  survey, engage employees, receive their responses, and provide relevant insights over it using any BI tool. `;
        this.data = [this.KYC, this.ENESA, this.SSI_Extraction, this.VendorOn_Boarding,
            this.KPI_Dashboard, this.Employee_Helpdesk, this.Customized_Alert,
            this.Invoice, this.ContractDigitization, this.Survey
        ];
        this.industry = "";
        this.function = "";
        this.industries = ['BFSI', 'Telecom', 'Retail', 'Information Technology', 'Healthcare'];
        this.functions = ['Operations', 'Marketing & Sales', 'Finance', 'Human Resources', 'Information technology', 'Supply Chain', 'Legal'];
        this.arraySpliter(this.data, this.images, this.titles, this.urls);
    }
    ngOnInit() {
    }
    arraySpliter(arr, arr1, arr2, arr3) {
        this.r1data = [];
        this.r2data = [];
        this.r3data = [];
        this.r1images = [];
        this.r2images = [];
        this.r3images = [];
        this.r1titles = [];
        this.r2titles = [];
        this.r3titles = [];
        this.r1urls = [];
        this.r2urls = [];
        this.r3urls = [];
        if (arr.length > 7) {
            this.r1data = arr.slice(0, 4);
            this.r2data = arr.slice(4, 8);
            this.r3data = arr.slice(0, arr.length); // @Dibin : change this 0 to 8 for previous version
            this.r1images = arr1.slice(0, 4);
            this.r2images = arr1.slice(4, 8);
            this.r3images = arr1.slice(0, arr.length);
            this.r1titles = arr2.slice(0, 4);
            this.r2titles = arr2.slice(4, 8);
            this.r3titles = arr2.slice(0, arr.length);
            this.r1urls = arr3.slice(0, 4);
            this.r2urls = arr3.slice(4, 8);
            this.r3urls = arr3.slice(0, arr.length);
        }
        else if (arr.length == 7 || (arr.length < 7 && arr.length >= 4)) {
            this.r1data = arr.slice(0, 4);
            this.r2data = arr.slice(4, arr.length);
            this.r1images = arr1.slice(0, 4);
            this.r2images = arr1.slice(4, arr.length);
            this.r1titles = arr2.slice(0, 4);
            this.r2titles = arr2.slice(4, arr.length);
            this.r1urls = arr3.slice(0, 4);
            this.r2urls = arr3.slice(4, arr.length);
        }
        else if (arr.length == 3 || (arr.length < 3 && arr.length >= 0)) {
            this.r1data = arr.slice(0, arr.length);
            this.r1images = arr1.slice(0, arr.length);
            this.r1titles = arr2.slice(0, arr.length);
            this.r1urls = arr3.slice(0, arr.length);
        }
    }
    elementRemover(data, images, titles, urls, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            data[index] = undefined;
            images[index] = undefined;
            titles[index] = undefined;
            urls[index] = undefined;
        });
    }
    getClickInfo(Value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.industry = "";
            this.function = "";
            this.group1ClickInfo = Value.Group1;
            this.group2ClickInfo = Value.Group2;
            let visibleData = [...this.data];
            let visibleImages = [...this.images];
            let visibleTitles = [...this.titles];
            let visibleUrls = [...this.urls];
            switch (this.group1ClickInfo) {
                case 1: {
                    this.industry = this.industries[0];
                    break;
                }
                case 2: {
                    this.industry = this.industries[1];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    break;
                }
                case 3: {
                    this.industry = this.industries[2];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    break;
                }
                case 4: {
                    this.industry = this.industries[3];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    break;
                }
                case 5: {
                    this.industry = this.industries[4];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    break;
                }
            }
            switch (this.group2ClickInfo) {
                case 1: {
                    this.function = this.functions[0];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
                case 2: {
                    this.function = this.functions[1];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
                case 3: {
                    this.function = this.functions[2];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
                case 4: {
                    this.function = this.functions[3];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    break;
                }
                case 5: {
                    this.function = this.functions[4];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
                case 6: {
                    this.function = this.functions[5];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
                case 7: {
                    this.function = this.functions[6];
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8);
                    yield this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9);
                    break;
                }
            }
            if (this.industry != "" && this.function != "")
                this.industry += " - ";
            visibleData = visibleData.filter(function (el) {
                return el != undefined;
            });
            visibleImages = visibleImages.filter(function (el) {
                return el != undefined;
            });
            visibleTitles = visibleTitles.filter(function (el) {
                return el != undefined;
            });
            visibleUrls = visibleUrls.filter(function (el) {
                return el != undefined;
            });
            this.arraySpliter(visibleData, visibleImages, visibleTitles, visibleUrls);
        });
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/email-automation/email-automation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/email-automation/email-automation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtYXV0b21hdGlvbi9lbWFpbC1hdXRvbWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW1haWwtYXV0b21hdGlvbi9lbWFpbC1hdXRvbWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5oNCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDMge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgyIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmXHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIye1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0gKi9cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMzhcclxufVxyXG4ucHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/email-automation/email-automation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/email-automation/email-automation.component.ts ***!
  \****************************************************************/
/*! exports provided: EmailAutomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAutomationComponent", function() { return EmailAutomationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let EmailAutomationComponent = class EmailAutomationComponent {
    constructor() {
        this.currentState = 'initial';
    }
    ngOnInit() {
        this.changeState();
    }
    changeState() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
};
EmailAutomationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-automation',
        template: __webpack_require__(/*! raw-loader!./email-automation.component.html */ "./node_modules/raw-loader/index.js!./src/app/email-automation/email-automation.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ])
        ],
        styles: [__webpack_require__(/*! ./email-automation.component.css */ "./src/app/email-automation/email-automation.component.css")]
    })
], EmailAutomationComponent);



/***/ }),

/***/ "./src/app/employee-helpdesk/employee-helpdesk.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-helpdesk/employee-helpdesk.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtaGVscGRlc2svZW1wbG95ZWUtaGVscGRlc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFFQTs7O0dBR0c7QUFFSDtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1oZWxwZGVzay9lbXBsb3llZS1oZWxwZGVzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuaDQge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgzIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMiB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjZmZmZlxyXG59XHJcblxyXG4vKiAuY29udGFpbmVyMntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59ICovXHJcblxyXG4uYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTM4XHJcbn1cclxuLnB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/employee-helpdesk/employee-helpdesk.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-helpdesk/employee-helpdesk.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeHelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeHelpdeskComponent", function() { return EmployeeHelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let EmployeeHelpdeskComponent = class EmployeeHelpdeskComponent {
    constructor() {
        this.currentState = 'initial';
    }
    ngOnInit() {
        this.changeState();
    }
    changeState() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
};
EmployeeHelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-helpdesk',
        template: __webpack_require__(/*! raw-loader!./employee-helpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-helpdesk/employee-helpdesk.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ])
        ],
        styles: [__webpack_require__(/*! ./employee-helpdesk.component.css */ "./src/app/employee-helpdesk/employee-helpdesk.component.css")]
    })
], EmployeeHelpdeskComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n.bg {\r\n  background-color: rgb(55, 73, 100)\r\n}\r\n.font-white {\r\n  color: aliceblue\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA3MywgMTAwKVxyXG59XHJcbi5mb250LXdoaXRlIHtcclxuICBjb2xvcjogYWxpY2VibHVlXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: #2e2e38\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbmg0IHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDIge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogI2ZmZmZcclxufVxyXG5cclxuLyogLmNvbnRhaW5lcjJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSAqL1xyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbi5we1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let HomeComponent = class HomeComponent {
    constructor() {
        this.currentState = 'initial';
        this.currentHeaderState = 'initial';
        this.finalHeaderState = 'final';
        this.firstHeader = true;
        this.secondHeader = false;
    }
    ngOnInit() {
        this.changeState();
    }
    changeState() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
    onWindowScroll($event) {
        if (window.pageYOffset == 0) {
            this.currentHeaderState = 'initial';
            this.finalHeaderState = 'final';
            this.firstHeader = true;
            this.secondHeader = false;
        }
        else {
            this.currentHeaderState = 'final';
            this.finalHeaderState = 'initial';
            this.firstHeader = false;
            this.secondHeader = true;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], HomeComponent.prototype, "onWindowScroll", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeHeader', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeHeader2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in'))
            ])
        ],
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vl {\r\n    border-left: 6px solid green;\r\n    height: 500px;\r\n  }\r\n\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: white\r\n}\r\n/* button{\r\n    color: white\r\n} */\r\n.box {\r\n    border-radius: 25px;\r\n    border: 2px solid #000000;\r\n    /* padding: 20px;  */\r\n    /* width: 80%;\r\n    height: 80%;  */\r\n  }\r\nh4{\r\n    text-align: center;\r\n    color: rgb(255,230,0)\r\n}\r\n.btn-default {\r\n    color: white;\r\n    background-color: rgb(75, 75, 75);\r\n  }\r\n.btn-change {\r\n    color: rgb(255,230,0);\r\n  }\r\n.mb2{\r\n      margin-bottom: 2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBOztHQUVHO0FBRUg7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQjttQkFDZTtFQUNqQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7RUFDbkM7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbi8qIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59ICovXHJcblxyXG4uYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgICovXHJcbiAgICAvKiB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7ICAqL1xyXG4gIH1cclxuaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwyMzAsMClcclxufVxyXG5cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tY2hhbmdlIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LDIzMCwwKTtcclxuICB9XHJcblxyXG4gIC5tYjJ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.key1 = 'INDUSTRIES';
        this.key2 = 'BUSINESS FUNCTIONS';
    }
    ngOnInit() {
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/ssl-asset/ssl-asset.component.css":
/*!***************************************************!*\
  !*** ./src/app/ssl-asset/ssl-asset.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NsLWFzc2V0L3NzbC1hc3NldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7QUFDSjtBQUVBOzs7R0FHRztBQUVIO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NzbC1hc3NldC9zc2wtYXNzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcbmg0IHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDIge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogI2ZmZmZcclxufVxyXG5cclxuLyogLmNvbnRhaW5lcjJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSAqL1xyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbi5we1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ssl-asset/ssl-asset.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ssl-asset/ssl-asset.component.ts ***!
  \**************************************************/
/*! exports provided: SslAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SslAssetComponent", function() { return SslAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let SslAssetComponent = class SslAssetComponent {
    constructor() {
        this.currentState = 'initial';
    }
    ngOnInit() {
        this.changeState();
    }
    changeState() {
        setTimeout(() => {
            this.currentState = 'final';
        }, 100);
    }
};
SslAssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ssl-asset',
        template: __webpack_require__(/*! raw-loader!./ssl-asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/ssl-asset/ssl-asset.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "0",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: "1",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
            ])
        ],
        styles: [__webpack_require__(/*! ./ssl-asset.component.css */ "./src/app/ssl-asset/ssl-asset.component.css")]
    })
], SslAssetComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dibin.Joseph\Desktop\IAaaS\IAaaS_V2\Code_Base\Assets-and-Solutions-Library\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map