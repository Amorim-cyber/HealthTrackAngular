import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/models/content';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public content: Content = {
    buttonDisable: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
