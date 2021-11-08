import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/models/info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public info: Info = {
    type: "Login"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
