// pages/myOrder/myOrder.js
var app = getApp()

Page({
  data: {
    current: 0,

    orderList: [{
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
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  switchSlider: function(e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function(e) {
    this.setData({
      current: e.detail.current
    })
  },
  formSubmit: function(e) {
    wx.showModal({
      title: '退票提示',
      content: '是否进行退票',
      confirmText: '确定',
      cancelText: '取消',
      success: function(res) {
        //取消订单
        if (res.confirm) {
          wx.showToast({
            title: '正在取消订单',
            icon: 'loading',
            duration: 10000
          })
          var that = this
          console.log(e.target.dataset.id)
          wx.request({
            url: `${app.globalData.API_URL}` + '/order/' + e.target.dataset.id,
            method: 'DELETE', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
              if (res.data == 1) {
                that.onLoad()
                wx.hideToast()
              }

            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
          //服务通知
          console.log("formid是：" + e.detail);
          let access_token = wx.getStorageSync("access_token");
          let openid = wx.getStorageSync("openid");
          let templateid = 'EcZf0YFdMHpzyf_YFyMD8r8NeLH54zX7f9KUFrsRY6o';
          wx.request({
            url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token,
            data: {
              "touser": openid,
              "template_id": templateid,
              "form_id": e.detail.formId,
              "data": {
                "keyword1": {
                  "value": "1张"
                },
                "keyword2": {
                  "value": "大黄蜂"
                },
                "keyword3": {
                  "value": "43"
                },
                "keyword4": {
                  "value": "2019年1月27日"
                },
                "keyword4": {
                  "value": "我们将在1-7个工作日内为您办理退款，请留意微信退款通知。"
                }
              },
              method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res) {
                // success
                console.log(res)
              },
              fail: function(res) {
                // fail
                console.log(res)
              },
              complete: function() {
                // complete
              }
            }
          })
        }
        if (res.cancel) {
          
        }
      }
    })


  },
  delorder: function (e) {
    
  }
})