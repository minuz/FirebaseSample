import { TechnicalAssessmentPage } from './app.po';

describe('technical-assessment App', () => {
  let page: TechnicalAssessmentPage;

  beforeEach(() => {
    page = new TechnicalAssessmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
