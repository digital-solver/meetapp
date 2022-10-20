import puppeteer from 'puppeteer';

describe('show/hide an events details', () => {
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
    
    const eventDetails = await page.$('.event .details__inner-container');

    expect(eventDetails).toEqual({});
    browser.close();
  })
});
