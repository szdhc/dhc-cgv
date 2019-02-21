var util = require('../../../utils/util.js');

// pages/shop/goodspay/goodspay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paymin : '',                 //支付剩余时间xx分
    paysec : '',                 //支付剩余时间xx秒
    timer: '',                   //计时器
    orderArray: [],              //所有的订单
    curOrder: {},                //当前订单
    mobilenumber: '13345668751', //取票码手机号码
    paylocation: '苏州中心',      //订单地址
    curOrderPrice: 0,            //订单总价
    payPrice: 0,                 //应付价格

    isCoupon: '暂无可用卖品券',   //是否有卖品券
    isMemCard: '暂无可用会员卡',  //是否有会员卡
    isStarCard: '暂无可用星意卡', //是否有星意卡 

    havecredit: '5',             //可使用积分
    usecredit: '50',             //满xx积分可用

    isMobileTrue: false,         //手机号码输入弹出层是否显示; false,不显示
    telnum: '',                  //取票码手机号
  },

  /**
   * 打开手机号码输入
   */
  showMobileInput: function() {
    this.setData({isMobileTrue: true})
  },

  /**
   * 关闭手机号码输入
   */
  hideMobileInput: function() {
    this.setData({isMobileTrue: false})
  },  

  /**
   * 实现输入框内容变化同步value值
   * @param {*} e 
   */
  changetel: function(e) {
    this.setData({telnum:e.detail.value})
  },

  checkTel: function() {
    let telNum = this.data.telnum;

    if(telNum == null || telNum.length == 0) {
      wx.showToast({
        title:'请输入发送取票码的手机号',
        icon: 'none',
        duration:2000
    })      
    }else if(util.checkTelNum(telNum)) {
      this.setData({
        isMobileTrue: false,
        mobilenumber: telNum
      })
    } else {
      wx.showToast({
        title:'手机号码格式不正确',
        icon: 'none',
        duration:2000
    })
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let carArr = wx.getStorageSync("jsonCarA");
    let carA = JSON.parse(carArr);
    this.setData({ curOrder: carA });

    let orderCountPirce = 0;

    for(var i = 0; i < carA.length; i++) {
      orderCountPirce = orderCountPirce + parseInt(carA[i].price) * parseInt(carA[i].num);
    }
    this.setData({
      curOrderPrice: orderCountPirce,
      payPrice: orderCountPirce
    });
  },

  /**
   * 未支付订单倒计时
   */
  countDown:function(){
    var that = this;
    // 定时器的设置
    this.data.timer = setInterval(function(){
      var orders = this.data.orderArray;
      // 遍历所有的订单
      for(var i = 0; i < orders.length; i++) {
        //得到当前订单的订单状态；0表示待付款
        var status = orders[i].status;
        //如果订单待付款
        if (status == 0) {
          //订单结束日时
          var end_time = orders[i].end_time;
          //计算剩余时间差值
          var leftTime = new Date(end_time).getTime() - (new Date().getTime());
          if (leftTime > 0) {
            //计算剩余的分钟
            var minutes = util.formatNumber(parseInt(leftTime / 1000 / 60 % 60, 10));
            //计算剩余的秒数
            var seconds = util.formatNumber(parseInt(leftTime / 1000 % 60, 10));
            //给订单的支付剩余时间赋值
            orders[i].paymin = minutes;
            orders[i].paysec = seconds;
          }else {
            //移除超时未支付的订单
            orders.splice(i,1);
          }
        }
      }

      //画面相应
      that.setData({
        orderArray:orders
      });
    }, 1000);
  },

  /**
   * switch开关监听
   */
  listenerSwitch: function(e) {
    console.log('switch当前状态----',e.detail.value);
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

    //清除定时器
    clearInterval(this.data.timer);

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