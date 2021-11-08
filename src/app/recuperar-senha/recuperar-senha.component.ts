import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/models/info';
import { Modal } from '../shared/models/modal';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  public modal: Modal = {
    type: "Senha"
  }

  public info: Info = {
    type: "Senha"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
