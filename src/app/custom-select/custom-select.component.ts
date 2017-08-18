import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})

export class CustomSelectComponent implements OnInit {


  selectedOption: string;
  isShown = false;
  selectedElement = null;

  @Input() options: string[] = [
    'Taco',
    'Pizza',
    'Burger',
    'Burrito'
  ];
  constructor() { }

  ngOnInit() {
    this.selectedOption = this.options[0];
  }

  @HostListener('window:click', ['$event'])
  onClick(event) {
    if (this.isShown && !event.target.closest('.custom-select')) {
      this.isShown = false;
    }
  }

  toggle(): void {
    this.isShown = !this.isShown;
  }

  onSelect(value: string, event): void {
    this.selectedOption = value;
    this.toggle();
    return event.target.closest('.custom-select__item');
  }

  onMouseDown(event: any): void {
    event.preventDefault();
  }
}
