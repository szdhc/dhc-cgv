// pages/myOrder/myOrder.js
var app = getApp()

Page({
  data: {
    current: 0,
    
    orderList:[{
      username: '静待',
      orderStatus: '交易成功',
      movieName: '海 王',
      movieShow: '海王首部个人电影',
      moviePrice: '45.0',
      movieNum: '1',
      movieCountPrice: '45.0'
    },
      {
        username: '静待',
        orderStatus: '未付款',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        moviePrice: '39.0',
        movieNum: '1',
        movieCountPrice: '39.0'
      }]
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    
  },
  
  switchSlider: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  // delorder: function (e) {
  //   wx.showToast({
  //     title: '正在取消订单，请稍候...',
  //     icon: 'loading',
  //     duration: 10000
  //   })
  //   var that = this
  //   console.log(e.target.dataset.id)
  //   wx.request({
  //     url: `${app.globalData.API_URL}` + '/order/' + e.target.dataset.id,
  //     method: 'DELETE', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     // header: {}, // 设置请求的 header
  //     success: function (res) {
  //       if (res.data == 1) {
  //         that.onLoad()
  //         wx.hideToast()
  //       }

  //     },
  //     fail: function () {
  //       // fail
  //     },
  //     complete: function () {
  //       // complete
  //     }
  //   })
  // }
})