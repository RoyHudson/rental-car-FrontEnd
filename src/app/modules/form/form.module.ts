import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { FormBuilder } from '@angular/forms';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule, 
    MaterialModule
  ],
  providers: [
    FormBuilder
  ]
})
export class FormModule { }
