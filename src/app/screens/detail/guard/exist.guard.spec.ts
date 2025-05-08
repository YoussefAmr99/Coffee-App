import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { existGuard } from './exist.guard';

describe('existGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => existGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
