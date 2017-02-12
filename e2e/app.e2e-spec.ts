import { Angularfire2PresentationPage } from './app.po';

describe('angularfire2-presentation App', function() {
  let page: Angularfire2PresentationPage;

  beforeEach(() => {
    page = new Angularfire2PresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
