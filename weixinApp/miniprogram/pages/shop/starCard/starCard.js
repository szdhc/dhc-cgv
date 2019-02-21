// pages/shop/starCard/starCard.js
var util = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStarCardTrue: false,             //添加星意卡弹出层是否显示; false,不显示
    starNum: '',                       //星意卡号
    starPwd: '',                       //星意卡密码
  },

    /**
   * 打开星意卡添加输入
   */
  showStarInput: function() {
    this.setData({isStarCardTrue: true})
  },

    /**
   * 关闭星意卡添加输入
   */
  hideStarInput: function() {
    this.setData({isStarCardTrue: false})
  },

  /**
   * 实现星意卡卡号输入框同步value值
   * @param {*} e 
   */
  changeStarNum: function(e) {
    this.setData({starNum: e.detail.value})
  },

  /**
   * 实现星意卡密码输入框同步value值
   * @param {*} e 
   */
  changeStarPwd: function(e) {
    this.setData({starPwd: e.detail.value})
  },  

  /**
   * 星意卡验证
   */
  checkStarCard: function() {
    let cardId = this.data.starNum;
    let cardPwd = this.data.starPwd;
    if(cardId == null || cardId.length == 0) {
      wx.showToast({
        title:'请输入星意卡卡号',
        icon: 'none',
        duration:2000
    })
    } else if (cardPwd == null || cardPwd.length == 0) {
      wx.showToast({
        title:'请输入星意卡密码',
        icon: 'none',
        duration:2000
    })
    } else {
      // 请求服务器验证星意卡是否存在
      // util.request({
      //   url:'xxxxxxxxxxxxxxxxxx',
      //   data:{},
      //   success:function(){
           
      //   }
      // })
      // 在success中根据返回值判断星意卡是否存在
      if (1!==0) {
        wx.showToast({
          title:'不存在代金券编号。请确认是否为16位',
          icon: 'none',
          duration:2000
      })
      }
    }
  },

  /**
   * 调用手机扫描接口扫描二维码
   */
  showCardScan: function() {

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

  }
})