import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/models/info';
import { Modal } from '../shared/models/modal';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  public modal: Modal = {
    type: "Conta"
  }

  public info: Info = {
    type: "Conta"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
