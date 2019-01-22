// pages/jumpcinema/jumpcinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    begin: '苏州',
    cinema: 'CGV影城苏州中心店'

  },

  // formSubmit: function(e) {
  //   // console.log('form发生了submit事件，携带数据为：', e.detail.value) 
  //   wx.navigateTo({
  //     url: '../trains/trains?beginCity=' + e.detail.value.beginCity,
  //   })
  // },
  // formReset: function() {
  //   console.log('form发生了reset事件')
  // },
  // bindDateChange: function(e) {
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },

  // onPullDownRefresh: function() {
  //   wx.stopPullDownRefresh();
  // },
  // bindBeginCityView: function() {
  //   wx.navigateTo({
  //     url: '../citys/citys?cityType=begin',
  //   })
  // },
  // onShow: function() {
  //   this.setData({
  //     begin: app.globalData.trainBeginCity
  //   })

  // },


  //选择城市跳转事件
  chooseCitys() {
    wx.navigateTo({
      url: '/pages/citys/citys',
    })
  },

})