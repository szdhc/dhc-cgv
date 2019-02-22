//app.js
App({
  globalData: {
    userInfo: {},
    headUrl: '',
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
            },
            complete: res => {
              wx.cloud.downloadFile({
                fileID: 'cloud://cvg20190102-80d55e.6376-cvg20190102-80d55e/image/' + this.globalData.userInfo.nickName + '.png',
                success: res => {
                  // get temp file path
                  console.log(res.tempFilePath);
                  this.globalData.userInfo.avatarUrl = res.tempFilePath;
                },
                fail: err => {
                  // handle error
                  console.log(errCode, errMsg);
                }
              })
            }
          })
        }
      }
    }) 
  }
})
