var QQMapWX = require('../../qqmap-wx-jssdk/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var util = require('../../utils/util.js');
const app = getApp()
Page({
  data: {
    windowHeight: 0,
    reach: '',
    statusBarHeight: app.globalData.statusBarHeight,
    nonet: true,
    state: '',
    message: '',
    adHeight: 50,
    sanHidden: true,
    chaHidden: false,
    isPopping: false, //是否已经弹出
    animationPlus: {}, //旋转动画
    animationTranspond: {}, //item位移,透明度
    // openid: '',
    movieAddress: '',
    currProvince: '',
    currCity: '',
    latitude1: 0.0,
    longitude1: 0.0,
    // --------------------------------------------------------------//
    navbar: ['热映', '待映'],
    currentTab: 0,
    moreTab1: 0,
    moreTab2: 0,
    loader: 0,
    formId: [],
    mylikeList: [],
    start: 0,
    count: 40,
    hotCount: 0,
    comingCount: 0,
    fixedCount1: 7,
    fixedCount2: 7,
    comingMovieList: [{
      movieImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg',
      movieName: '阿丽塔：战斗天使',
      movieShow: '阿丽塔：战斗天使',
      movieDirectorStarring: '主演：罗莎·萨拉查;克里斯托弗·沃尔兹;基恩·约翰逊',
      movieType1: '../../images/4DX.png',
      movieType2: '../../images/IMAX.png',
      movieStatus: '预售',
      id: 1652592,
      wishCount: 14206,
      wantFlag: 0,
      movieOntime: '2019-02-22',
      url: '../index/filmDetails/filmDetails',
    }],
    hotMovieList: [{
        movieImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg',
        movieName: '流浪地球',
        movieShow: '流浪地球',
        movieDirectorStarring: '主演：屈楚萧;吴京;李光洁',
        movieType: '科幻, 灾难',
        time: '125分钟',
        movieType1: '../../images/4DX.png',
        movieType2: '../../images/IMAX.png',
        moiveGrade: '7.9分',
        movieStatus: '购票',
        id: 26266893
      },
      {
        movieImage: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541901817.jpg',
        movieName: '疯狂的外星人',
        movieShow: '疯狂的外星人',
        movieDirectorStarring: '主演：黄渤;沈腾;汤姆·派福瑞',
        moiveGrade: '6.4分',
        movieStatus: '购票'
      },
      {
        movieImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.jpg',
        movieName: '飞驰人生',
        movieShow: '飞驰人生',
        movieDirectorStarring: '主演：沈腾;黄景瑜;尹正',
        moiveGrade: '7分',
        movieStatus: '购票'
      },
      {
        movieImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541035591.jpg',
        movieName: '熊出没·原始时代',
        movieShow: '熊出没·原始时代',
        movieDirectorStarring: '主演：王宝强;鄂靖文;张全蛋',
        moiveGrade: '6.5分',
        movieStatus: '购票'
      },
    ],
    // --------------------------------------------------------//
    bannerUrls: [
      //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=94b4308ff1c464cbe5c939576eacd31b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F89e207928e4ba2a9877b06ec87c6ab71.jpg',
      //   linkUrl: ''
      // },
      // {
      //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=77c8b34af1b44fd990e6e201df49f827&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F20%2F20140320140243_5MySw.jpeg',
      //   linkUrl: ''
      // },
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
  },

  onLoad: function(options) {
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
    });
    let types = options.ask || 'in_theaters';
    wx.getSystemInfo({
      success: (res) => {
        let windowHeight = res.windowHeight

        this.setData({
          windowHeight: windowHeight
        })
      }
    })

    // 请求热映
    that.setData({
      types,

    })
    var i = setInterval(function() {
      wx.getNetworkType({
        success: function(res) {
          console.log(res);
          if (res.networkType == "none" && that.data.nonet == true) {
            that.setData({
              nonet: false
            })
            wx.showToast({
              title: '无法连接网络',
              icon: 'none',
              duration: 2000,
            })
          } else if (res.networkType != "none") {
            that.setData({
              nonet: true
            })

          }
        }
      });
    }, 2000)

    util.getLocation();
    this.hotMovies();
    this.comingMovies();

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

  onShow: function() {
    var that = this

    var movieAddress1 = wx.getStorageSync("localMovieAddress")
    var currCity1 = wx.getStorageSync('localCityName');
    that.setData({
      movieAddress: movieAddress1,
      currCity: currCity1
    })


  },
  //跳到顶部
  reachtop: function(e) {
    this.setData({
      scrollTop: 0,
      reach: 'top'
    })
  },
  //选项卡切换
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
    })
  },
  //滑动切换tab?
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current,
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
  redirct: function(e) {
    wx.navigateTo({
      url: '../index/chooseMovie/chooseMovie',
    })
    wx.setStorageSync('image', e.currentTarget.dataset.image)

  },
  //选择影城跳转事件
  jumpcinema() {
    wx.navigateTo({
      //  url: '/pages/jumpcinema/jumpcinema?ct=' + this.data.currCity,
      url: '/pages/citys/citys?cityType=begin&beginCity=' + this.data.currCity,
    })

  },
  // 点击更多
  clickMore(e) {
    if (this.data.currentTab == 0) {
      this.setData({
        moreTab1: 1,
        loader: 1,
        fixedCount1: this.data.hotCount,
      })
      this.hotMovies();
    } else if (this.data.currentTab == 1) {
      this.setData({
        moreTab2: 1,
        loader: 1,
        fixedCount2: this.data.comingCount,
      })
    }
    this.comingMovies();
  },
  // 点击想看
  clickWant(e) {
    var arrL = []
    if (this.data.currentTab == 0) {
      arrL = this.data.hotMovieList
    } else {
      arrL = this.data.comingMovieList
    }
    //  let arrL = this.data.hotMovieList;
    // let arrC = this.data.comingMovieList;
    for (let i = 0; i < arrL.length; i++) {
      if (arrL[i].id == e.currentTarget.dataset.id) {
        if (arrL[i].wantFlag == 1) {
          // wx.request({
          //   url: this.data.IP + '/users/update',
          //   data: {
          //     _id: wx.getStorageSync("userId"),
          //     film: e.currentTarget.id,
          //     isPush: true,
          //   },
          //   success: ((res) => {})
          // })
          wx.showToast({
            title: '已取消想看',
            icon: 'success',
            duration: 1500
          })
          arrL[i].wantFlag = 0;
          arrL[i].wishCount--;
          // for (let j = 0; j < arrC.length; j++) {
          //   if (arrC[j].id == e.currentTarget.dataset.id) {
          //     arrC[j].wantFlag = 0;
          //     arrC[j].wishCount--;
          //   }
          // }
          // this.setData({
          //   comingMovieList: this.data.comingMovieList,
          //   hotMovieList: this.data.hotMovieList,
          // })
        } else {
          // wx.request({
          //   url: this.data.IP + '/users/find',
          //   data: {
          //     _id: wx.getStorageSync("userId")
          //   },
          //   success: ((res) => {
          //     wx.request({
          //       url: this.data.IP + '/users/update',
          //       data: {
          //         _id: wx.getStorageSync("userId"),
          //         film: res.data.film.filter(item => item != e.currentTarget.id),
          //         wantFlag: 0
          //       },
          //       success: ((res) => {})
          //     })
          //   })
          // })
          wx.showToast({
            title: '已标记想看',
            icon: 'success',
            duration: 1500
          })
          arrL[i].wantFlag = 1;
          arrL[i].wishCount++;
          // for (let j = 0; j < arrC.length; j++) {
          //   if (arrC[j].id == e.currentTarget.dataset.id) {
          //     arrC[j].wantFlag = 1;
          //     arrC[j].wishCount++;
          //   }
          // }
        }
        if (this.data.currentTab == 0) {
          this.setData({
            hotMovieList: arrL,
          })
        } else {
          this.setData({
            comingMovieList: arrL,
          })
        }
        wx.setStorageSync("comingMovieList", arrL);
      }
    }


    wx.login({
      //获取code
      success: function(res) {
        var code = res.code; //返回code
        var appId = 'wx63d0ceeaaa99addf';
        var secret = '66b516b96c871fa8567791a789041219';
        // wx.showToast({
        //   title: '加载中',
        //   icon: 'loading',
        //   mask: true
        // }) 
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function(res) {
            var openid = res.data.openid //返回openid
            var token = res.data.session_key //返回openid
            wx.setStorageSync("openid", openid);
            wx.setStorageSync("access_token", token);
          }
        })
      }
    })


  },

  formSubmit: function(e) {
    // let arrL = this.data.comingMovieList
    // for (let i = 0; i < arrL.length; i++) {
    //   if (arrL[i].id == e.currentTarget.dataset.id) {
    //     arrL[i].formId = e.detail.formId // 获取formid
    //   }
    // }
    // this.setData({
    //   comingMovieList: arrL
    // })
    // for (let i = 0; i < arrL.length; i++) {
    //   if (arrL[i].formId != '') {
    //     this.data.mylikeList[i] = arrL[i];
    //   }
    // }

    // //服务通知
    // let access_token = wx.getStorageSync("access_token");
    // let openid = wx.getStorageSync("openid");
    // console.log('https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token,)
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token,

    //   data: {
    //     "touser": openid,
    //     "template_id": 'n3vyeuNm3XT0OpkXJvpZzeOEXJ6EqwBQ0TZxJcgKPJI',
    //     "form_id": this.data.mylikeList[0].formId,
    //     "data": {
    //       "keyword1": {
    //         "value": "想看电影通知"
    //       },
    //       "keyword2": {
    //         "value": "您想看的电影《" + this.data.mylikeList[0].movieName + "》上映啦"
    //       },
    //       "keyword3": {
    //         "value": "" + this.data.mylikeList[0].movieOntime
    //       }
    //     },
    //     method: 'oost', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //     // header: {}, // 设置请求的 header
    //     header: {
    //       'content-type': 'json'
    //     },
    //     success: function() {
    //       // success
    //       console.log(res.data)

    //     },
    //   }
    // })
  },
  hotMovies() {
    this.setData({
      loader: 1
    })
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true
    }) 
    wx.request({
      url: `https://douban.uieee.com/v2/movie/${this.data.types}&start=${this.data.start}&count=${this.data.count}`,
      method: "GET",
      header: {
        'Content-Type': 'json',
      },
      success: ({
        data
      }) => {
        let height = 380;
        let arr = [];
        let movieObj = new Map();
        for (let i = 0; i < this.data.fixedCount1; i++) {
          if (data.subjects[i].mainland_pubdate.replace(/-/g, '') < '20190225') {
            movieObj.set('movieImage', data.subjects[i].images['small'])
            movieObj.set('movieName', data.subjects[i].title)
            movieObj.set('movieShow', data.subjects[i].title)
            let casts = '主演：';
            for (let k = 0; k < data.subjects[i].casts.length; k++) {
              casts = casts + data.subjects[i].casts[k].name
              if (k + 1 != data.subjects[i].casts.length) {
                casts = casts + ';'
              }
            }
            movieObj.set('movieDirectorStarring', casts)
            movieObj.set('movieType', data.subjects[i].genres)
            movieObj.set('time', data.subjects[i].durations[0])

            if (data.subjects[i].rating.average > 6) {
              movieObj.set('movieType1', '../../images/4DX.png')
              movieObj.set('movieType2', '../../images/IMAX.png')
            } else {
              movieObj.set('movieType1', '')
              movieObj.set('movieType2', '')
            }

            if (data.subjects[i].mainland_pubdate.replace(/-/g, '') >= '20190214') {
              movieObj.set('movieStatus', '预售')
              movieObj.set('wishCount', data.subjects[i].collect_count)
              movieObj.set('wantFlag', 0)
              movieObj.set('moiveGrade', data.subjects[i].rating.average + '分')
            } else {
              movieObj.set('movieStatus', '购票')
              movieObj.set('moiveGrade', data.subjects[i].rating.average + '分')
            }
            movieObj.set('id', data.subjects[i].id)
            arr.push(JSON.parse(util.MapTOJson(movieObj)))
            height = height + 200;
          }
        }
        this.setData({
          hotCount: data.subjects.length,
          hotMovieList: arr,
          loader: 0,
          sanUrl: '../../images/san.png',
          adUrl: '../../images/ad.png',
          chaUrl: '../../images/cha.png',
        })
        console.log(data)
        console.log(arr)
        wx.setStorageSync("hotMovieList", this.data.hotMovieList);
      }
    })
  },
  comingMovies() {
    this.setData({
      loader: 1
    })
    wx.request({
      url: `https://douban.uieee.com/v2/movie/${this.data.types}&start=${this.data.start}&count=${this.data.count}`,
      method: "GET",
      header: {
        'Content-Type': 'json',
      },
      success: ({
        data
      }) => {
        let number = 0;
        let height = 340;
        let arr2 = [];
        let movieObj2 = new Map();
        // 获取当前时间
        var myDate = new Date();
        let localeDate = parseInt('' + myDate.getFullYear() + myDate.getMonth() + 1 + myDate.getDate());
        for (let i = 0; i < data.subjects.length; i++) {
          if (data.subjects[i].mainland_pubdate.replace(/-/g, '') >= '20190225') {
            number++;
            if (number <= this.data.fixedCount2) {
              movieObj2.set('movieImage', data.subjects[i].images['small'])
              movieObj2.set('movieName', data.subjects[i].title)
              movieObj2.set('movieShow', data.subjects[i].title)
              movieObj2.set('movieOntime', data.subjects[i].mainland_pubdate)
              let casts = '主演：';
              for (let k = 0; k < data.subjects[i].casts.length; k++) {
                casts = casts + data.subjects[i].casts[k].name
                if (k + 1 != data.subjects[i].casts.length) {
                  casts = casts + ';'
                }
              }
              movieObj2.set('movieDirectorStarring', casts)
              if (data.subjects[i].rating.average > 6) {
                movieObj2.set('movieType1', '../../images/4DX.png')
                movieObj2.set('movieType2', '../../images/IMAX.png')
              } else {
                movieObj2.set('movieType1', '')
                movieObj2.set('movieType2', '')
              }
              movieObj2.set('movieStatus', '预售')
              movieObj2.set('id', data.subjects[i].id)
              movieObj2.set('wishCount', data.subjects[i].collect_count)
              movieObj2.set('wantFlag', 0)
              movieObj2.set('formId', '')
              arr2.push(JSON.parse(util.MapTOJson(movieObj2)))
              height = height + 200;
            }
          }
        }
        this.setData({
          comingCount: number,
          comingMovieList: arr2,
          loader: 0,
        })
      }
    })
  },
  //点击弹出
  plus: function(e) {
    popp.call(this);
  },
  chaback: function() {
    takeback.call(this);
  },
  transpond: function() {
    console.log("transpond")
  },
})
//弹出动画
function popp() {
  var animationPlus = wx.createAnimation({
    duration: 300,
    timingFunction: 'ease-out'
  })

  var animationTranspond = wx.createAnimation({
    duration: 300,
    timingFunction: 'ease-out'
  })
  // animationPlus.opacity(0).step();
  animationTranspond.translate(0, 0).step();
  this.setData({
    chaHidden: false,
    sanHidden: true,
    adHeight: 50,
    animationPlus: animationPlus.export(),
    animationTranspond: animationTranspond.export(),
  })
}

function takeback() {
  var animationPlus = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var animationTranspond = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  animationPlus.rotateZ(0).step();
  animationTranspond.translate(0, -60).step();
  this.setData({
    adHeight: 4,
    chaHidden: true,
    sanHidden: false,
    animationPlus: animationPlus.export(),
    animationTranspond: animationTranspond.export(),
  })
}