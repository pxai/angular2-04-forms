import {FormControl} from "@angular/forms";


export class LoginValidator {
  //
  // Validation is ok: null
  // Validation fails: return {validationRule: value}
  static cannotContainInvalidCharacters (control: FormControl) {
    if (control.value.indexOf("-") >= 0) {
      return { cannotContainHyphen: true };
    }
    return null;
  }
}
