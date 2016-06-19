import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PmProductSrv } from './pm-services.service';

describe('PmServices Service', () => {
  beforeEachProviders(() => [PmProductSrv]);

  it('should ...',
      inject([PmProductSrv], (service: PmProductSrv) => {
    expect(service).toBeTruthy();
  }));
});
