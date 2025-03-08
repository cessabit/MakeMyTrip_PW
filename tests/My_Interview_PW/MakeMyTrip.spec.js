// My Interview Question: Go to Makemytrip website -> click on Hotel -> enter mumbai in search -> select the price and choose ₹0-₹1500

import { test, expect } from '@playwright/test';

test("Make My Trip", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/");
    await page.waitForTimeout(2000);

    // Close modal if exists
    await page.locator(".commonModal__close").click();

    // Click on Hotels
    await page.locator("//span[@class='headerIconTextAlignment chNavText darkGreyText'][normalize-space()='Hotels']").click();
   
    await page.locator("#city").click();
  
    // Type "Mumbai" in the search box
    await page.getByPlaceholder("Where do you want to stay?").fill("Mumbai");

    //await page.waitForTimeout(5000);
    
    // Wait for the dropdown list
    await page.waitForSelector("//div[@id='react-autowhatever-1']//p//span");
    
    // Select all matching elements
    const listbox = await page.$$("//div[@id='react-autowhatever-1']//p//span");
    
    // Extract text content from each element
    const listboxTexts = await Promise.all(
        listbox.map(async (element) => await element.textContent()));

    // Log the extracted text content
    console.log(listboxTexts);

 for (let i = 0; i < listboxTexts.length; i++)
   {
  if (listboxTexts[i] && listboxTexts[i].includes("Mumbai")) {
     await listbox[i].click();  // Click on the actual element, not the text
     break; // Stop after clicking the first match
  }

}
//await page.waitForTimeout(2000)

// validate the entered city is present
await expect(page.locator("#city")).toBeVisible("Mumbai")

//await page.waitForTimeout(3000)
await page.locator("//label[@for='appliedFilter']").click()
const pricelist=await page.$$('//div[@class="ppn"]/ul/li')
const ranges=await Promise.all(pricelist.map(async (Element)=> await Element.textContent()))
console.log(ranges)

for(let j=0; j<ranges.length; j++)
{
   if(ranges[j] && ranges[j].includes("₹0-₹1500"))
   {
    await pricelist[j].click()
    break;
   }
//await page.waitForTimeout(1000)
}
await page.click("#hsw_search_button")
await page.waitForTimeout(3000)
}
)