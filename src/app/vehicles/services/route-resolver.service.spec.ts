import { TestBed, inject } from '@angular/core/testing';

import { RouteResolverService } from './route-resolver.service';

describe('RouteResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteResolverService]
    });
  });

  it('should be created', inject([RouteResolverService], (service: RouteResolverService) => {
    expect(service).toBeTruthy();
  }));
});
