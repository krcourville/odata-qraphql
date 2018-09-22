import { TestBed, async, inject } from '@angular/core/testing';

import { OidcGuard } from './oidc.guard';

describe('OidcGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OidcGuard]
    });
  });

  it('should ...', inject([OidcGuard], (guard: OidcGuard) => {
    expect(guard).toBeTruthy();
  }));
});
