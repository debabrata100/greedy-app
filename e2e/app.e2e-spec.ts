import { GreedyAppPage } from './app.po';

describe('greedy-app App', () => {
  let page: GreedyAppPage;

  beforeEach(() => {
    page = new GreedyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
