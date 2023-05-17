import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesCreateComponent } from './sedes-create.component';

describe('SedesCreateComponent', () => {
  let component: SedesCreateComponent;
  let fixture: ComponentFixture<SedesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedesCreateComponent]
    });
    fixture = TestBed.createComponent(SedesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
