const { Builder, By, Key, until } = require('selenium-webdriver');

async function getFood(foodindex) {
    if (foodindex > 3 || foodindex < 0) {
        console.log("Food Menu Index Error!!");
        return 0;
    }

    let driver = await new Builder().forBrowser('chrome').build();

    //해당 사이트가 학교측 홈페이지에서 iframe으로 설정되어 있습니다.
    await driver.get('https://app.bufs.ac.kr/food.aspx');

    
    let options = await driver.findElement(By.name('ddl식당')).findElements(By.tagName('option'));
    if (options.length == 0) {
        console.log("학식 정보가 없습니다!");
        console.log("None Option !");
        return 0;
    }
    await options[foodindex].click();
    console.log("식당 : ", await options[foodindex].getText());

    let tr = await driver.findElement(By.className('tbl-type01')).findElement(By.tagName('tbody')).findElements(By.tagName('tr'));

    if (tr.length == 0) {
        console.log("학식 정보가 없습니다!");
        console.log("None Food Menu !");
        return 0;
    }

    for (var j = 0; j < tr.length; j++) {

        let td = await tr[j].findElements(By.tagName('td'));

        if (td.length == 0) {
            console.log("학식 정보가 없습니다!");
            console.log("None td column !");
            return 0;
        }
        const textarr = await Promise.all([td[0].getText(), td[1].getText(), td[2].getText(), td[3].getText(), td[4].getText(), td[5].getText()]);


        console.log('\n\n------------------------------------------------------------------------------------------');
        console.log("일자 : ", textarr[0]);
        console.log("메뉴 : ", textarr[1]);
        console.log("구성 : ", textarr[2]);
        //아래 가격은 홈페이지측에서 이상하게 설정해둬서 학교측에 문의가 필요로함.
        console.log("가격 : ", textarr[3]);
        console.log("시작시간 : ", textarr[4]);
        console.log("종료시간 : ", textarr[5]);
        console.log('------------------------------------------------------------------------------------------');

    }

    driver.quit();
}

// 0 : 기숙사 1 : 학생1 2: 학생2 3:교직원
var indexVal = 3;
getFood(indexVal);
