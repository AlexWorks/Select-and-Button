import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customizable-button',
  templateUrl: './customizable-button.component.html',
  styleUrls: ['./customizable-button.component.scss']
})
export class CustomizableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text : string = "Sample Text";
  @Input() image : string = "https://image.flaticon.com/icons/svg/121/121105.svg";

}
