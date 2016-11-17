import { AddressBookAngular2Page } from './app.po';

describe('address-book-angular2 App', function() {
  let page: AddressBookAngular2Page;

  beforeEach(() => {
    page = new AddressBookAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
