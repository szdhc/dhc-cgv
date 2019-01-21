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

    // 开启导航条加载动画 
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + Id,
      method: "GET",
      header: {
        'Content-Type': 'json',
      },
      success: (({ data }) => {
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
   //   点击想看
    clickWant(e) {
    this.setData({
      wantFlag: !this.data.wantFlag
    })
    // wantFilms
    if (this.data.wantFlag) {
      wx.request({
        url: this.data.IP + '/users/update',
        data: {
          _id: wx.getStorageSync("userId"),
          film: e.currentTarget.id,
          isPush: true
        },
        success: ((res) => {
        })
      })
      wx.showToast({
        title: '已标记想看',
        icon: 'success',
        duration: 1500
      })
    } else {
      wx.request({
        url: this.data.IP + '/users/find',
        data: {
          _id: wx.getStorageSync("userId")
        },
        success: ((res) => {
          wx.request({
            url: this.data.IP + '/users/update',
            data: {
              _id: wx.getStorageSync("userId"),
              film: res.data.film.filter(item => item != e.currentTarget.id)
            },
            success: ((res) => {
            })
          })
        })
      })
      wx.showToast({
        title: '已取消想看',
        icon: 'success',
        duration: 1500
      })
    }
  },
})