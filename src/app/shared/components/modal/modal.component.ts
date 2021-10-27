import { Component, OnInit, Input } from '@angular/core';
import { Modal } from '../../models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modal!: Modal;

  constructor() { }

  ngOnInit(): void {
  }

  refresh(){
    window.location.reload();
  }

}
