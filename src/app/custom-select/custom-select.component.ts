import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})

export class CustomSelectComponent implements OnInit {


  selectedOption: string;
  isShown = false;

  @Input() options: string[] = [
    'Taco',
    'Pizza',
    'Burger',
    'Burrito'
  ];

  @Output('selectchange')
  change: EventEmitter<string> = new EventEmitter<string>();

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
    this.change.emit(this.selectedOption);
    return event.target.closest('.custom-select__item');
  }

  onMouseDown(event: any): void {
    event.preventDefault();
  }
}
