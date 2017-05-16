import {Component} from "@angular/core";
import {FormControl , FormGroup , Validators} from "@angular/forms";
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
  public form: FormGroup;
   constructor () {
     // Model Driven Forms
     // if we use only templates: Template Driven Forms
     this.form = new FormGroup({
        // default value, validator
        login: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
     });
   }
    public login () {
       console.log("Sending form");
        console.log(this.form.value);
    }

}
