import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {
  title = 'app';

  selectLog: string[] = [];

  handleSelectChange(event) {
    this.selectLog.push(event);
  }
}
