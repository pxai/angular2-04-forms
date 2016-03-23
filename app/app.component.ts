import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {MyFormSimpleComponent} from './myformsimple.component';
import {SimpleValidationComponent} from './simplevalidation.component';
import {SpecificValidationComponent} from './specificvalidation.component';
import {NgFormValidationComponent} from './ngformvalidation.component';
import {ControlGroupComponent} from './controlgroup.component';

/**
 * Form samples
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'forms-app',
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>{{title}}</h1>
                <nav> 
                <ul>
                    <li><a [routerLink]="['SimpleForm']">Simple form</a></li>
                    <li><a [routerLink]="['SimpleValidation']">Simple form with validation</a></li>
                    <li><a [routerLink]="['SpecificValidation']">Form with Specific validation</a></li>
                    <li><a [routerLink]="['NgFormValidation']">Form with ngForm</a></li>
                    <li><a [routerLink]="['ControlGroupValidation']">Form with Form Control Group</a></li>
                </ul>
                </nav>
                <router-outlet></router-outlet>`
})
@RouteConfig([
  {path:'/simpleform', name: 'SimpleForm', component: MyFormSimpleComponent},
  {path:'/simplevalidation', name: 'SimpleValidation', component: SimpleValidationComponent},
  {path:'/specificvalidation', name: 'SpecificValidation', component: SpecificValidationComponent},
  {path:'/ngformvalidation', name: 'NgFormValidation', component: NgFormValidationComponent},
  {path:'/controlgroupvalidation', name: 'ControlGroupValidation', component: ControlGroupComponent}
  ])
export class AppComponent {
    private title : string = 'Form samples';
}
