import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvintFooterComponent } from './orvint-footer.component';

describe('OrvintFooterComponent', () => {
  let component: OrvintFooterComponent;
  let fixture: ComponentFixture<OrvintFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvintFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrvintFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
