import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AsyncValidationComponent} from "./asyncvalidation.component";
import {ControlGroupComponent} from "./controlgroup.component";
import {FormBuilderComponent} from "./formbuilder.component";
import {LoginValidator} from "./login.validator";
import {MyFormSimpleComponent} from "./myformsimple.component";
import {NgFormValidationComponent} from "./ngformvalidation.component";
import {PasswordValidator} from "./password.validator";
import {SimpleValidationComponent} from "./simplevalidation.component";
import {SpecificValidationComponent} from "./specificvalidation.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    AsyncValidationComponent,
  ControlGroupComponent,
  FormBuilderComponent,
  LoginValidator,
  MyFormSimpleComponent,
  NgFormValidationComponent,
  PasswordValidator,
  SimpleValidationComponent,
  SpecificValidationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
