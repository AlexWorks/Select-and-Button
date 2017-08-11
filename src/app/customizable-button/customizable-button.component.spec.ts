import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableButtonComponent } from './customizable-button.component';

describe('CustomizableButtonComponent', () => {
  let component: CustomizableButtonComponent;
  let fixture: ComponentFixture<CustomizableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
