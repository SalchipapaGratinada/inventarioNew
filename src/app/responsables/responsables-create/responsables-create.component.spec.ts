import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesCreateComponent } from './responsables-create.component';

describe('ResponsablesCreateComponent', () => {
  let component: ResponsablesCreateComponent;
  let fixture: ComponentFixture<ResponsablesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsablesCreateComponent]
    });
    fixture = TestBed.createComponent(ResponsablesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
