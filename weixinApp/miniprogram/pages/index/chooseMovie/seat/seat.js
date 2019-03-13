// pages/index/chooseMovie/seat/seat.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: { shop: 'CGV影城(苏州中心店)', time: '今天 1月21号 16:25', effects: '英语3D', room: '3DIMAX厅', center: 7, price: 36.2,},
    map: [],
    deltaX:60,
    sX:0,
    scaleWidth:36,
    scaleHeight:32,
    colWidth:30,
    colHeight: 50,
    olddistance:0,
    scale:1,
    sY:0,
    money:0,
    deltaY:0,
    seats:[],
    willChange: false,
    hasSelected: false,
    moveleft:6,
    smallwidth:175,
    smallChangeX:0,
    seatmap: [[1, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [1, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[1, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 1, 1]]
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
    wx.showModal({
      title: '温馨提示',
      content: '儿童需要自行购票',
      showCancel: false,
    })
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

})