const request = require('request');
const schedule = require('node-schedule');
var client = require ('cheerio-httpcli');


// 봇이 시작하면 시작했다고 메세지 보내기
request.post({
    headers: { 'content-type': 'application/json' },
    url: 'WebHookUrl',
    body: '{ "text": "봇을 시작합니다." }'
    });


// 월요일부터 금요일까지 각 시간별로 시간 보내기

schedule.scheduleJob('30 7 * * 1-5', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "아침 식사하러 갑시다." }'
        });
});
schedule.scheduleJob('55 12 * * 1-5', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "점심 식사하러 갑시다." }'
        });
});
schedule.scheduleJob('48 17 * * 1-4', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "저녁 식사하러 갑시다." }'
        });
});

// 금요일 저녁은 따로 공지
schedule.scheduleJob('00 18 * * 5', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "저녁 식사하러 갑시다." }'
        });
});


// 토요일 일요일 식사시간 알리미

schedule.scheduleJob('30 8 * * 6-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "아침 식사하러 갑시다." }'
        });
});
schedule.scheduleJob('00 12 * * 6-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "점심 식사하러 갑시다." }'
        });
});
schedule.scheduleJob('00 18 * * 6-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "저녁 식사하러 갑시다." }'
        });
});

console.log("봇이 작동을 시작했습니다.")

// 유리시
schedule.scheduleJob('20 10 * * 1-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "유리시 2분전입니다. 준비하세요." }'
        });
});
schedule.scheduleJob('20 22 * * 1-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "유리시 2분전입니다. 준비하세요." }'
        });
});


// const cheerio = require('cheerio');

// var url = "https://search.naver.com/search.naver?query=AWS&where=news";

// request(url, function(error, response, html){
//     if (error) {throw error};

//     var $ = cheerio.load(html);

//     $('.news_tit').each(function(){
//         // var output = process.stdout.write($(this).text());
//         // request.post({
//         //     headers: { 'content-type': 'application/json' },
//         //     url: 'WebHookUrl',
//         //     body: '{"text":'+ process.stdout.write($(this).text()) +'}'
//         //     });

//         console.log('{"text":'+ process.stdout.write($(this).text()) +'}')
//     })
// });
