// pages/chooseMovie/chooseMovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeName: 'CGV影城(苏州中心店)',
    movieAddress: '江苏省苏州市姑苏区直属镇湖左岸社区北方向',
    movieTel: '0512-69881886',
    currentTab: 0,
    swiperIndex:0,
    swiperCurrent:0,
    name: '',
    time: '',
    grade: '',
    type: '',
    imgUrl:'',
    hall: [{
        id: 1,
        name: '全部'
      }, {
        id: 2,
        name: '3D'
      }, {
        id: 3,
        name: 'IMAX'
      }
      //, { id: 3, name: '国语影厅' }, { id: 4, name: '个性影厅' }, { id: 5, name: '123' }, { id: 6, name: '2D' }, { id:7, name: '英文' },
      // {id: 8, name: '超级影厅' }, { id: 9, name: 'VIP' }
    ],
    date: ['今天 01-16', '明天 01-17', '后天 01-18', '周五 01-19', '周六 01-20', '周日 01-21'],
    movieList: [{
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=94b4308ff1c464cbe5c939576eacd31b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F89e207928e4ba2a9877b06ec87c6ab71.jpg',
        name:'大黄蜂',
        time:'119分钟',
        grade:'9.3分',
        type:'动作/冒险/科幻',
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=77c8b34af1b44fd990e6e201df49f827&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F20%2F20140320140243_5MySw.jpeg',
        name: '海王',
        time: '119分钟',
        grade: '9.3分',
        type: '动作/冒险/科幻',
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378838&di=e01f784abb225d79416180122bc456e1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0118cf5837d75ea801219c77f35e67.jpg',
        name: '印度暴徒',
        time: '119分钟',
        grade: '9.3分',
        type: '动作/冒险/科幻',
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378837&di=6127169e3cc9a444bf43da0906e9a57b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce8b582439aea84a0e282ba855d9.jpg',
        name: '情圣2',
        time: '119分钟',
        grade: '9.3分',
        type: '动作/冒险/科幻',
      }
    ],

    showTime: [{ beginTime: '17:10', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price:'36.9'},
      { beginTime: '17:10', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:10', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:10', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:10', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' }],

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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.hall[0].checked = true;
    this.setData({
      name: this.data.movieList[0].name,
      time: this.data.movieList[0].time,
      grade: this.data.movieList[0].grade,
      type: this.data.movieList[0].type,
      imgUrl: this.data.movieList[0].url,
      hall: this.data.hall,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   *  点击图片放大
   */
  previewImg: function(e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.movieList;
    var itembox = "this.data.movieList[" + index + "].movieBoxCls";
    var itemimg = "this.data.movieList[" + index + "].movieImageCls";
    this.setData({
      [itembox]: 'selectedMovieBox',
      [itemimg]: 'selectedMovieImage'
    })
  },

  // 参数点击响应事件
  hallTap: function(e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.hall //获取Json数组
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true; //当前点击的位置为true即选中
      } else {
        parameterList[i].checked = false; //其他的位置为false
      }
    }
    that.setData({
      hall: parameterList
    })
  },

  //点击切换
  clickTab: function(e) {
    var showTimeR= [{ beginTime: '17:20', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:20', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:20', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:20', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' },
      { beginTime: '17:20', endTime: '20:20', address: '3号厅', addressDetial: '2DMAX', price: '36.9' }];
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.currentTarget.dataset.current,
        showTime:showTimeR
      })
    }
  },

  map:function(){
      wx.openLocation({
        latitude: 31.3152860000,
        longitude: 120.6780030000,
        name: "CGV影城(苏州中心店) ",
        scale: 12,
        address: '江苏省苏州市姑苏区直属镇湖左岸社区北方向'
      })
  },

  //轮播滑动时，获取当前的轮播id
swiperChange(e) {
  const that = this;
  that.setData({
    name: this.data.movieList[e.detail.current].name,
    time: this.data.movieList[e.detail.current].time,
    grade: this.data.movieList[e.detail.current].grade,
    type: this.data.movieList[e.detail.current].type,
    imgUrl: this.data.movieList[e.detail.current].url,
    swiperIndex: e.detail.current,
  })
},

//点击图片触发事件
swipclick: function (e) {
  const that = this;
  that.setData({
    name: this.data.movieList[e.currentTarget.dataset.index].name,
    time: this.data.movieList[e.currentTarget.dataset.index].time,
    grade: this.data.movieList[e.currentTarget.dataset.index].grade,
    type: this.data.movieList[e.currentTarget.dataset.index].type,
    imgUrl: this.data.movieList[e.currentTarget.dataset.index].url,
    swiperIndex: e.currentTarget.dataset.index,
    swiperCurrent: e.currentTarget.dataset.index,
  })
},

  toInstruction:function(){
    wx.navigateTo({
      url: '../chooseMovie/hallInstruction/hallInstruction',
    })
  }

})