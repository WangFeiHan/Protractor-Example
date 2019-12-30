import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { log4jsconfig } from '../../config/log4jsconfig';

describe('workspace-project App', () => {
  let page: AppPage;
  let logger;

  beforeAll(() => {
    log4jsconfig.init();
    logger = log4jsconfig.Log();
  });

  beforeEach(() => {
    page = new AppPage();

    page.navigateTo();
  });

  it('Print something to log or console', () => {
    logger.debug('Test log 4.');
  });

  it('After click First button change color', () => {
    page.getFirstButtton().click().then(() => {
      expect(page.getFirstButttonColor()).toEqual('accent');
      expect(page.getSecondButttonColor()).toEqual('primary');
      expect(page.getThirdButttonColor()).toEqual('primary');
    });
  });

  it('After click First button display text', () => {
    page.getFirstButtton().click();
    expect(page.getFirstText()).toEqual('First works !');

  });

  it('After click Second button change color', () => {
    page.getSecondButtton().click().then(() => {
      expect(page.getFirstButttonColor()).toEqual('primary');
      expect(page.getSecondButttonColor()).toEqual('accent');
      expect(page.getThirdButttonColor()).toEqual('primary');
    });
  });

  it('After click Second button display text', () => {
    page.getSecondButtton().click();
    expect(page.getSecondText()).toEqual('Second works !');
  });

  it('After click Third button change color', () => {
    page.getThirdButtton().click().then(() => {
      expect(page.getFirstButttonColor()).toEqual('primary');
      expect(page.getSecondButttonColor()).toEqual('primary');
      expect(page.getThirdButttonColor()).toEqual('accent');
    });
  });

  it('After click Third button display text', () => {
    page.getThirdButtton().click();
    expect(page.getThirdText()).toEqual('Third works !');
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
