import { Injectable } from '@nestjs/common';
import * as puppeteer from "puppeteer";

@Injectable()
export class BoardsService {

    async name()  {

        const url = 'https://m.naver.com';
          const browser = await puppeteer.launch(
            {
                headless: false,
                waitForInitialPage: true,
            }
        );
        const page = await browser.newPage();

    //         // Puppeteer를 사용해 브라우저 인스턴스를 생성
    // const browser = await puppeteer.launch();
    // // 새 탭을 생성
    // const page = await browser.newPage();


        
        await page.goto(url)
        
       
        const data = await page.evaluate(() => {
            let items = document.querySelectorAll('.PM_CL_newsstand_item .PM_CL_newsstand_data');
            let results = [];
          
            items.forEach((item) => {
                console.log('results ===========>',item)
              let titleElement = item.querySelector('.PM_CL_newsstand_link') as HTMLElement;
              let linkElement = item.querySelector('.PM_CL_newsstand_link') as HTMLAnchorElement;
          
              // 추출할 데이터 작성
              results.push({
                title: titleElement.innerText,
                link: linkElement.href
              });

              console.log('results ===========>',results)
            });
           
            return results;
          });
          
          
          
      

        // await page.goto(url, {waitUntil: 'networkidle2'});
        // await page.type('#IjisUserID', `${body.studentId}`)
        // await page.type('#IjisPassword', `${body.password}`)
        // await Promise.all([
        //     page.click('#ibtnLogin'),
        //     page.waitForNavigation({waitUntil: 'networkidle2'})
        // ]);

        await browser.close();

        // return result == 'https://stud.inje.ac.kr/Main.aspx';
        return data
    }

}


// import {Injectable} from "@nestjs/common";
// import * as puppeteer from "puppeteer";
// import {UserNotFoundException} from "../../domain/errors/user.errors";
// import {IjisLoginCommand} from "./ijis.command";

// @Injectable()
// export class InjeInformationServiceService {

//     async login(body: IjisLoginCommand): Promise<boolean> {
//         if (!await this.validateUser(body)) throw new UserNotFoundException();

//         const url = 'https://stud.inje.ac.kr/';

//         const browser = await puppeteer.launch(
//             {
//                 headless: false,
//                 waitForInitialPage: true,
//             }
//         );
//         const page = await browser.newPage();

//         await page.goto(url, {waitUntil: 'networkidle2'});
//         await page.type('#IjisUserID', `${body.studentId}`)
//         await page.type('#IjisPassword', `${body.password}`)
//         await Promise.all([
//             page.click('#ibtnLogin'),
//             page.waitForNavigation({waitUntil: 'networkidle2'})
//         ]);

//         const result = page.url();
//         await browser.close();

//         return result == 'https://stud.inje.ac.kr/Main.aspx';

//     }

//     async validateUser(body: {studentId: string, password: string}): Promise<boolean> {
//         const url = 'https://edu.inje.ac.kr/default.aspx';
//         const browser = await puppeteer.launch(
//             {
//                 headless: false,
//                 waitForInitialPage: true,
//             }
//         );
//         const page = await browser.newPage();

//         await page.goto(url, {waitUntil: 'networkidle2'});
//         if (await page.$('#popupLayer58 > div.popup_footer > div > div > a') !== null) await page.click('#popupLayer58 > div.popup_footer > div > div > a');
//         await Promise.all([
//             await page.type('#txtUserID', `${body.studentId}`),
//             await page.type('#txtPasswd', `${body.password}`)
//         ]);
//         await Promise.all([
//             page.click('#btn로그인', {delay: 1000}),
//             page.waitForNavigation({waitUntil: 'networkidle2'})
//         ]);
//         const result = page.url();
//         await browser.close();

//         return result == 'https://edu.inje.ac.kr/student/default.aspx';
//     }
// }