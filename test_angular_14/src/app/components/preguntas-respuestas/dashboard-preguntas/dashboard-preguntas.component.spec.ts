import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPreguntasComponent } from './dashboard-preguntas.component';

describe('DashboardPreguntasComponent', () => {
  let component: DashboardPreguntasComponent;
  let fixture: ComponentFixture<DashboardPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
