import puppeteer from 'puppeteer';

describe('show/hide an events details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000)
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    browser.close();
  })

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details__inner-container');
    let eventDetailsClasses = await (await eventDetails.getProperty('classList')).jsonValue();
    expect(Object.values(eventDetailsClasses)).not.toEqual(expect.objectContaining({"1": "visible"}));
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details__toggle');
    await page.waitForSelector('.event .visible')
    const eventDetails = await page.$('.event .details__inner-container');
    let eventDetailsClasses = await (await eventDetails.getProperty('classList')).jsonValue();
    expect(Object.values(eventDetailsClasses)).toEqual(expect.objectContaining({"1": "visible"}));
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details__toggle');
    const eventDetails = await page.$('.event .details__inner-container');
    let eventDetailsClasses = await (await eventDetails.getProperty('classList')).jsonValue();
    expect(Object.values(eventDetailsClasses)).not.toEqual(expect.objectContaining({"1": "visible"}));
  })

});
