import { FooterButtom } from './../shared/models/footerButtom';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public footButtom: FooterButtom = {
    isDisable: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
