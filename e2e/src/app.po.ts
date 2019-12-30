import { browser, by, element, $$, $ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFirstButtton() {
    // return element(by.css('[routerlink="first"]'));
    return $$('[routerlink="first"]');
  }

  getFirstButttonColor() {
    return $('[routerlink="first"]').getAttribute('ng-reflect-color');
  }

  getFirstText() {
    return $('app-first p').getText();
  }

  getSecondButtton() {
    return $$('[routerlink="second"]');
  }

  getSecondButttonColor() {
    return $('[routerlink="second"]').getAttribute('ng-reflect-color');
  }

  getSecondText() {
    return $('app-second p').getText();
  }

  getThirdButtton() {
    return $$('[routerlink="third"]');
  }

  getThirdButttonColor() {
    return $('[routerlink="third"]').getAttribute('ng-reflect-color');
  }

  getThirdText() {
    return $('app-third p').getText();
  }
}
