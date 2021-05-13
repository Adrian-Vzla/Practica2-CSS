import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  menuItems = [
    {linkID: 1, linkName: 'Cuerpo', linkUrl: 'cuerpo'},
    {linkID: 2, linkName: 'Cuerpo 2', linkUrl: 'cuerpo2'}
  ];

  constructor() { }
  public app_name = "NAVBAR"
  ngOnInit(): void {
  }

}
