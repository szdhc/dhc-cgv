// bin/dist/ad/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sanUrl: '../../images/san.png',
    adUrl: '../../images/ad.png',
    chaUrl: '../../images/cha.png',
    sanHidden: true,
    chaHidden: false,
    isPopping: false, //是否已经弹出
    animationPlus: {}, //旋转动画
    animationTranspond: {}, //item位移,透明度
  },

  /**
   * 组件的方法列表
   */
  methods: {
//点击弹出

  transpond: function() {
    console.log("transpond")
  },

//弹出动画
plus :function popp() {
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
},

chaback: function takeback() {
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
  }
})
