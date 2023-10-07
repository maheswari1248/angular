import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesibilingComponent } from './servicesibiling.component';

describe('ServicesibilingComponent', () => {
  let component: ServicesibilingComponent;
  let fixture: ComponentFixture<ServicesibilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesibilingComponent]
    });
    fixture = TestBed.createComponent(ServicesibilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
