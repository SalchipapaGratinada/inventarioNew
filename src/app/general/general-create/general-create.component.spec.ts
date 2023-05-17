import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCreateComponent } from './general-create.component';

describe('GeneralCreateComponent', () => {
  let component: GeneralCreateComponent;
  let fixture: ComponentFixture<GeneralCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCreateComponent]
    });
    fixture = TestBed.createComponent(GeneralCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
