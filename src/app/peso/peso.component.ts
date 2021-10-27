import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/models/content';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  public content: Content = {
    buttonDisable: false,
    hasButton: true,
    type: "cadastro"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
