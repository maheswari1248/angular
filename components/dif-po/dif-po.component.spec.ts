import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifPOComponent } from './dif-po.component';

describe('DifPOComponent', () => {
  let component: DifPOComponent;
  let fixture: ComponentFixture<DifPOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifPOComponent]
    });
    fixture = TestBed.createComponent(DifPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
