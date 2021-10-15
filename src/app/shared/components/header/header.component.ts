import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./menu.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  @Input() titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
