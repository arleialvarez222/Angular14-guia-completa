import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageConfirmacionComponent } from './mensage-confirmacion.component';

describe('MensageConfirmacionComponent', () => {
  let component: MensageConfirmacionComponent;
  let fixture: ComponentFixture<MensageConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensageConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensageConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
