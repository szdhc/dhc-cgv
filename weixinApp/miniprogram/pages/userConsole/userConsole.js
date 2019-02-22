//userConsole.js
const app = getApp();
const regurl = '../mine/userregister/userregister';

Page({
  data: {
    menbershipUrl: regurl,
    couponUrl: regurl,
    discountCardUrl: regurl,
    myLikeUrl: regurl,
    myOrderUrl: regurl,
    myPointsUrl: regurl,

    loginstatus: false,
    avatarUrl: 'cloud://cvg20190102-80d55e.6376-cvg20190102-80d55e/user-unlogin.png',
    userInfo: {},
    username: '未登录',
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
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           this.setData({
    //             menbershipUrl: '../mine/Membership/Membership',
    //             couponUrl: '../mine/coupon/coupon',
    //             discountCardUrl: '../mine/discountCard/discountCard',
    //             myLikeUrl: '../myLike/myLike',
    //             myOrderUrl: '../mine/myOrder/myOrder',
    //             myPointsUrl: '../mine/myPoints/myPoints',

    //             loginstatus: true,

    //             avatarUrl: res.userInfo.avatarUrl,
    //             userInfo: res.userInfo,
    //             username:res.userInfo.nickName,
    //           })
    //         }
    //       })
    //     } else {
    //       this.setData({
    //         menbershipUrl: regurl,
    //         couponUrl: regurl,
    //         discountCardUrl: regurl,
    //         myLikeUrl: regurl,
    //         myOrderUrl: regurl,
    //         myPointsUrl: regurl,

    //         loginstatus: false,
    //         avatarUrl: 'cloud://cvg20190102-80d55e.6376-cvg20190102-80d55e/user-unlogin.png',
    //         userInfo: {},
    //         username: '未登录',
    //       })
    //     }
    //   }
    // })  


    if (Object.keys(app.globalData.userInfo).length != 0){
      this.setData({
        menbershipUrl: '../mine/Membership/Membership',
        couponUrl: '../mine/coupon/coupon',
        discountCardUrl: '../mine/discountCard/discountCard',
        myLikeUrl: '../myLike/myLike',
        myOrderUrl: '../mine/myOrder/myOrder',
        myPointsUrl: '../mine/myPoints/myPoints',

        loginstatus: true,

        avatarUrl: app.globalData.userInfo.avatarUrl,
        userInfo: app.globalData.userInfo,
        username: app.globalData.userInfo.nickName,
      })
    }
  },
  onShow: function(){
    if (Object.keys(app.globalData.userInfo).length != 0) {
      this.setData({
        avatarUrl: app.globalData.userInfo.avatarUrl,
        username: app.globalData.userInfo.nickName,
      })
    }
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
            url: '../mine/userInfo/userInfo',
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
  
  
  myleveldetail:function(){
    if (this.data.userInfo.nickName){
      wx.navigateTo({
        url: '../mine/mylevdetail/mylevdetail',
      })
    } else {
      wx.navigateTo({
        url: regurl,
      })
    }
    
  }
})
