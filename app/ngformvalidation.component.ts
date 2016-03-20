import {Component} from 'angular2/core';

/**
 * Form using ngForm
 * This form makes some simple validation
 * with different kinds of validations
 */
@Component({
    selector: 'ngform-validation',
    template: `<div>
                {{title}}
                <form >
                    <div class="form-group">
                        <label for="login">Login</label>
                        <input type="text" 
                            ngControl="login" 
                            #login="ngForm" 
                            (change)="formChanged(login)" 
                            id="login"
                            required 
                            class="form-control" />
                            <div *ngIf="login.touched && !login.valid" class="alert alert-warning">
                                Username is required
                            </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" 
                            ngControl="email" 
                            #email="ngForm" 
                            (change)="formChanged(email)" 
                            id="email" 
                            required
                            class="form-control" />
                            <div *ngIf="email.touched && !email.valid" class="alert alert-warning">
                                Email is required
                            </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
               </div>`
})
export class NgFormValidationComponent {
    private title : string = 'Using NgForm';
    
    public formChanged (field) {
        console.log(field);
    }
       
}
