import {Component} from 'angular2/core';

/**
 * Form samples
 */
@Component({
    selector: 'myform-simple',
    template: `<div>
                {{title}}
                <div class="form-group">
                    <label for="login">Login</label>
                    <input type="text" id="login" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" />
                </div>
               </div>`
})
export class MyFormSimpleComponent {
    private title : string = 'Simple form';

}
