// pages/yugao/yugao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movieData:{},
     lookArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + id,
      method:"GET",
      header:{
        'Content-Type': 'json',
      },
      success:(({data}) => {
        this.setData({
          movieData:data,
        })
        let imagepic = data.images.large;
        let { title, id} = data;
        let arr = [];

        // 先从缓存中取出数据
        let n = wx.getStorageSync('looklist')
       
       
        //扩展到数组arr上
        arr = [...arr,...n]


        //存入播放的那个数据

        let obj = { title, id, imagepic}

        let isHas = arr.some(el => el.id === obj.id);

        if(!isHas){
          arr.push(obj)
        }
        
        this.setData({
          lookArr:arr,
        })

        
        //做缓存
        wx.setStorage({
          key: 'looklist',
          data: this.data.lookArr,
        })


      })
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
  
  }
})