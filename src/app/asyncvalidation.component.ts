import {Component} from '@angular/core';
import { FormControl , FormGroup, Validators, FormBuilder } from "@angular/forms";
import {LoginValidator} from "./login.validator";
import {PasswordValidator} from "./password.validator";

/**
 * Form samples
 * Using form builder results in cleaner
 */
@Component({
    selector: "control-group",
    templateUrl: "app/asyncvalidation.template.html",
})
export class AsyncValidationComponent {
  private title: string = "Simple form with Async Validation";
  public form: FormGroup;

   constructor (formBuilder: FormBuilder) {
     // Array with properties for each field:
     // default value and validator function
     this.form = formBuilder.group({
       login: ["", Validators.compose([
                                      Validators.required,
                                      LoginValidator.cannotContainInvalidCharacters
              ])],
       password: ["", Validators.required, PasswordValidator.shouldNotBeTypical],
       password2: ["", Validators.required]
     });

   }
    public login () {
       console.log("Sending form");
        console.log(this.form.value);
    }

}
