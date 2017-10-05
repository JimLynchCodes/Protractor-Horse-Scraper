var _$;
var request = require('request');
const cheerio = require('cheerio');

exports = module.exports = {
    waitForPage: function () {

        return new Promise(function (resolve, reject) {

            browser.driver.get('https://racing.ustrotting.com/default.aspx');
            browser.ignoreSynchronization = true;
            browser.sleep(1000);

            setTimeout(function () {
                console.log('timeout!');
                resolve();
            }, 1000)


        });
    },
    clickYesterdaysTracks: function () {
        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                console.log('yesterdays tracks startup!');

                resolve();
            }, 1000)


        });
    },
    reloadPageAndClickYesterdaysTrack: function () {
        return new Promise(function (resolve, reject) {

            // setTimeout(function () {
            //     console.log('reload URL!');
            //
            //     resolve();
            // }, 5000)
            browser.getCurrentUrl().then(function (url) {

                console.log('cheerio stuff!' + url)
                request(url, function (error, response, html) {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        _$ = cheerio.load(html);
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
                                    el.click().then(function () {

                                        console.log('yesterdays tracks!');

                                        resolve();
                                    });
                                    // browser.sleep(5000);

                                }
                            }
                        });
                    }
                });
            })

        });
    },
    clickTheFirstRaceBtn: function () {
        return new Promise(function (resolve, reject) {

            // setTimeout(function () {
            //     console.log('reload URL!');
            //
            //     resolve();
            // }, 5000)
            browser.getCurrentUrl().then(function (url) {

                console.log('cheerio stuff!' + url)
                request(url, function (error, response, html) {
                    if (!error && response.statusCode == 200) {
                        console.log('html was: ' + html);
                        // _$ = $;

                        // console.log('$: ' + $2.html());
                        var $2 = cheerio.load(html);
                        $2('a').each(function () {

                            console.log('a: ' + $2(this));
                            // if ($(this).attr('id') !== undefined) {
                            //
                            //     let dateMatches = $(this).attr('id').toString().includes('lnkbtnDate3');
                            //
                            //     console.log('id: ' + $(this).attr('id'));
                            //     console.log('match: ' + dateMatches);
                            //
                            //     if (dateMatches) {
                            //
                            //         console.log('clicking onn ' + $(this).attr('id').toString());
                            //
                            //         let el = element(by.id($(this).attr('id')));
                            //         console.log('clicking element: ' + el);
                            //         // el.click();
                            //         el.click();
                            //         browser.sleep(3000).then(function () {
                            //
                            //             resolve();
                            //         });
                            //
                            //
                            //     }
                            // }
                        });
                    }
                });
            })

        });
    },
    clickTheFirstTrack: function () {
        return new Promise(function (resolve, reject) {

            browser.getCurrentUrl().then(function (url) {

                console.log('cheerio stuff!' + url);
                request('https://racing.ustrotting.com/goto.aspx?target=12,65305', function (error, response, html) {
                    if (!error && response.statusCode == 200) {

                        // console.log('html: ' + html);

                        // console.log('got html ' + html);

                        // console.log('response: ' + response);
                        var $ = cheerio.load(html);

                        var form = element(by.id("aspnetForm"));
                        browser.driver.sleep(3000).then( function () {

                            console.log('clicking spot!');
                            browser.actions()
                                .mouseMove(form, {x: 43, y: 666})
                                .click()
                                .perform();

                            // browser.driver.clickAt(43, 666);

                            browser.sleep(3000).then(function()
                            {
                                resolve();
                            })

                        });


                            // console.log('$: ' + $.html());
                            // _$ = $;
                            // $('a').each(function () {
                            //     console.log('checking a tags...')
                            //     //
                            //     console.log('id: ' + $(this).attr('id'));
                            //     console.log('match: ' + match);
                            //     //
                            //     if ($(this).attr('id') !== undefined) {
                            //         //
                            //         let match = $(this).attr('id').toString().includes('lnkbtnrace');
                            //         //
                            //         //
                            //         //         if (dateMatches) {
                            //         //
                            //         //             console.log('clicking onn ' + $(this).attr('id').toString());
                            //         //
                            //         //             let el = element(by.partialButtonText('Monticello'));
                            //         //             console.log('clicking element: ' + el);
                            //         //             el.click();
                            //         //             el.click();
                            //         //             // browser.sleep(3000);
                            //         //
                            //         //
                            //         //             resolve();
                            //         //         }
                            //     }
                            // });

                        // })
                        // console.log('ok then...');
                        //
                        // console.dir($);
                        // $('table').each(function () {
                        //     console.log('td: ' + $(this).attr('id'))
                        //
                        //     if ($(this.attr('id')) === 'ctl00_ctl00_ctl00_cphContentArea_cphContentArea_cphContentArea_dgData') {
                        //         console.log('FOUND HIM');
                        //     }
                        // })

                    }
                });
            })


            // var dog2 = element(by.partialLinkText('lnkbtnrace'));
            // console.log('dog2' + dog2);
            //
            // dog2.click();


            // console.log(_$.parseHtml());

            // resolve();


            // browser.getCurrentUrl().then(function (url) {
            //
            //     console.log('checking for first track with!' + url);
            //     request(url, function (error, response, html) {
            //         if (!error && response.statusCode == 200) {
            //             var $ = cheerio.load(html);
            //             _$ = cheerio.load(html);
            //             $('td').each(function () {
            //
            //                 if ($(this).attr('id') !== undefined) {
            //
            //                     let dateMatches = $(this).attr('id').toString().includes('_lnkbtnrace_');
            //
            //                     console.log('a tag: : ' + $(this).attr('id'));
            //                     console.log('match: ' + dateMatches);
            //
            //                     if (dateMatches) {
            //
            //                         console.log('clicking onn ' + $(this).attr('id').toString());
            //
            //                         let el = element(by.id($(this).attr('id')));
            //                         console.log('clicking element: ' + el);
            //                         // el.click();
            //                         el.click();
            //                         browser.sleep(3000);
            //                             resolve();
            //
            //                         // return setTimeout(function () {
            //                         //     console.log('clicked race!');
            //                         //
            //                         // }, 3000)
            //                     }
            //                 }
            //             });
            //         }
            //     });
            // })

        });
    },
    clickTheFirstRace: function () {
        return new Promise(function (resolve, reject) {

            console.log('clicking race 1');

            var form = element(by.id("aspnetForm"));

            browser.actions()
                .mouseMove(form, {x: 42, y: 500})
                .click()
                .perform();

            browser.sleep(3000).then(function()
            {
                resolve();
            })

        })
    },
    scrapeData: function () {
        return new Promise(function (resolve, reject) {

            browser.getCurrentUrl().then(function (url) {

                console.log('cheerio stuff!' + url);
                request('https://racing.ustrotting.com/goto.aspx?target=12,65305', function (error, response, html) {
                    if (!error && response.statusCode == 200) {

                        // console.log('html: ' + html);

                        console.log('got html on race data page! ' + html);
                        var $ = cheerio.load(html);


                        console.dir($);
                            // browser.driver.clickAt(43, 666);

                            browser.sleep(3000).then(function()
                            {
                                resolve();
                            })


                        }


                });
            })
    })
}
}