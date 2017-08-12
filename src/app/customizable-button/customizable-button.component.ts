import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customizable-button',
  templateUrl: './customizable-button.component.html',
  styleUrls: ['./customizable-button.component.scss']
})
export class CustomizableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  button_text = "Sample Text";
  button_image = "https://image.flaticon.com/icons/svg/121/121105.svg";

}
