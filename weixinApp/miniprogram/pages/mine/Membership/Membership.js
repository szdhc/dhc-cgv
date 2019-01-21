// pages/Membership/Membership.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      membershipName: '静待',
      membershipShow: '贵宾座',
      membershipLevel: 'VIP11',
      membershipLevelinfo: '还差10000经验升级',
      membershipDiscount:'凭此卡订票可享受8.5折优惠',
      msg:'',
      mbsshow:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.membershipName==''){
      this.setData({
        msg: 'block',
        mbsshow: 'none'
      });
    }else{
      this.setData({
        msg: 'none',
        mbsshow: 'flex'
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
  buycard(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
    console.log("快去买会员卡吧");
  }
})