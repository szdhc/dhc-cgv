// pages/movieInfo/movieInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetails_info: {},
    filmType: '',
    wantFlag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let Id = options.id;
    let imglist = [];
    // 开启导航条加载动画 
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + Id,
      method: "GET",
      header: {
        'Content-Type': 'json',
      },
      success: (({ data }) => {
        for (let i = 0; i < data.clips.length; i++) {
          imglist: data.clips[i].resource_url
        }
        console.log(imglist)
        this.setData({
          filmDetails_info: data,
          filmType: this.options.type
        })
        console.log(data)

        //动态设置电影详情setNavigationBarTitle
        wx.setNavigationBarTitle({
          title: this.data.filmDetails_info.title,
        })

        //数据回来之后隐藏加载动画
        wx.hideNavigationBarLoading();
        //请求成功同步数据
        // console.log(this.data.moviesData)
      })
    })
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () { },
  display_text() {
    this.setData({
      hiddenFlag: !this.data.hiddenFlag
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: current // 需要预览的图片http链接列表  
    })
  },
   //   点击想看
    clickWant(e) {
    this.setData({
      wantFlag: !this.data.wantFlag
    })
    // wantFilms
    if (this.data.wantFlag) {
      // wx.request({
      //   url: this.data.IP + '/users/update',
      //   data: {
      //     _id: wx.getStorageSync("userId"),
      //     film: e.currentTarget.id,
      //     isPush: true
      //   },
      //   success: ((res) => {
      //   })
      // })
      wx.showToast({
        title: '已标记想看',
        icon: 'success',
        duration: 1500
      })
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
      //         film: res.data.film.filter(item => item != e.currentTarget.id)
      //       },
      //       success: ((res) => {
      //       })
      //     })
      //   })
      // })
      wx.showToast({
        title: '已取消想看',
        icon: 'success',
        duration: 1500
      })
    }
  },
  yugaoHander(e) {
    let Id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../yugao/yugao?id=' + Id,
    })
  },
  buy_ticket(e){
    wx.navigateTo({
      url: '../chooseMovie/chooseMovie',
    })
  }
})