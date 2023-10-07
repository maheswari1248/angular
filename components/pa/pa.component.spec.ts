import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaComponent } from './pa.component';

describe('PaComponent', () => {
  let component: PaComponent;
  let fixture: ComponentFixture<PaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaComponent]
    });
    fixture = TestBed.createComponent(PaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
