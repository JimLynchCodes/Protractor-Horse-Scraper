var request = require('request');
const cheerio = require('cheerio');
// const $ = cheerio.load('https://racing.ustrotting.com/waag.aspx');

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');

// $.html();


request('https://racing.ustrotting.com/default.aspx', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);

        console.log('html: ' + $.html());
    }
});

//=> <h2 class="title welcome">Hello there!</h2>

