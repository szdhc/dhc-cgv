var QQMapWX = require('../../qqmap-wx-jssdk/qqmap-wx-jssdk.min.js');
var qqmapsdk;

// pages/index/index.js
Page({

  data: {
    // openid: '',
    movieAddress: '苏州平江万达广场店',
    currProvince: '',
    currCity: '',
    bannerUrls: [{
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=94b4308ff1c464cbe5c939576eacd31b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F89e207928e4ba2a9877b06ec87c6ab71.jpg',
        linkUrl: ''
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=77c8b34af1b44fd990e6e201df49f827&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F20%2F20140320140243_5MySw.jpeg',
        linkUrl: ''
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378838&di=e01f784abb225d79416180122bc456e1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0118cf5837d75ea801219c77f35e67.jpg',
        linkUrl: ''
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378837&di=6127169e3cc9a444bf43da0906e9a57b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce8b582439aea84a0e282ba855d9.jpg',
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
      movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;坦菲尔坦菲尔',
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
    // this.setData({
    //   openid: getApp().globalData.openid
    // })
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
        console.log('CVG影城:' + res);
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
  },
  redirct: function() {
    wx.navigateTo({
      url: '../chooseMovie/chooseMovie',
    })
  }

})