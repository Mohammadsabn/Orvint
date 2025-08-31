import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvintFeaturesComponent } from './orvint-features.component';

describe('OrvintFeaturesComponent', () => {
  let component: OrvintFeaturesComponent;
  let fixture: ComponentFixture<OrvintFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvintFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrvintFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
