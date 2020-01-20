import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public data: any[]
  public columms: string []
  constructor() { 
    this.data =[
      {name: 'Roy', lastname: 'Hudson'},
      {name: 'Omar', lastname: 'Crespo'}
    ]
    this.columms = [
      'name', 'lastname'
    ]
  }
  ngOnInit() {
  }

}
