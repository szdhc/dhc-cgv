Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    topmsg: '特惠套餐',
    openid: '',
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

    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    },
  },

  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
    });
    this.setData({
      openid: getApp().globalData.openid
    })
  },

  onShow: function () {
    let vm = this;
    this.getLocation();
    qqmapsdk.getCityList({
      success: function (res) {
        console.log(res);
        console.log('省份数据：', res.result[0]); //打印省份数据
        console.log('城市数据：', res.result[1]); //打印城市数据
        console.log('区县数据：', res.result[2]); //打印区县数据
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
    // 调用接口
    qqmapsdk.search({
      keyword: 'CVG影城',
      success: function (res) {
        console.log('CVG影城:' + res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });

  },
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        // success  
        var latitude = res.latitude
        var longitude = res.longitude
        vm.getLocal(latitude, longitude);
      },
      fail: function (res) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      },
    });
  },


  //获取当前地理位置
  getLocal: function (latitude, longitude) {
    var that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        that.setData({
          currProvince: res.result.address_component.province,
          currCity: res.result.address_component.city
        })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  //轮播高度自适应——获取图片高度
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width; //图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH //设置高度
    })
  },

  onLoad: function () {
    return;
  },
  ontap1() {
    this.setData({
      topmsg: '特惠套餐'
    });
  },
  ontap2() {
    this.setData({
      topmsg: '电影周边'
    })
  },
  ontap3() {
    this.setData({
      topmsg: '冰激凌'
    })
  },
  ontap4() {
    this.setData({
      topmsg: '爆米花'
    })
  },
  ontap5() {
    this.setData({
      topmsg: '瓶装饮料'
    })
  },
  ontap6() {
    this.setData({
      topmsg: '现调饮料'
    })
  },
  ontap7() {
    this.setData({
      topmsg: '小食品'
    })
  },

  // 购物须知跳转事件
  jumpPage() {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  }

})
