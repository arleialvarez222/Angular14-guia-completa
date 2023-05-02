import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImageComponent } from './buscar-image.component';

describe('BuscarImageComponent', () => {
  let component: BuscarImageComponent;
  let fixture: ComponentFixture<BuscarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
