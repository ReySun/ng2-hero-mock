import { HeroMockPage } from './app.po';

describe('hero-mock App', function() {
  let page: HeroMockPage;

  beforeEach(() => {
    page = new HeroMockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
