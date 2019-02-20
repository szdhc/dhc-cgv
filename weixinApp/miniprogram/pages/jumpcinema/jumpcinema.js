const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    begin: '',
    cinema: '',

  },

  onLoad: function(options) {
    console.log(options)
    console.log('load')

    this.setData({
      begin: options.ct
    })

  },

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
      url: '../citys/citys?cityType=begin&beginCity=' + this.data.begin,
    })
  },
  onShow: function() {
    this.getMovieAddressList(this.data.begin);
  },
  //TODO 通过api来设置list值
  getMovieAddressList: function(city) {
    let list = [];
    let suZhou = [{
        'id': '0',
        'movieAddress': '昆山昆城广场'
      },
      {
        'id': '1',
        'movieAddress': '苏州中心'
      }
    ];
    let shangHai = [{
        'id': '0',
        'movieAddress': '上海安亭'
      },
      {
        'id': '1',
        'movieAddress': '上海浦东印象城'
      },
      {
        'id': '2',
        'movieAddress': '上海七宝'
      }
    ];
    let beiJing = [{
      'id': '0',
      'movieAddress': '北京清河'
    },
    {
      'id': '1',
      'movieAddress': '星星北京颐提港'
    },
    {
      'id': '2',
      'movieAddress': '星星北京奥体'
    },
      {
        'id': '3',
        'movieAddress': '北京顺义'
      }
    ];
    let qiTa = [{
      'id': '0',
      'movieAddress': city + '中心'
    }
    ];
    if (city === '苏州市') {
      list = suZhou;
    } 
    else if (city === '上海市') {
      list = shangHai;
    } 
    else if (city === '北京市') {
      list = beiJing;
    }
    else {
      list = qiTa;
    };

    this.setData({
      movieAddressList: list
    })
    console.log('show->' + this.data.begin)
  },


  //选择影城并返回首页
  bindMovieAddress: function(e) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 3];
    wx.setStorageSync('localCityName', this.data.begin)
    wx.setStorageSync('localMovieAddress', this.data.movieAddressList[e.currentTarget.dataset.id].movieAddress)
    e.currentTarget.dataset
    prevPage.setData({
      movieAddress: this.data.movieAddressList[e.currentTarget.dataset.id].movieAddress,
      //  movieAddress: this.data.movieAddress
    })
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.switchTab({
      url: '/' + prevPage.route
    })
  }
})