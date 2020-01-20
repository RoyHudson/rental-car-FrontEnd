import { NgModule } from '@angular/core';
import { 
  MatTableModule, 
  MatPaginatorModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatInputModule, 
  MatCheckboxModule, 
  MatRadioModule,
  MatDatepicker,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule
];

@NgModule({
  exports: materialModules,
  imports: materialModules
})
export class MaterialModule { }