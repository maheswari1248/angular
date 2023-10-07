import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { user1Guard } from './user1.guard';

describe('user1Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => user1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
