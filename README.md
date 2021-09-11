# Slack-Bot

--------
# Explanation

### Before You Start

해당 글은 한국어로 작성되었고 코드 또한 한국어로 작성되어있습니다. 해당 코드에 대한 설명은 구글번역기를 통해서 번역을 해주도록 하겠으나 
코드를 직접적으로 해석하고 수정하는 것이 좋다.

This article is written in Korean. Explanations on that document are good to hear.
It's about porting and reinterpreting code.

### KO

월요일부터 목요일 아침,점심,저녁의 시간마다 식사하라는 알림을 보내준다.

금요일은 일정이 다르기 때문에 알림의 시간을 다르게 설정한다.

토요일~일요일 일정은 아침,점심,저녁 일정이 평일과 다르게 설정이 되어있다.

즉 식사 알림은 시간만 다르게 해주었다.

유리시 알림은 작성자가 좋아하는 연애인중 하나인 `조유리`가 태어난 시간에 연락을해서 10시 22분이 되기 2분전에 알림이 뜨게 한다.
즉 해당 부분은 다른 사람에겐 필요없으면 삭제해도 된다.

### EN
It sends reminders to eat every morning, lunch, and dinner from Monday to Thursday.

Fridays have different schedules, so set different times for notifications.

The Saturday-Sunday schedule is set differently from weekdays for breakfast, lunch, and dinner.

In other words, the meal reminder was made at a different time.

The notification of Yuri is made by the author at the time of birth of one of his favorite lovers, `조유리` and a notification pops up two minutes before 10:22.
In other words, you can delete that part if you don't need it for anyone else.



# Purpose

### Install Package -KO

설치해야하는 패키지는 다음과 같다.
`request` `node-schedule` `cheerio-httpcli`
위 3가지 패키지를 글로벌로 설치를 해도 상관없다.

`npm install request`
`npm install node-schedule`
`npm install cheerio-httpcli`

or 

`npm i request node-schedule cheerio-httpcli`

### Install Package -EN

The packages you need to install are:
`request` `node-schedule` `cheerio-httpcli`
It doesn't matter if you install the above three packages globally.

`npm install request`
`npm install node-schedule`
`npm install cheerio-httpcli`

or

`npm i request node-schedule cheerio-httpcli`




### Edit Code -KO

```
schedule.scheduleJob('00 18 * * 6-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "저녁 식사하러 갑시다." }'
        });
});
```
- `url`부분을 자신이 생성한 봇의 WebHook주소를 넣어주면 된다.

- `schedule.scheduleJob(00 18 * * 6-7, function(){`부분에서 `00 18 * * 6-7`부분을 `second`, `minute`, `hour`, `date`, `month`, `year`, `dayOfWeek` 순으로 셋팅해주면 된다.
  예를 들어 매일 12시 33분에 스케쥴러가 작동하게 하고 싶으면 `33 12 * * *` 이렇게 셋팅하면 된다.
 
### Edit Code -EN

```
schedule.scheduleJob('00 18 * * 6-7', function(){
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'WebHookUrl',
        body: '{ "text": "Let's go have dinner." }'
        });
});
```
- In the `url` part, put the WebHook address of the bot you created.

- `schedule.scheduleJob(00 18 * * 6-7, function(){ `00 18 * * 6-7` in `second`, `minute`, `hour`, `date`, `month You can set it in the order of `, `year`, `dayOfWeek`.
  For example, if you want the scheduler to start at 12:33 every day, you can set it like this: `33 12 * * *`.
