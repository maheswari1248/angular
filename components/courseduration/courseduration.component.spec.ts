import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedurationComponent } from './courseduration.component';

describe('CoursedurationComponent', () => {
  let component: CoursedurationComponent;
  let fixture: ComponentFixture<CoursedurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursedurationComponent]
    });
    fixture = TestBed.createComponent(CoursedurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
