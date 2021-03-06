import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      lastname: '',
      option: '',
      checkbox: '',
      masculino: '',
      femenino: '',
      email:'',
      phone: '',
      id: '',
    });
  }

}
