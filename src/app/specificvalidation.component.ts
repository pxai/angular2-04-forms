import {Component} from '@angular/core';

/**
 * Form simple validation
 * This form makes some simple validation
 * with different kinds of validations
 */
@Component({
    selector: 'specific-validation',
    template: `<div>
                {{title}}
                <form >
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="text"
                            ngControl="password"
                            #password="ngForm"
                            (change)="formChanged(password)"
                            id="password"
                            required
                            minlength="8"
                            class="form-control" />
                            <div *ngIf="password.touched && !password.valid">
                              <div *ngIf="password.errors.required" class="alert alert-warning">
                                  password is required
                              </div>
                              <div *ngIf="password.errors.minlength" class="alert alert-warning">
                                  password minglength is {{password.errors.minlength.requiredLength}}
                              </div>
                            </div>
                    </div>
                    <div class="form-group">
                        <label for="password2">Reenter password</label>
                        <input type="password"
                            ngControl="password2"
                            #password2="ngForm"
                            (change)="formChanged(password2)"
                            id="password2"
                            required
                            minlength="8"
                            class="form-control" />
                            <div *ngIf="password2.touched && !password2.valid">
                              <div *ngIf="password2.errors.required" class="alert alert-warning">
                                  password2 is required
                              </div>
                              <div *ngIf="password2.errors.minlength" class="alert alert-warning">
                                  password2 minglength is {{password2.errors.minlength.requiredLength}}
                              </div>
                              <div *ngIf="password2 != password" class="alert alert-warning">
                                  passwords are different!
                              </div>
                            </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
               </div>`
})
export class SpecificValidationComponent {
    private title : string = 'Specific validation - Change password';

    public formChanged (field: any) {
        console.log(field);
    }

}
