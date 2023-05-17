import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionmuebleCreateComponent } from './ubicacionmueble-create.component';

describe('UbicacionmuebleCreateComponent', () => {
  let component: UbicacionmuebleCreateComponent;
  let fixture: ComponentFixture<UbicacionmuebleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionmuebleCreateComponent]
    });
    fixture = TestBed.createComponent(UbicacionmuebleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
