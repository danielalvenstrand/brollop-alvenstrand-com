import { browser, by, element } from 'protractor';

export class BrollopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('da-root h1')).getText();
  }
}
