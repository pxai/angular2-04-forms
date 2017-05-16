import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {LoginValidator} from "./login.validator";


/**
 * Form samples
 * Using form builder results in cleaner
 */
@Component({
    selector: "control-group",
    templateUrl: "app/onsubmitvalidation.template.html",
})
export class OnSubmitValidationComponent {
  private title: string = "Simple form with OnSubmit Validation";
  public form: FormGroup;

   constructor (formBuilder: FormBuilder) {
     // Array with properties for each field:
     // default value and validator function
     this.form = formBuilder.group({
       login: ["", Validators.compose([
                                      Validators.required,
                                      LoginValidator.cannotContainInvalidCharacters
              ])],
       password: ["", Validators.required],
       password2: ["", Validators.required]
     });

   }
    public signup () {
      // For login with a server side check using a service
      // var result = signUpService.checkLogin(this.form.value);
      /*
        if (result) {
        this.form.find('login').setErrors({
          loginExists: true;
        });
      }
      */
      if (this.form.get("login").value === "admin" ) {
        this.form.get("login").setErrors({
          loginExists: true
        });
      }
      if (this.form.get("password").value !== this.form.get("password2").value)
      this.form.get("password2").setErrors({
        passwordsDoNotMatch: true
      });
       console.log("Sending form");
        console.log(this.form.value);
    }

}
