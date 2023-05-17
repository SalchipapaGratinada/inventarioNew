import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleCreateComponent } from './mueble-create.component';

describe('MuebleCreateComponent', () => {
  let component: MuebleCreateComponent;
  let fixture: ComponentFixture<MuebleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuebleCreateComponent]
    });
    fixture = TestBed.createComponent(MuebleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
