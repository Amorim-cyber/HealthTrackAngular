import { Component, OnInit } from '@angular/core';
import { FooterButtom } from '../shared/models/footerButtom';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public footButtom: FooterButtom = {
    isDisable: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
