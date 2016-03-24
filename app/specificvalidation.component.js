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
    var SpecificValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Form simple validation
             * This form makes some simple validation
             * with different kinds of validations
             */
            SpecificValidationComponent = (function () {
                function SpecificValidationComponent() {
                    this.title = 'Specific validation - Change password';
                }
                SpecificValidationComponent.prototype.formChanged = function (field) {
                    console.log(field);
                };
                SpecificValidationComponent = __decorate([
                    core_1.Component({
                        selector: 'specific-validation',
                        template: "<div>\n                {{title}}\n                <form >\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"text\"\n                            ngControl=\"password\"\n                            #password=\"ngForm\"\n                            (change)=\"formChanged(password)\"\n                            id=\"password\"\n                            required\n                            minlength=\"8\"\n                            class=\"form-control\" />\n                            <div *ngIf=\"password.touched && !password.valid\">\n                              <div *ngIf=\"password.errors.required\" class=\"alert alert-warning\">\n                                  password is required\n                              </div>\n                              <div *ngIf=\"password.errors.minlength\" class=\"alert alert-warning\">\n                                  password minglength is {{password.errors.minlength.requiredLength}}\n                              </div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password2\">Reenter password</label>\n                        <input type=\"password\"\n                            ngControl=\"password2\"\n                            #password2=\"ngForm\"\n                            (change)=\"formChanged(password2)\"\n                            id=\"password2\"\n                            required\n                            minlength=\"8\"\n                            class=\"form-control\" />\n                            <div *ngIf=\"password2.touched && !password2.valid\">\n                              <div *ngIf=\"password2.errors.required\" class=\"alert alert-warning\">\n                                  password2 is required\n                              </div>\n                              <div *ngIf=\"password2.errors.minlength\" class=\"alert alert-warning\">\n                                  password2 minglength is {{password2.errors.minlength.requiredLength}}\n                              </div>\n                              <div *ngIf=\"password2 != password\" class=\"alert alert-warning\">\n                                  passwords are different!\n                              </div>\n                            </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n                </form>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SpecificValidationComponent);
                return SpecificValidationComponent;
            }());
            exports_1("SpecificValidationComponent", SpecificValidationComponent);
        }
    }
});
//# sourceMappingURL=specificvalidation.component.js.map