import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinmuebleCreateComponent } from './tipoinmueble-create.component';

describe('TipoinmuebleCreateComponent', () => {
  let component: TipoinmuebleCreateComponent;
  let fixture: ComponentFixture<TipoinmuebleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoinmuebleCreateComponent]
    });
    fixture = TestBed.createComponent(TipoinmuebleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
