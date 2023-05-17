import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCreateComponent } from './home-create.component';

describe('HomeCreateComponent', () => {
  let component: HomeCreateComponent;
  let fixture: ComponentFixture<HomeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCreateComponent]
    });
    fixture = TestBed.createComponent(HomeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
