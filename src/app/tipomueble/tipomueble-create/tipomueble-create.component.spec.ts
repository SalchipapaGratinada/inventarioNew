import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomuebleCreateComponent } from './tipomueble-create.component';

describe('TipomuebleCreateComponent', () => {
  let component: TipomuebleCreateComponent;
  let fixture: ComponentFixture<TipomuebleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipomuebleCreateComponent]
    });
    fixture = TestBed.createComponent(TipomuebleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
