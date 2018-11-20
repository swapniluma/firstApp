import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWarningComponent } from './app-warning.component';

describe('AppWarningComponent', () => {
  let component: AppWarningComponent;
  let fixture: ComponentFixture<AppWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
