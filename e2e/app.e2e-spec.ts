import { SelectAndButtonPage } from './app.po';

describe('select-and-button App', () => {
  let page: SelectAndButtonPage;

  beforeEach(() => {
    page = new SelectAndButtonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
