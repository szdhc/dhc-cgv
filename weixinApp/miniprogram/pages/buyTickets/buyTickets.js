Page({

  /**
   * 页面的初始数据
   */
  data: {
    moiveName:'big fee',
    url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
    ellipsis : true,
    moiveImage: '../../images/201812131426092692802.jpg',
    moiveType:'DOLBY 3D4DX 3DIMAX 3D3D2D',
    moiveLuanage:'中文 英文',
    moiveinstroduction:'大黄蜂首部个人电影',
    moiveGrade:'9.7分',
    buyticketsmen:'43.4万人',
    seePeople:'3076人',
    moiveAbout: '2019-01-04 上映 * 114分钟 * 美国动作'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '情圣2'
    })
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
    
  },
  /*
     *点击自定义视频封面开始播放
     */
  playvedio: function (e) {
    let vediocon = wx.createVideoContext("myvedio", this)
    vediocon.play()
    console.log(vediocon)
    this.setData({
      show: false
    })
  },
  /*
  *视频播放完毕重新上封面
  */
  endvedio: function () {
    let vediocon = wx.createVideoContext("myvedio", this)
    // vediocon.play()
    console.log(vediocon)
    this.setData({
      show: true
    })
  },
  /**
   * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
   */
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
/**
   * 收起/展开按钮点击事件
   */
  ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },

})