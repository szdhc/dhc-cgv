// pages/myPoints/myPoints.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: false,
    first_click: false,
    select: '',
    tipsshow: 'block',
    show: false,
    selectData: ['全部', '消费', '签到'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
    pointInfo: [],
    pointInfoIndex: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      pointInfo: [{
        'a': '2018-1-17',
        'b': '登录',
        'c': '+7'
      }, {
        'a': '2018-1-18',
        'b': '登录',
        'c': '+8'
      }, {
        'a': '2019-1-17',
        'b': '消费',
        'c': '-8'
      }, {
        'a': '2019-1-18',
        'b': '消费',
        'c': '-8'
      }]
    });
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

  selectTap: function() {
    this.setData({
      show: !this.data.show
    });
  },

  optionTap: function(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
    if (this.data.index == 0) {
      this.setData({
        pointInfo: [{
          'a': '2018-1-17',
          'b': '登录',
          'c': '+7'
        }, {
          'a': '2018-1-18',
          'b': '登录',
          'c': '+8'
        }, {
          'a': '2019-1-17',
          'b': '消费',
          'c': '-8'
        }, {
          'a': '2019-1-18',
          'b': '消费',
          'c': '-8'
        }]
      });
    } else if (this.data.index == 1) {
      this.setData({
        pointInfo: [{
          'a': '2019-1-17',
          'b': '消费',
          'c': '-8'
        }, {
            'a': '2019-1-18',
            'b': '消费',
            'c': '-8'
          }
        ]
      });

    } else if (this.data.index == 2) {
      this.setData({
        pointInfo: [{
          'a': '2018-1-17',
          'b': '登录',
          'c': '+7'
        }, {
            'a': '2018-1-18',
            'b': '登录',
            'c': '+8'
          }
        ]
      });
    }
  }
})