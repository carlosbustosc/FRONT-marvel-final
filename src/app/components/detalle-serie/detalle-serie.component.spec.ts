import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSerieComponent } from './detalle-serie.component';

describe('DetalleSerieComponent', () => {
  let component: DetalleSerieComponent;
  let fixture: ComponentFixture<DetalleSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
