import { Component, Input, OnInit } from '@angular/core';
import { FooterButtom } from 'src/app/shared/models/footerButtom';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() footButtom!: FooterButtom;

  constructor() { }

  ngOnInit(): void {

  }

}
