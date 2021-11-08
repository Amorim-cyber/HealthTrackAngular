import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
