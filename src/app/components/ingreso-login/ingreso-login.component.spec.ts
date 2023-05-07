import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoLoginComponent } from './ingreso-login.component';

describe('IngresoLoginComponent', () => {
  let component: IngresoLoginComponent;
  let fixture: ComponentFixture<IngresoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
