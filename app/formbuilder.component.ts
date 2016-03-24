import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {LoginValidator} from "./login.validator";
import {PasswordValidator} from "./password.validator";

/**
 * Form samples
 * Using form builder results in cleaner
 */
@Component({
    selector: "control-group",
    templateUrl: "app/formbuilder.template.html",
})
export class FormBuilderComponent {
  private title: string = "Simple form with Form Builder";
  public form: ControlGroup;

   constructor (formBuilder: FormBuilder) {
     // Array with properties for each field:
     // default value and validator function
     this.form = formBuilder.group({
       login: ["", Validators.compose([
                                      Validators.required,
                                      LoginValidator.cannotContainInvalidCharacters
              ])],
       password: ["", Validators.required],
       password2: ["", Validators.compose([
                                      Validators.required,
                                      PasswordValidator.mustBeTheSame()
              ])]
     });

   }
    public login () {
       console.log("Sending form");
        console.log(this.form.value);
    }

}
