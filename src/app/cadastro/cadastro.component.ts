import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/models/content';
import { Modal } from '../shared/models/modal';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public modal: Modal = {
    type: "Cadastro"
  }

  public content: Content = {
    buttonDisable: false,
    hasButton: true,
    type: "Cadastro"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
