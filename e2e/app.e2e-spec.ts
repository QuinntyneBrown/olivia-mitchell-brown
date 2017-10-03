import { LandingPage } from './landing.po';

describe('ng-starter App', () => {
  let page: LandingPage;

  beforeEach(() => {
      page = new LandingPage();
  });

  it('should display welcome message', () => {
      page.navigateTo();
      expect(page.getH1Text()).toEqual('Ng Starter');
  });
});