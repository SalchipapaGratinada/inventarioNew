import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleCreateComponent } from './inmueble-create.component';

describe('InmuebleCreateComponent', () => {
  let component: InmuebleCreateComponent;
  let fixture: ComponentFixture<InmuebleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmuebleCreateComponent]
    });
    fixture = TestBed.createComponent(InmuebleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
