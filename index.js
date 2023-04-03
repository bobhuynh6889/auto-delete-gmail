const playwright = require("playwright");
async function main() {
  const browser = await playwright.webkit.launch({
    headless: false, // setting this to true will not run the UI
  });
  const page = await browser.newPage();
  await page.goto("https://accounts.google.com/v3/signin/identifier?dsh=S-1425571763%3A1663641694199194&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWp_g3BhDHnEydJ1jD9-h43xClBTZfn2KMRVswGo-wkMAY3PdjHFnwLyHOUQyb54SBwd-ouy");
  
  await page.fill('input[name="identifier"]', "tanthuan211@gmail.com");
  await page.click('#identifierNext');
  
  await page.fill('input[name="Passwd"]', "@");
  await page.click('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]');
  
  await page.waitForTimeout(5000);

  await page.click('div[aria-label="Show more messages"]');
  await page.locator('div[class="J-N-Jz"]', { hasText: 'Oldest' }).click()
  
  await page.waitForTimeout(5000);
  for (let i = 0; i < 79;) {
  await page.click('div[data-tooltip="Select"]');
  await page.click('div[data-tooltip="Delete"]');
  await page.waitForTimeout(5000);
  i = i + 1;
  }
  await page.waitForTimeout(3000);
  await browser.close();
}

main();
