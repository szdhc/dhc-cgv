// pages/mine/myLike/myLike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comingMovieList:[],
    LIKE_FLAG:0,
    hotMovieList:[{
      movieImage: '../../../images/201812131426092692802.jpg',
      movieName: '大黄蜂',
      movieShow: '大黄蜂首部个人电影',
      movieDirectorStarring: '特拉维斯·奈特/迪伦·奥布莱恩; 海莉·斯坦菲尔德;',
      moiveGrade: '9.3分',
      movieStatus: '购票',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comingMovieList:wx.getStorageSync("comingMovieList")
    })


    // let mylikeurl = wx.getStorageSync("mylikeurl")
    for (let i = 0; i < this.data.comingMovieList.length-1; i++) { 
      if (this.data.comingMovieList[i].wantFlag=='1'){
        this.setData({
          LIKE_FLAG:'1'
        })
        // this.data.comingMovieList[i].url = '/pages/index/filmDetails/filmDetails';
      }
      
    }
    
    // console.log("aaaa:" + comingMovieList)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})