import {Component} from "angular2/core";
import {Control, ControlGroup, Validators} from "angular2/common";
/**
 * Form samples
 * With this one we just check on console
 * the value of a form control.
 * There is no binding with the class
 */
@Component({
    selector: "control-group",
    templateUrl: "app/controlgroup.template.html",
})
export class ControlGroupComponent {
  private title: string = "Simple form Control Group Sample";
  public form: ControlGroup;
   constructor () {
     // Model Driven Forms
     // if we use only templates: Template Driven Forms
     this.form = new ControlGroup({
        // default value, validator
        login: new Control("", Validators.required),
        password: new Control("", Validators.required)
     });
   }
    public login () {
       console.log("Sending form");
        console.log(this.form.value);
    }

}
