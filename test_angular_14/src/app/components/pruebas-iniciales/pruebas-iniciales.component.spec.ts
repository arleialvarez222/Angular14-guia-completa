import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasInicialesComponent } from './pruebas-iniciales.component';

describe('PruebasInicialesComponent', () => {
  let component: PruebasInicialesComponent;
  let fixture: ComponentFixture<PruebasInicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasInicialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasInicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
