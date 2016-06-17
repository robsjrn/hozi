export class HoziPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hozi-app h1')).getText();
  }
}
