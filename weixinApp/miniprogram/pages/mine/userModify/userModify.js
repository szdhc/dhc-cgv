// pages/userModify/userModify.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    username: '',
    sex: ['男', '女'],
    birthday: '未完善',
    memorial: '未完善',
    cinemasort: ['未完善', '2D', '3D', '3DMAX'],
    haveChild: ['未完善', '有', '无'],
    marry: ['未完善', '是', '否'],
    casIndex: 0,
    cinemaindex:0,
    childindex:0,
    marryIndex:0,
    region: ['广东省', '广州市', '海珠区'],
    //hiddenmodalput: true,
    //hiddenmodalpsdput: true,
    userSurname:'未完善',
    password:'',
    //hiddenmodalmovieput:true,
    likeMovie:'未完善'
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框  
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (Object.keys(app.globalData.userInfo).length != 0){
      this.setData({
        avatarUrl: app.globalData.userInfo.avatarUrl,
        username: app.globalData.userInfo.nickName,
      });
    }
    
    if (options.sex == '男'){
      this.setData({
        sex: [options.sex,'女']
      });
    } else if (options.sex == '女'){
      this.setData({
        sex: [options.sex, '男']
      });
    }
      
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
    
    this.setData({
      userSurname: wx.getStorageSync("userSurname"),
      birthday:wx.getStorageSync("birthday"),
      password:wx.getStorageSync("password"),
      likeMovie:wx.getStorageSync("likeMovie"),
      cinemaindex:wx.getStorageSync("cinemaindex"),
      memorial:wx.getStorageSync("memorial"),
      region:wx.getStorageSync("region"),
      marryIndex:wx.getStorageSync("marryIndex"),
      childindex:wx.getStorageSync("childindex")
    })
    if (this.data.birthday === '' || this.data.memorial === '') {
        this.setData({
          userSurname: '未完善',
          birthday: '未完善',
          password: '未完善',
          likeMovie: '未完善',
          cinemaindex:'0',
          cinemasort: ['未完善', '2D', '3D', '3DMAX'],
          memorial: '未完善',
          region: ['广东省', '广州市', '海珠区'],
          marryIndex: '0',
          childindex: '0'
        })
    }
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
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
  },
  bindViewEvent: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  bindmemorialEvent: function (e) {
    this.setData({
      memorial: e.detail.value
    })
  },
  bindCinemasort: function (e) {
    this.setData({
      cinemaindex: e.detail.value
    })
  },
  bindMarry: function (e) {
    this.setData({
      marryIndex: e.detail.value
    })
  },
  bindHaveChild: function (e) {
    this.setData({
      childindex: e.detail.value
    })
  },
  /**
   * 点击确定按钮，保存修改信息
   */
  modefySubmit(){
    wx.setStorageSync("userSurname", this.data.userSurname);
    wx.setStorageSync("birthday", this.data.birthday)
    wx.setStorageSync("password", this.data.password)
    wx.setStorageSync("likeMovie", this.data.likeMovie)
    wx.setStorageSync("cinemaindex", this.data.cinemaindex)
    wx.setStorageSync("memorial", this.data.memorial)
    wx.setStorageSync("region", this.data.region)
    wx.setStorageSync("marryIndex", this.data.marryIndex)
    wx.setStorageSync("childindex", this.data.childindex)
    
    app.globalData.userInfo.avatarUrl = app.globalData.headUrl;
    console.log(app.globalData.userInfo.avatarUrl, app.globalData.headUrl)
    wx.showToast({
      title: '信息已经保存',
      icon: 'success',
      duration: 2000
    });
    // wx.redirectTo({
    //   url: '../userInfo/userInfo',
    // })
    wx.navigateBack({
      delta: 1
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  //点击按钮弹出指定的hiddenmodalput弹出框  
  // modalinput: function (e) {
  //   this.setData({
  //     hiddenmodalput: !this.data.hiddenmodalput,
  //   })
    
  // },
  //取消按钮  
  // cancel: function () {
  //   this.setData({
  //     hiddenmodalput: true
  //   });
  // },
  //确认  
  // confirm: function (e) {
  //   this.setData({
  //     hiddenmodalput: true
  //   })
  //   wx.showToast({
  //     title: '提交成功',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // },
  getUserSurname: function(e){
    this.setData({
      userSurname: e.detail.value
    })
    if (this.data.userSurname == '') {
      this.setData({
        userSurname: '未完善'
      })
    }
  },
  // modalpsd: function(){
  //   this.setData({
  //     hiddenmodalpsdput: !this.data.hiddenmodalpsdput,
  //   })
  // },
  // psdcancel: function () {
  //   this.setData({
  //     hiddenmodalpsdput: true
  //   });
  // },
  // //确认  
  // psdconfirm: function (e) {
  //   this.setData({
  //     hiddenmodalpsdput: true
  //   })
  //   wx.showToast({
  //     title: '提交成功',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // },
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },





  // modalmovie: function () {
  //   this.setData({
  //     hiddenmodalmovieput: !this.data.hiddenmodalmovieput,
  //   })
  // },
  // moviecancel: function () {
  //   this.setData({
  //     hiddenmodalmovieput: true
  //   });
  // },
  // //确认  
  // movieconfirm: function (e) {
  //   this.setData({
  //     hiddenmodalmovieput: true
  //   })
  //   wx.showToast({
  //     title: '提交成功',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // },
  getLikeMovie: function (e) {
    this.setData({
      likeMovie: e.detail.value
    })
    if(this.data.likeMovie==''){
      this.setData({
        likeMovie: '未完善'
      })
    }
  },

  // 上传图片
  doUpload: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        upload(that, tempFilePaths);
      }
    })
  }, 
})

function upload(page, path) {
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    // wx.cloud.deleteFile({
    // fileList: [app.globalData.headUrl],
    //   success: res => {
    //     // handle success
    //     console.log('删除的:' + res.fileList)
    //   },
    //   fail: err => {
    //     console.log(err.errCode, err.errMsg)
    //   }
    // })
    wx.cloud.uploadFile({
      //TODO 没有上传的服务器暂用自带云开发
    cloudPath: 'image/' + app.globalData.userInfo.nickName + '.png',
      filePath: path[0],
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        app.globalData.headUrl = path[0]
        page.setData({  //上传成功修改显示头像
          avatarUrl: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}