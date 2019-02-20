//userConsole.js
const app = getApp();
const regurl = '../mine/userregister/userregister';

Page({
  data: {
    avatarUrl: 'cloud://cvg20190102-80d55e.6376-cvg20190102-80d55e/user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    username:'未登录',
    orderUrl:'',

    menbershipUrl: regurl,
    couponUrl: regurl,
    discountCardUrl: regurl,
    myLikeUrl: regurl,
    myOrderUrl: regurl,
    myPointsUrl: regurl,

    loginstatus: false
  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return;
    }

    //Todo
    // if (app.globalData.isLogin){
    //   this.setData({
    //     menbershipUrl: '../mine/Membership/Membership',
    //     couponUrl: '../mine/coupon/coupon',
    //     discountCardUrl: '../mine/discountCard/discountCard',
    //     myLikeUrl: '../myLike/myLike',
    //     myOrderUrl: '../mine/myOrder/myOrder',
    //     myPointsUrl: '../mine/myPoints/myPoints',

    //     loginstatus: true,
    //     avatarUrl: app.globalData.userInfo.avatarUrl,
    //     userInfo: app.globalData.userInfo,
    //     username: app.globalData.userInfo.nickName,
    //   })
    // }
   

    //获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                menbershipUrl: '../mine/Membership/Membership',
                couponUrl: '../mine/coupon/coupon',
                discountCardUrl: '../mine/discountCard/discountCard',
                myLikeUrl: '../myLike/myLike',
                myOrderUrl: '../mine/myOrder/myOrder',
                myPointsUrl: '../mine/myPoints/myPoints',

                loginstatus: true,

                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                username:res.userInfo.nickName,
              })
            }
          })
        }
      }
    })  
  },
  onShow: function(){
    // if (app.globalData.isLogin) {
    //   this.setData({
    //     menbershipUrl: '../mine/Membership/Membership',
    //     couponUrl: '../mine/coupon/coupon',
    //     discountCardUrl: '../mine/discountCard/discountCard',
    //     myLikeUrl: '../myLike/myLike',
    //     myOrderUrl: '../mine/myOrder/myOrder',
    //     myPointsUrl: '../mine/myPoints/myPoints',

    //     loginstatus: true,
    //     avatarUrl: app.globalData.userInfo.avatarUrl,
    //     userInfo: app.globalData.userInfo,
    //     username: app.globalData.userInfo.nickName,
    //   })
    // }
  },
  // onGetUserInfo: function (e) {
  //   if (!this.logged && e.detail.userInfo) {
  //     this.setData({
  //       logged: true,
  //       avatarUrl: e.detail.userInfo.avatarUrl,
  //       userInfo: e.detail.userInfo,
  //       username: e.detail.userInfo.nickName
  //     })
  //   }
  // },
  Userinfo() {

    if (this.data.userInfo.nickName){
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          console.log('[云函数] [login] user openid: ', res.result.openid)
          app.globalData.openid = res.result.openid
          wx.navigateTo({
            url: '../mine/userInfo/userInfo?avatarUrl=' + this.data.avatarUrl + '&username=' + this.data.username,
          })
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
          wx.navigateTo({
            url: '../deployFunctions/deployFunctions',
          })
        }
      })
    }
    else{
      wx.navigateTo({
        url: regurl,
      })
    }
    
  },
  
  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  myleveldetail:function(){
    if (this.data.userInfo.nickName){
      wx.navigateTo({
        url: '../mine/mylevdetail/mylevdetail?avatarUrl=' + this.data.avatarUrl,
      })
    } else {
      wx.navigateTo({
        url: regurl,
      })
    }
    
  }
})
