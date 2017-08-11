import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomizableButtonComponent } from './customizable-button/customizable-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSelectComponent,
    CustomizableButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
