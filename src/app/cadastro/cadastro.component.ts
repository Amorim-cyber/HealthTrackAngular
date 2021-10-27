import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/models/content';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public content: Content = {
    buttonDisable: false,
    hasButton: true,
    type: "Cadastro"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
