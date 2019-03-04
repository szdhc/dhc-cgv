// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'cvg20190102-80d55e',
  traceUser: true,
})
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  var eventType = event.type;
  var openid = wxContext.OPENID;


  if (eventType == 'addUser'){ //新增用户
    var queryUser = await queryUserInfo(openid);
    if (queryUser.data && queryUser.data.length > 0){
      return queryUser;
    } else {
      await addUserInfo(openid, event.nickName, event.avatarUrl);
      return await queryUserInfo(openid)
    }
  } else if(eventType == 'completeUser'){ //首次信息完善

  } else { //信息修改
    var queryUser = await queryUserInfo(openid);
    return changeUserInfo(openid, event.avatarUrl, queryUser.data[0]._id);
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}

//查询用户信息
function queryUserInfo(openid) {
  return db.collection('userInfo').where({
    openid: openid,
  }).get()
}

//新增用户信息
function addUserInfo(openid, nickName, avatarUrl) {
  return db.collection('userInfo').add({
    data: {
      nickName: nickName,
      openid: openid,
      avatarUrl: avatarUrl,
      userSurname: '未完善',
      casIndex: 0,
      birthday: '未完善',
      password: '',
      likeMovie: '未完善',
      cinemaindex: 0,
      memorialDay: '未完善',
      region: ['江苏省', '苏州市', '吴中区'],
      marryIndex: 0,
      childIndex: 0,
    }
  })
}

//修改用户信息
function changeUserInfo(openid, avatarUrl, id) {
  return db.collection('userInfo').doc(id).update({
    data: {
      //nickName: userInfo.nickName,
      // openid: userInfo.openid,
      avatarUrl: avatarUrl,
      // userSurname: userInfo.userSurname,
      // casIndex: userInfo.casIndex,
      // birthday: userInfo.birthday,
      // password: userInfo.password,
      // likeMovie: userInfo.likeMovie,
      // cinemaindex: userInfo.cinemaindex,
      // memorialDay: userInfo.memorialDay,
      // region: userInfo.region,
      // marryIndex: userInfo.marryIndex,
      // childIndex: userInfo.childIndex,
    }
  })
}