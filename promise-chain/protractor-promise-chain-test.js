var request = require('request');
const cheerio = require('cheerio');
const runner = require('./runner.js');


describe('Horse Racing Scraper', function () {
    it('should scrape', function () {



        return runner.waitForPage()
            .then(function () {
                return runner.clickYesterdaysTracks()
            })
            .then(function () {
                return browser.sleep(2000);
            })
            .then(function () {
                return runner.reloadPageAndClickYesterdaysTrack()
            })
            .then(function () {
                return browser.sleep(3000);
            })
            .then(function () {
                return runner.clickTheFirstTrack()
            })
            .then(function () {
                return browser.sleep(3000);
            })
            .then(function () {
                return runner.clickTheFirstRace()
            })
            .then(function () {
                return browser.sleep(3000);
            })
            .then(function () {
                return runner.scrapeData()
            })
            .then(function () {
                return browser.sleep(3000);
            })



    });

});
