System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ControlGroupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            /**
             * Form samples
             * With this one we just check on console
             * the value of a form control.
             * There is no binding with the class
             */
            ControlGroupComponent = (function () {
                function ControlGroupComponent() {
                    this.title = "Simple form Control Group Sample";
                    // Model Driven Forms
                    // if we use only templates: Template Driven Forms
                    this.form = new common_1.ControlGroup({
                        // default value, validator
                        login: new common_1.Control("", common_1.Validators.required),
                        password: new common_1.Control("", common_1.Validators.required)
                    });
                }
                ControlGroupComponent.prototype.login = function () {
                    console.log("Sending form");
                    console.log(this.form.value);
                };
                ControlGroupComponent = __decorate([
                    core_1.Component({
                        selector: "control-group",
                        templateUrl: "app/controlgroup.template.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ControlGroupComponent);
                return ControlGroupComponent;
            }());
            exports_1("ControlGroupComponent", ControlGroupComponent);
        }
    }
});
//# sourceMappingURL=controlgroup.component.js.map