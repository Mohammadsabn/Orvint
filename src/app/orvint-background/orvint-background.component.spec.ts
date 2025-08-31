import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvintBackgroundComponent } from './orvint-background.component';

describe('OrvintBackgroundComponent', () => {
  let component: OrvintBackgroundComponent;
  let fixture: ComponentFixture<OrvintBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvintBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrvintBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
