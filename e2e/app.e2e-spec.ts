import { ObservableMethodsPart3Page } from './app.po';

describe('observable-methods-part3 App', function() {
  let page: ObservableMethodsPart3Page;

  beforeEach(() => {
    page = new ObservableMethodsPart3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
