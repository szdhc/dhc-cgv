var QQMapWX = require('../../qqmap-wx-jssdk/qqmap-wx-jssdk.min.js');
var qqmapsdk;

// pages/index/index.js
Page({

  data: {
    openid: '',
    movieAddress:'苏州平江万达广场店',
    currProvince: '',
    currCity: '',
    bannerUrls: [{
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      },
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      },
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      },
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    changeIndicatorDots: function(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function(e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function(e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function(e) {
      this.setData({
        duration: e.detail.value
      })
    },
    hotMovieList: [{
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '大黄蜂',
        movieShow: '大黄蜂首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.3分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '海 王',
        movieShow: '海王首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.5分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.8分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.8分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.8分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.8分',
        movieStatus: '购票'
      },
      {
        movieImage: '../../images/201812131426092692802.jpg',
        movieName: '印度暴徒',
        movieShow: '印度暴徒首部个人电影',
        movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
        moiveGrade: '9.8分',
        movieStatus: '购票'
      }
    ]
  },

  onLoad: function(options) {
    qqmapsdk = new QQMapWX({
      key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
    });
    this.setData({
      openid: getApp().globalData.openid
    })
  },

  onShow: function() {
    let vm = this;
    this.getLocation();
    qqmapsdk.getCityList({
      success: function(res) {
        console.log(res);
        console.log('省份数据：', res.result[0]); //打印省份数据
        console.log('城市数据：', res.result[1]); //打印城市数据
        console.log('区县数据：', res.result[2]); //打印区县数据
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
    });
    // 调用接口
    qqmapsdk.search({
      keyword: 'CVG影城',
      success: function(res) {
        console.log('CVG影城:'+res);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res);
      }
    });

  },
  getLocation: function() {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function(res) {
        // success  
        var latitude = res.latitude
        var longitude = res.longitude
        vm.getLocal(latitude, longitude);
      },
      fail: function(res) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      },
    });
  },


  //获取当前地理位置
  getLocal: function(latitude, longitude) {
    var that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function(res) {
        console.log(JSON.stringify(res));
        that.setData({
          currProvince: res.result.address_component.province,
          currCity: res.result.address_component.city
        })
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
    });
  },
  //轮播高度自适应——获取图片高度
  imgHeight: function(e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width; //图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH //设置高度
    })
  }

})