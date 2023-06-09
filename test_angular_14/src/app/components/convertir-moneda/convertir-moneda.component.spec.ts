import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirMonedaComponent } from './convertir-moneda.component';

describe('ConvertirMonedaComponent', () => {
  let component: ConvertirMonedaComponent;
  let fixture: ComponentFixture<ConvertirMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertirMonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertirMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
