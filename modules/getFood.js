const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const screen = {
  width: 1920,
  height: 1080
};

// 0 : 기숙사, 1 : 학생1,  2: 학생2,  3:교직원
async function getFood(foodindex = 0) {
  if (foodindex > 3 || foodindex < 0) {
    throw new Error("Food Menu Index Error!!");
  }

  //Headless Mode로 빌드업
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

  //해당 사이트가 학교측 홈페이지에서 iframe으로 설정되어 있습니다.
  await driver.get("https://app.bufs.ac.kr/food.aspx");
  await driver.sleep(3000);

  let options = await driver
    .findElement(By.name("ddl식당"))
    .findElements(By.tagName("option"));
  await driver.sleep(1000);

  if (!options)
    throw new Error(`부적절한 식당 선택 option :: ${By.tagName("option")}`);

  await options[foodindex].click();
  await driver.sleep(1000);

  const rows = await driver
    .findElement(By.className("tbl-type01"))
    .findElement(By.tagName("tbody"))
    .findElements(By.tagName("tr"));

  if (!rows) throw new Error("Table 존재하지 않음");

  const info = rows.map(async row => {
    const cell = await row.findElements(By.tagName("td"));
    await driver.sleep(1000);

    const cellPromises = [0, 1, 2, 3, 4, 5].map(async num => {
      return await cell[num].getText();
    });

    const resolves = await Promise.all(cellPromises);
    return `
         날짜: ${resolves[0]}
         타입: ${resolves[1]}
         메뉴: ${resolves[2]}
         가격: ${resolves[3]}
         시작시간: ${resolves[4]}
         종료시간: ${resolves[5]}
         -------------------------------
         `;
  });

  const resolves = await Promise.all(info);

  console.log("result..", resolves);

  driver.quit();
}


module.exports = getFood;
