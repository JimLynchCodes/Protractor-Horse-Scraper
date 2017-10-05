var request = require('request');
const cheerio = require('cheerio');


describe('Horse Racing Scraper', function () {
    it('should scrape', function () {
        browser.driver.get('https://racing.ustrotting.com/default.aspx');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);

        return clickOnYesterdaysEntries().then(function () {
            return searchAndClickRacetracks().then(function () {
                console.log('donezo');
            })
        });

    });
});


function clickOnYesterdaysEntries() {

    var promise = new Promise(function (resolve, reject) {
        browser.getCurrentUrl().then(function (url) {

            console.log('cheerio stuff!' + url)
            request(url, function (error, response, html) {
                if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(html);
                    $('a').each(function () {

                        if ($(this).attr('id') !== undefined) {

                            let dateMatches = $(this).attr('id').toString().includes('lnkbtnDate3');

                            console.log('id: ' + $(this).attr('id'));
                            console.log('match: ' + dateMatches);

                            if (dateMatches) {

                                console.log('clicking onn ' + $(this).attr('id').toString());

                                let el = element(by.id($(this).attr('id')));
                                console.log('clicking element: ' + el);
                                // el.click();
                                el.click();
                                browser.sleep(1000)

                                resolve();
                            }
                        }
                    });
                }
            });
        })
    });


    return promise;

}

function searchAndClickRacetracks() {

    var promise = new Promise(function (resolve, reject) {

        console.log('searching racetracks' + browser.getCurrentUrl());
        browser.getCurrentUrl().then(function (url) {
            console.log('racetrack url: ' + url);
            request(url, function (error, response, html) {
                if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(html);
                    $('a').each(function (index, item) {

                        console.log('checking track: ' + $(this).attr('id'));
                        console.log('track matches: ' + $(this).attr('id').toString.includes('lnkbtnrace'));

                        if ($(this).attr('id').toString.includes('lnkbtnrace')) {

                            console.log('clicking on track: ' + $(this).attr('id'));

                            let el = element(by.id($(this).attr('id')));

                            console.log('clicking track element: ' + el);

                            browser.sleep(2000);

                        }

                        var is_last_item = (index == (arr.length - 1));
                        if (is_last_item === true) {
                            resolve();

                        }

                    });
                }
            });

        })

    });

    return promise;

}