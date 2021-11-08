import { Component, OnInit, Input } from '@angular/core';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() info!: Info;

  constructor() { }

  ngOnInit(): void {
  }

}
