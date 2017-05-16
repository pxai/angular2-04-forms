import {Component} from '@angular/core';

/**
 * Form samples
 * With this one we just check on console
 * the value of a form control.
 * There is no binding with the class
 */
@Component({
    selector: 'myform-simple',
    template: `<div>
                {{title}}
                <form >
                    <div class="form-group">
                        <label for="login">Login</label>
                        <input type="text" ngControl="login" #login="ngForm" (change)="formChanged(login)" id="login" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" ngControl="password" #password="ngForm" (change)="formChanged(password)" id="password" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
               </div>`
})
export class MyFormSimpleComponent {
    private title: string = "Simple form";

    public formChanged (field: any) {
        console.log(field);
    }
}
