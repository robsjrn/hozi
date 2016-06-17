import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HoziAppComponent } from '../app/hozi.component';

beforeEachProviders(() => [HoziAppComponent]);

describe('App: Hozi', () => {
  it('should create the app',
      inject([HoziAppComponent], (app: HoziAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hozi works!\'',
      inject([HoziAppComponent], (app: HoziAppComponent) => {
    expect(app.title).toEqual('hozi works!');
  }));
});
