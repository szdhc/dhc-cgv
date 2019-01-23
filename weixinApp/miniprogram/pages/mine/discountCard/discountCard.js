// pages/discountCard/discountCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    membershipName: 'CGV影城专用',
    membershipShow: '5元',
    membershipLevel: '限线上支付使用',
    membershipLevelinfo: '2019.1.21-2019.1.28',
    discountInfo: [],
    cardprice:5,
    cardmaxprice:30,
    usedCinema: 'CGV影城',
    startTime:'2019-1-15',
    endTime:'2019-1-25'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      discountInfo: [{
        cardprice: 5,
        cardmaxprice: 30,
        usedCinema: 'CGV影城',
        startTime: '2019-1-15',
        endTime: '2019-1-25'
      }, {
          cardprice: 5,
          cardmaxprice: 30,
          usedCinema: 'CGV影城',
          startTime: '2019-1-15',
          endTime: '2019-1-25'
      }]
    })
    if (this.data.discountInfo == '') {
      this.setData({
        msg: 'block',
        mbsshow: 'none'
      });
    } else {
      this.setData({
        msg: 'none',
        mbsshow: 'flex'
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})