//app.js
App({
  globalData: {
    userInfo: {},
    headUrl: '',
    openid: null,
    sex: ['男', '女'],
  },

  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cvg20190102-80d55e',
        traceUser: true,
      })
    }

    //获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              this.wxlogin();
            },
          })
        }
      }
    }) 
  },

  //cloud:登录
  wxlogin: function (callback) {
    var context = this;

    wx.cloud.callFunction({
      name: 'userInfo',
      data: {
        type: 'addUser',
        nickName: context.globalData.userInfo.nickName,
        avatarUrl: context.globalData.userInfo.avatarUrl,
        userInfo: context.globalData.userInfo
      },
      success: res => {
        context.globalData.userInfo = res.result.data[0]
        context.globalData.openid = res.result.data[0].openid
        if (callback) {
          callback(context.globalData.userInfo);
        }
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },


})
