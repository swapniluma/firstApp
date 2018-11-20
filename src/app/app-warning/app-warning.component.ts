import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-warning',
  templateUrl: './app-warning.component.html',
  styles: [`
  p{    
    padding: 20;
    background-color: lightsalmon;
    background: -moz-repeating-radial-gradient();

    border: 1px solid red;
}
  `]
})
export class AppWarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
