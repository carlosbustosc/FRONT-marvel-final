import { TestBed } from '@angular/core/testing';

import { MarvelGuard } from './marvel.guard';

describe('MarvelGuard', () => {
  let guard: MarvelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarvelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
