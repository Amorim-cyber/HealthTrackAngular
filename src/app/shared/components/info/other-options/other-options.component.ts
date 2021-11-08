import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-other-options',
  templateUrl: './other-options.component.html',
  styleUrls: ['./other-options.component.css']
})
export class OtherOptionsComponent implements OnInit {

  @Input() info!: Info;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.router.navigateByUrl("/login");
  }

  goToRecuperarSenha(){
    this.router.navigateByUrl("/recuperarSenha");
  }

  goToCriarConta(){
    this.router.navigateByUrl("/criarConta");
  }

}
