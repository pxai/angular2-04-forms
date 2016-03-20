import {Component} from 'angular2/core';
import {MyFormSimpleComponent} from './myformsimple.component';

/**
 * Form samples
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'forms-app',
    directives: [MyFormSimpleComponent],
    template: `<div>
                {{title}}
                <myform-simple></myform-simple>
               </div>`
})
export class AppComponent {
    private title : string = 'Form samples';
}
