const app = getApp()
var begin
Page({

  /**
   * 页面的初始数据
   */
  data: {
    begin: '',
    cinema: '',
    //movieAddress:'CGV影城',
    movieAddressList: [{
        id:0,
        'movieAddress': 'CGV影城苏州中心店'
      },
      {
        id:1,
        'movieAddress': 'CGV影城昆山广场店'
      }
    ]

  },
  // onLoad: function (options) {
  //   this.setData({
  //     begin: options.begin
  //   })
  //   if (this.data.begin == '') {
  //     this.setData({
  //       begin: this.data.citys
  //     })
  //   }
  // },

  formSubmit: function(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value) 
    wx.navigateTo({
      url: '../trains/trains?beginCity=' + e.detail.value.beginCity,
    })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  bindBeginCityView: function() {
    wx.navigateTo({
      url: '../citys/citys?cityType=begin',
    })
  },
  onShow: function() {
    this.setData({
      begin: app.globalData.trainBeginCity
    })

  },


  //选择城市跳转事件
  chooseCitys() {
    wx.navigateTo({
      url: '/pages/citys/citys',
    })
  },
  //选择影城并返回首页
  bindMovieAddress: function(e) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    e.currentTarget.dataset
    prevPage.setData({
      movieAddress: this.data.movieAddressList[e.currentTarget.dataset.id].movieAddress,
      // movieAddress: this.data.movieAddress
    })
    wx.navigateBack({
      delta: 1
    })
  }
})