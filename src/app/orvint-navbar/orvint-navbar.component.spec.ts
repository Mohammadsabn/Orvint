import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvintNavbarComponent } from './orvint-navbar.component';

describe('OrvintNavbarComponent', () => {
  let component: OrvintNavbarComponent;
  let fixture: ComponentFixture<OrvintNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvintNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrvintNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
