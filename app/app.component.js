System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {AppComponent} from './app.button'
            /**
             * class binding
             * CSS binding
             * events binding
             * manual 2way binding
             * angular2 2 way binding
             */
            // Different kinds of interpolation
            // Notice textContent is a dom element
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Binding samples';
                    this.topicText = 'Some samples for binding';
                    this.isActive = true;
                    this.buttonTitle = '';
                    this.otherTitle = 'Two way binding';
                    this.yetAnotherBind = 'yet another two way binding';
                    this.heartOn = false;
                }
                AppComponent.prototype.toggleCss = function () {
                    this.isActive = !this.isActive;
                };
                AppComponent.prototype.toggleCssEvent = function ($event) {
                    // Prevent Bubbling, in case that we are insie other element
                    // expecting clic
                    $event.stopPropagation();
                    this.isActive = !this.isActive;
                };
                AppComponent.prototype.clearTitle = function ($event) {
                    $event.preventDefault();
                    this.buttonTitle = '';
                };
                AppComponent.prototype.heartBeat = function () {
                    this.heartOn = !this.heartOn;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bindings-app',
                        template: "<section>\n                <h1>{{title}}</h1>\n                <p [textContent]='topicText'></p>\n                <div><button class=\"btn btn-primary\" [class.active]=\"isActive\">Do something</button></div>\n                <div><button class=\"btn btn-primary\" \n                    [style.backgroundColor]=\"isActive ? 'green' : 'grey'\">CSS binding</button>\n\n                </div>\n                <div><button (click)=\"toggleCss()\">Toggle</button></div>\n                <div><button on-click=\"toggleCssEvent($event)\">Toggle</button></div>\n                <div>\n                    <input type=\"text\" [value]=\"buttonTitle\" (input)=\"buttonTitle = $event.target.value\" />\n                    <a href='' (click)=\"clearTitle($event)\">Clear</a>\n                    <b>{{buttonTitle}}</b>\n                </div>\n                <div>\n                    <input type=\"text\" [(ngModel)]=\"otherTitle\" />\n                    <i>{{otherTitle}}</i>\n                </div>\n                <div>\n                    <input type=\"text\" bindon-ngModel=\"yetAnotherBind\" />\n                    <i>{{yetAnotherBind}}</i>\n                </div>\n                <div>\n                    <h3><i class=\"glyphicon\"\n                       [class.glyphicon-heart-empty] = \"!heartOn\"\n                       [class.glyphicon-heart] = \"heartOn\"\n                       [style.color] = \"heartOn ? 'red' : 'none' \"\n                       (click)=\"heartBeat()\">\n                    </i> Beat Me!</h3>\n                </div>\n               </section>\n            "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map