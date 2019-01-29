// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = function sendNotification(event, callback) {
  let data = {
    access_token: event.data.access_token,
    openid: event.data.openid,
    templateid: 'n3vyeuNm3XT0OpkXJvpZzeOEXJ6EqwBQ0TZxJcgKPJI',
    formId: event.data.formId,
    keywords: {
      keyword1: {
        value: "想看电影通知"
      },
      keyword2: {
        value: "您想看的电影《" + event.data.movieName + "》上映啦"
      },
      keyword3: {
        value: event.data.movieOntime
      }
    }
  }


  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}