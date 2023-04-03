import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortarUrlComponent } from './cortar-url.component';

describe('CortarUrlComponent', () => {
  let component: CortarUrlComponent;
  let fixture: ComponentFixture<CortarUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortarUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
