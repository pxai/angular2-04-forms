import {Control} from "angular2/common";

export class PasswordValidator {

  public  mustBeTheSame (control: Control) {
    console.log("See whhat happens");
    console.log(control);
    if (1 === 1) {
      return null;
    } else {
      return { passwordNotTheSame : true};
    }
  }
}
