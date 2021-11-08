import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() info!: Info;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigateByUrl("/dashboard");
  }

}
