import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../../models/content';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./menu.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  @Input() titulo!: string;
  @Input() content!: Content;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  toggle(){
    this.isCollapsed = !this.isCollapsed
    this.content.buttonDisable = !this.content.buttonDisable;
  }

  toCadastro(){
    this.router.navigateByUrl("/cadastro");
  }

  toDashboard(){
    this.router.navigateByUrl("/dashboard");
  }

  toLogin(){
    this.router.navigateByUrl("/login");
  }

  toPeso(){
    this.router.navigateByUrl("/peso");
  }

}
