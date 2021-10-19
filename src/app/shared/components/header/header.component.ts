import { Component, OnInit, Input } from '@angular/core';
import { ContentComponent } from 'src/app/cadastro/content/content.component';
import { FooterButtom } from '../../models/footerButtom';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./menu.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  @Input() titulo!: string;
  @Input() footButtom!: FooterButtom;

  constructor() { }

  ngOnInit(): void {

  }

  toggle(){
    this.isCollapsed = !this.isCollapsed
    this.footButtom.isDisable = !this.footButtom.isDisable;
  }

}
