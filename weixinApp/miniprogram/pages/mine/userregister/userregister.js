// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logosrc: 'cloud://cvg20190102-80d55e.6376-cvg20190102-80d55e/cgvlogo.PNG',
    iv: null, //加密算法的初始向量
    encryptedData: null //完整用户信息的加密数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取用户手机号等信息
   */
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)

    if (e.detail.iv){
      this.setData({
        iv: e.detail.iv
      })
    }

    if (e.detail.encryptedData) {
      this.setData({
        iv: e.detail.encryptedData
      })
    }
  },

  /**
   * 手机号登录跳转
   */
  gotoLogin: function(){
    wx.navigateTo({
      url: '../userLogin/userLogin',
    })
  }
})