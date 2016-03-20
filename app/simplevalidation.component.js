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
    var SimpleValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Form simple validation
             * This form makes some simple validation
             */
            SimpleValidationComponent = (function () {
                function SimpleValidationComponent() {
                    this.title = 'Simple form with validation - Sign Up';
                }
                SimpleValidationComponent.prototype.formChanged = function (field) {
                    console.log(field);
                };
                SimpleValidationComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-validation',
                        template: "<div>\n                {{title}}\n                <form >\n                    <div class=\"form-group\">\n                        <label for=\"login\">Login</label>\n                        <input type=\"text\" \n                            ngControl=\"login\" \n                            #login=\"ngForm\" \n                            (change)=\"formChanged(login)\" \n                            id=\"login\"\n                            required \n                            class=\"form-control\" />\n                            <div *ngIf=\"login.touched && !login.valid\" class=\"alert alert-warning\">\n                                Username is required\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" \n                            ngControl=\"email\" \n                            #email=\"ngForm\" \n                            (change)=\"formChanged(email)\" \n                            id=\"email\" \n                            required\n                            class=\"form-control\" />\n                            <div *ngIf=\"email.touched && !email.valid\" class=\"alert alert-warning\">\n                                Email is required\n                            </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n                </form>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleValidationComponent);
                return SimpleValidationComponent;
            }());
            exports_1("SimpleValidationComponent", SimpleValidationComponent);
        }
    }
});
//# sourceMappingURL=simplevalidation.component.js.map