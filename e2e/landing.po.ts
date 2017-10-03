import { browser, by, element } from 'protractor';

export class LandingPage {
  navigateTo() {
      return browser.get('/');      
  }

  getH1Text() {        
    return element(by.css('h1')).getText();
  }
}