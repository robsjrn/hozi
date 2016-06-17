import { HoziPage } from './app.po';

describe('hozi App', function() {
  let page: HoziPage;

  beforeEach(() => {
    page = new HoziPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hozi works!');
  });
});
