//banner.js
//轮播高度自适应——获取图片高度
function imgHeight(e) {
  var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
  var imgh = e.detail.height; //图片高度
  var imgw = e.detail.width; //图片宽度
  var swiperH = winWid * imgh / imgw + "px"
  this.setData({
    Height: swiperH //设置高度
  })
}

module.exports = {
  imgHeight: imgHeight
}