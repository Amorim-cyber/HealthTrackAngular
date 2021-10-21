import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../models/content';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() content!: Content;

  constructor() { }

  ngOnInit(): void {

  }

}
