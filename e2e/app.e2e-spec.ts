import { IBFRONTENDPage } from './app.po';

describe('ibfrontend App', function() {
  let page: IBFRONTENDPage;

  beforeEach(() => {
    page = new IBFRONTENDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
