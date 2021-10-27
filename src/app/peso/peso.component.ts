import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/models/content';
import { Modal } from '../shared/models/modal';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  public modal: Modal = {
    type: "Peso"
  }

  public content: Content = {
    buttonDisable: false,
    hasButton: true,
    type: "Peso"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
