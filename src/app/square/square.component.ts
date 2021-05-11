import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  constructor() { 
  }

  @Input() value: 'X' | 'O';
  @Output() iAmClicked = new EventEmitter();


}
