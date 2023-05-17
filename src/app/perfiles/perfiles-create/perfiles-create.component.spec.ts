import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesCreateComponent } from './perfiles-create.component';

describe('PerfilesCreateComponent', () => {
  let component: PerfilesCreateComponent;
  let fixture: ComponentFixture<PerfilesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilesCreateComponent]
    });
    fixture = TestBed.createComponent(PerfilesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
