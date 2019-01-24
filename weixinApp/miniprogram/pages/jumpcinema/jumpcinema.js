const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    begin: '',
    cinema: '',
    movieAddressList: [{
        'id': '0',
        'movieAddress': 'CGV影城苏州中心店'
      },
      {
        'id': '1',
        'movieAddress': 'CGV影城昆山广场店'
      }
    ]

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
      url: '../citys/citys?cityType=begin',
    })
  },
  onShow: function() {
    this.getMovieAddressList(this.data.begin);
  },
  //TODO 通过api来设置list值
  getMovieAddressList: function(city) {
    let list = [];
    let suzhou = [{
        'id': '0',
        'movieAddress': 'CGV影城苏州中心店'
      },
      {
        'id': '1',
        'movieAddress': 'CGV影城昆山广场店'
      }
    ];
    let shanghai = [{
        'id': '0',
        'movieAddress': 'CGV影城shanghai中心店'
      },
      {
        'id': '1',
        'movieAddress': 'CGV影城waitan广场店'
      },
      {
        'id': '2',
        'movieAddress': 'CGV影城waitan店'
      }
    ];
    if (city === '苏州市') {
      list = suzhou;
    } else {
      list = shanghai;
    };

    this.setData({
      movieAddressList: list
    })
    console.log('show->' + this.data.begin)
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