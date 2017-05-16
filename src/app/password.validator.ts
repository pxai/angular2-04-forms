import {FormControl} from "@angular/forms";


export class PasswordValidator {

  static shouldNotBeTypical (control: FormControl) {
    // We are using a Promise
    // executor (resolve, reject) => void
    // instead or sending a value, we use resolve
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (control.value == "1234") {
          resolve({shouldNotBeTypical: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static  mustBeTheSame (control: FormControl) {
    console.log("See whhat happens");
    console.log(control);
    if (1 === 1) {
      return null;
    } else {
      return { passwordNotTheSame : true};
    }
  }
}
