// pages/userModify/userModify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    username: '',
    sex: ['未完善', '男', '女'],
    birthday: '未完善',
    memorial: '未完善',
    cinemasort: ['未完善', '2D', '3D', '3DMAX'],
    haveChild: ['未完善', '有', '无'],
    marry: ['未完善', '是', '否'],
    casIndex: 0,
    cinemaindex:0,
    childindex:0,
    marryIndex:0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatarUrl: options.avatarUrl,
      username: options.username,
      
    });
    if (options.sex == '男'){
      this.setData({
        sex: [options.sex,'女']
      });
    } else if (options.sex == '女'){
      this.setData({
        sex: [options.sex, '男']
      });
    }
      
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
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
  },
  bindViewEvent: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  bindmemorialEvent: function (e) {
    this.setData({
      memorial: e.detail.value
    })
  },
  bindCinemasort: function (e) {
    this.setData({
      cinemaindex: e.detail.value
    })
  },
  bindMarry: function (e) {
    this.setData({
      marryIndex: e.detail.value
    })
  },
  bindHaveChild: function (e) {
    this.setData({
      childindex: e.detail.value
    })
  },
})