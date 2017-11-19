import { BrollopPage } from './app.po';

describe('brollop App', () => {
  let page: BrollopPage;

  beforeEach(() => {
    page = new BrollopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to da!!');
  });
});
