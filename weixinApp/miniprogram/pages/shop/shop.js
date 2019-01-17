Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    movieAddress: '苏州平江万达广场店',
    requestResult: '',
    openid: '',
    currProvince: '',
    currCity: '',
    currentTab: 0,
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
      keyword: 'CGV影城',
      success: function (res) {
        console.log('CGV影城:' + res);
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
    var swiperH = winWid * imgh / imgw + "px" / 2
    this.setData({
      Height: swiperH //设置高度
    })
  },

  // 购物须知跳转事件
  jumpPage() {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },

  //选择影城跳转事件
  jumpcinema(){
    wx.navigateTo({
      url: '/pages/jumpcinema/jumpcinema',
    })
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})
