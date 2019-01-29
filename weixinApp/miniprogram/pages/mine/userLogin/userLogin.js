import Dialog from '../../../bin/dist/dialog/dialog';
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    phoneNo: null,  //输入的手机号
    phoneLbl: '手机号',
    phonePhd: '请输入手机号',
    smsNoInput: null,  //输入的验证码
    smsNoCode: null,  //生成的验证码
    smsLbl: '短信验证码',
    smsPhd: '请输入短信验证码',
    logosrc: '../userregister/cgvlogo.PNG',
    istelnoflg: true,  //手机号验证flg
    issmsflg: false,  //验证码验证flg
    isOk: true,  //登录button flg
    firsttime: 1,  //验证码发送次数
    second: 60,  //验证码发送间隔
    smstimestamp: null,  //验证码生成时时间

    hint: '右滑完成验证',//默认提示语
    sysW: wx.getSystemInfoSync().windowWidth,//获取屏幕宽度
    xAxial: 0,//X轴的初始值
    x: 0,//触摸时X轴的值
    w: (wx.getSystemInfoSync().windowWidth * 0.8) - 50,//滑块可移动的X轴范围
    cssAnimation: 'translate3d(0, 0, 0)',//CSS动画的初始值
    succeedMsg: '',//验证成功提示信息的默认值
    pullStatus: true,//是否允许验证成功后继续滑动
    sliderflg: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 手机号输入数字满位，滑动验证可用
   */
  bindPhoneNoInput: function (e) {
    this.setData({
      phoneNo: e.detail,  //输入的手机号
      smsNo: null,  //清空验证码
      isOk: true  //登录按钮不可用
    })
    var that = this;
    that.reset();  //滑动恢复初期状态
    if (e.detail){
      //输入的是数字并且11位
      if (e.detail.length == 11 && (/^[0-9]+$/.test(e.detail))){
        this.setData({
          istelnoflg: false
        })
      } else {
        this.setData({
          istelnoflg: true,
        })
      }
    }
  },

  /**
   * 验证码输入
   */
  bindSmsInput: function (e) {
    var that = this;
    if (e.detail) {
      //验证码是6位数字并且手机号验证及滑动验证通过
      if (e.detail.length == 6 && (/^[0-9]+$/.test(e.detail)) && !that.data.istelnoflg && that.data.sliderflg) {
        this.setData({
          isOk: false,
          smsNoInput: e.detail
        })
        } else {
          this.setData({
            isOk: true
          })
        }
    }
  },

  //滑块移动中执行的事件
  moveFun: function (e) {
    //如果验证成功后仍允许滑动，则执行下面代码块（初始值默认为允许）
    if (this.data.pullStatus) {
      //设置X轴的始点
      this.data.x = e.changedTouches[0].clientX - ((this.data.sysW * 0.1) + 25);
      //如果触摸时X轴的坐标大于可移动距离则设置元素X轴的坐标等于可移动距离的最大值，否则元素X轴的坐标等于等于当前触摸X轴的坐标
      this.data.x >= this.data.w ? this.data.xAxial = this.data.w : this.data.xAxial = this.data.x;
      //如果触摸时X轴的坐标小于设定的始点，则将元素X轴的坐标设置为0
      if (this.data.x < 25) this.data.xAxial = 0;
      //根据获取到的X轴坐标进行动画演示
      this.data.cssAnimation = 'translate3d(' + this.data.xAxial + 'px, 0, 0)';

      this.setData({
        cssAnimation: this.data.cssAnimation
      })
    }
  },

  //松开滑块执行的事件
  endFun: function () {
    //自定义组件触发事件时提供的detail对象
    var detail = {};
    //如果触摸的X轴坐标大于等于限定的可移动范围，则验证成功
    if (this.data.x >= this.data.w) {
      //元素X轴坐标等于可移动范围的最大值
      this.data.xAxial = this.data.w;
      //设置验证成功提示语
      this.data.succeedMsg = '验证成功';
      //设置detail对象的返回值
      detail.msg = true;
      //验证成功后，禁止滑块滑动
      this.data.pullStatus = false;
      this.data.sliderflg = true;
    } else {
      //元素X轴坐标归0
      this.data.xAxial = 0;
      //清空验证成功提示语
      this.data.succeedMsg = '';
      //设置detail对象的返回值
      detail.msg = false;
      this.data.sliderflg = false;
    }

    //使用triggerEvent事件，将绑定在此组件的myevent事件，将返回值传递过去
    this.triggerEvent('myevent', detail);
    //根据获取到的X轴坐标进行动画演示
    this.data.cssAnimation = 'translate3d(' + this.data.xAxial + 'px, 0, 0)';

    this.setData({
      succeedMsg: this.data.succeedMsg,
      cssAnimation: this.data.cssAnimation,
      sliderflg: this.data.sliderflg
    })
  },

  //滑块恢复默认状态
  reset: function () {
    this.setData({
      hint: '右滑完成验证',//默认提示语
      sysW: wx.getSystemInfoSync().windowWidth,//获取屏幕宽度
      xAxial: 0,//X轴的初始值
      x: 0,//触摸时X轴的值
      w: (wx.getSystemInfoSync().windowWidth * 0.8) - 50,//滑块可移动的X轴范围
      cssAnimation: 'translate3d(0, 0, 0)',//CSS动画的初始值
      succeedMsg: '',//验证成功提示信息的默认值
      pullStatus: true,//是否允许验证成功后继续滑动
      sliderflg: false,
    })
  },

  //发送验证码
  sendsms: function() {
    //生成6位随机验证码
    var that = this;
    var code = '';
    var codeLength = 6;
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    for (var i = 0; i < codeLength; i++) {
      var index = Math.floor(Math.random() * 10);
      code += random[index];
    }
    //获取当前时间戳  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp/1000;
    console.log("当前时间戳为：" + timestamp);

    this.setData({
      smsNoCode: code,
      firsttime: that.firsttime + 1,
      second: 60,
      smstimestamp: timestamp
    })
    console.log(code, that.data.smsNoCode)  //验证码

    this.resendsms(this);

    //TODO:tx云信服务请求配置
    /*wx:wx.request({
      url: '',
      data: {
        "ext": "",
        "extend": "",
        "params": [
          "验证码",
          "1234",
          "4"
        ],
        "sig": "ecab4881ee80ad3d76bb1da68387428ca752eb885e52621a3129dcf4d9bc4fd4",
        "sign": "腾讯云",
        "tel": {
          "mobile": "13788888888",
          "nationcode": "86"
        },
        "time": 1457336869,
        "tpl_id": 19
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    }) */
  },


  /**
   * 每60s允许发送一次验证码
   */
  resendsms: function(that) {
    var minussecond = null;

    var t = setInterval(function () {
      if (that.data.second == 0) {
        clearInterval(t);
        return;
      }
      minussecond = that.data.second - 1;
      that.setData({
        second: minussecond
      })
    }, 1000)

    
  },

  /**
   * TODO登录按钮
   */
  login: function(){
    var that = this;
    var pretimestamp = that.data.smstimestamp;
    //获取当前时间戳  
    var nowtimestamp = Date.parse(new Date());
    nowtimestamp = nowtimestamp / 1000;
    //前后时间间隔计算(check验证码有效期)
    var timestamp = ('000000000' + (nowtimestamp - pretimestamp)).slice(-10);
    timestamp = parseInt(timestamp % 86400 % 3600 / 60);
    console.log('时间间隔:' + timestamp);

    //用户输入验证码与最近发出验证码一致且验证码有效期未过
    if (that.data.smsNoCode == that.data.smsNoInput && timestamp < 5){
      Dialog.alert({
        message: '未开发功能'
      }).then(() => {
        // on close
      });
    } else {
      Dialog.alert({
        message: '你填错验证码了老铁！'
      }).then(() => {
        // on close
      });
    }
  }

})