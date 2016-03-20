import {Component} from 'angular2/core';

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
                            class="form-control" />
                            <div *ngIf="password.touched && !password.valid" class="alert alert-warning">
                                password is required
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
                            class="form-control" />
                            <div *ngIf="password2.touched && !password2.valid" class="alert alert-warning">
                                Password2 is required
                            </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
               </div>`
})
export class SpecificValidationComponent {
    private title : string = 'Specific validation - Change password';
    
    public formChanged (field) {
        console.log(field);
    }
       
}
