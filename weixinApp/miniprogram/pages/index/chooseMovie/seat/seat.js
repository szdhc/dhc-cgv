// pages/index/chooseMovie/seat/seat.js
var seatsId = []
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 是否跳选
function checkSeats(map){
  for(var i = 0; i < map.length ; i++){
    for(var j = 1; j < map[i].length; j++){
      if (map[i][j] === 3) {
        if (map[i][j + 1] === 1 && map[i][j + 2] === 3) {
          return false;
        }
      }
    }
  }
  return true;
}

// 找座算法
function searchseats(fromrow, torow, num, map){
  var distanceToMid = 1000
  var finalReuslt = []
  for (var i = fromrow; i < torow; i++){
    // 连坐个数
    var count = 0
    var recommond = []
    // 最后一个座位下标
    var last = 0
    // 到中心的距离
    var rowdistanceToMid = 1000
    // 每行最佳位置
    var rowfinalReuslt = []
    for (var j = 1; j < map[i].length; j++){
      // 已选
      if (map[i][j] === 2){
        count = 0
        recommond = []
        last = 0
        // 可选
      } else if (map[i][j] === 1){
        count++
        // 如果连坐数大于要选的数目，清楚最左边的
        if(count > num){
          recommond.shift()
        }
        recommond.push(i+"-"+j)
        last = j
      }

      if (count >= num){
        // 计算最右边位置到中心的距离
        var mid = map[i].length / 2
        var distance = 0
        if(last < mid){
          distance = mid - last
        }else{
          distance = last - mid
        }

        if (rowdistanceToMid > distance + num / 2){
          rowdistanceToMid = distance + num / 2
          rowfinalReuslt = recommond
          // 正好在正中间
          if (rowdistanceToMid === 0 + num / 2 || rowdistanceToMid === 0.5 + num / 2){
            return rowfinalReuslt
          }
        }else{
          // 到中心的距离应该是先变小再变大，如果开始变大就说明已经越过中心位置了，所以不用再循环了
          if (distanceToMid > rowdistanceToMid) {
            distanceToMid = rowdistanceToMid
            finalReuslt = rowfinalReuslt
            break
          }
        }
      }
    }

    // 每行中心距离比较，取靠中心近的
    if (distanceToMid > rowdistanceToMid){
      distanceToMid = rowdistanceToMid
      finalReuslt = rowfinalReuslt
    }

  }
  return finalReuslt
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: { shop: 'CGV影城(苏州中心店)', time: '今天 1月21号 16:25', effects: '英语3D', room: '3DIMAX厅', center: 7, price: 36.2,},
    map: [],
    deltaX:60,
    sX:0,
    scaleWidth:36,
    scaleHeight:32,
    colWidth:36,
    colHeight: 50,
    olddistance:0,
    scale:1,
    sY:0,
    money:0,
    deltaY:0,
    seats:[],
    willChange: false,
    hasSelected: false,
    seatmap: [[1, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [1, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[1, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 1, 1]]
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
    var columnArr = []
    var map = this.data.seatmap
    var row = 0
    for (var i = 0; i < map.length; i++) {
      var total = 0
      for (var j = 0; j < map[i].length; j++) {
        total = total + map[i][j]
      }
      if(total > 0){
        columnArr.push(i + 1 - row)
      }else{
        row++
        columnArr.push("")
      }
    }
    var money = this.data.seats.length * this.data.shop.price
    this.setData({
      money: money.toFixed(1),
      columnArr: columnArr
    })
    wx.showModal({
      title: '温馨提示',
      content: '儿童需要自行购票',
      showCancel: false,
    })
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

  scrollstart: function (ev) {
    if (ev.touches.length == 1) {
    this.sX = ev.changedTouches[0].clientX
    this.sY = ev.changedTouches[0].clientY
    this.setData({
      willChange: true
    })
    console.log(ev)
    }
  },

  scrollmove: function (e) {
    if (e.touches.length == 1) {
      var mX = e.changedTouches[0].clientX
      var mY = e.changedTouches[0].clientY
      var deltaX = (mX - this.sX) / 2
      var deltaY = (mY - this.sY) / 2
      this.setData({
        deltaX: deltaX,
        deltaY: deltaY
      })
    }


    // 单手指缩放不做任何操作
    if (e.touches.length == 2) {
      let xMove = e.touches[1].clientX - e.touches[0].clientX
      let yMove = e.touches[1].clientY - e.touches[0].clientY
      // 新的 ditance 
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);
      let distanceDiff = distance - this.data.olddistance;
      let newScale = this.data.scale + 0.005 * distanceDiff
      // 为了防止缩放得太大，所以scale需要限制，同理最小值也是 
      if (newScale >= 2) {
        newScale = 2
      }
      if (newScale <= 0.6) {
        newScale = 0.6
      }
      let scaleWidth = newScale * 36
      let scaleHeight = newScale * 32
      let colWidth = newScale * 36
      let colHeight = newScale * 50
      // 赋值 新的 => 旧的
      this.setData({
        scale: newScale,
        olddistance: distance,
        scaleWidth: scaleWidth,
        scaleHeight: scaleHeight,
        colWidth: colWidth,
        colHeight: colHeight
      })
    }
  },

  scrollend: function (ev) {
    if (ev.touches.length == 1) {
    var eX = ev.changedTouches[0].clientX
    var eY = ev.changedTouches[0].clientY
    console.log(ev)
    this.setData({
      willChange: false
    })
    }
  },

  // 点击选座
  selectSeat: function (ev) {
    var ver = ev.currentTarget.dataset.ver
    var hor = ev.currentTarget.dataset.hor
    var map = this.data.seatmap
    map[ver][hor] = 3
    if (!checkSeats(map)){
      wx.showToast({
        title: '不能跳座空座',
        icon: 'success',
        duration: 2000
      })
      map[ver][hor] = 1
      return;
    }
    var seats = []
    var cStr = ''
    if (this.data.seats.length < 4) {
      seatsId = []
      var row = 0
      for (var i = 0; i < map.length; i++) {
        var total =0
        for (var j = 0; j < map[i].length; j++){
          total = total + map[i][j]
        }
        if(total === 0){
          row++
        }
        var col = 0
        for (var j = map[i].length; j >= 0; j--) {
          if (map[i][j] === 0){
            col++
          }
          if (map[i][j] === 3) {
            cStr = formatNumber(i + 1 - row) + '排' + formatNumber(map[i].length - j - col) + '座'
            seats.push(cStr)
            seatsId.push(i + "-" + j)
          }
        }
      } 
      var money = seats.length * this.data.shop.price
      this.setData({
        money: money.toFixed(1),
        seatmap: map,
        seats: seats
      })
    }
    else {
      wx.showToast({
        title: '最多选4个座位',
        icon: 'success',
        duration: 2000
      })
      map[ver][hor] = 1
    }
  },

  // 点击座位取消选座
  cancelSeat: function (ev) {
    var ver = ev.currentTarget.dataset.ver
    var hor = ev.currentTarget.dataset.hor
    var cStr = ''
    var seats = []
    console.log(ev)
    var map = this.data.seatmap
    map[ver][hor] = 1
    if (!checkSeats(map)) {
      wx.showToast({
        title: '不能跳座空座',
        icon: 'success',
        duration: 2000
      })
      map[ver][hor] = 3
      return;
    }
    seatsId = []
    var row = 0
    for (var i = 0; i < map.length; i++) {
      var total = 0
      for (var j = 0; j < map[i].length; j++) {
        total = total + map[i][j]
      }
      if (total === 0) {
        row++
      }
      var col = 0
      for (var j = map[i].length; j >= 0; j--) {
        if (map[i][j] === 0) {
          col++
        }
        if (map[i][j] === 3) {
          cStr = formatNumber(i + 1 - row) + '排' + formatNumber(map[i].length - j - col) + '座'
          seats.push(cStr)
          seatsId.push(i + "-" + j)
        }
      }
    }
    var money = seats.length * this.data.shop.price
    this.setData({
      money: money.toFixed(1),
      seatmap: map,
      seats: seats
    })
  },

  // 点击位置信息取消选座
  cancelShop: function(e){
    var seats = []
    var seat = seatsId[e.currentTarget.dataset.id]
    var map = this.data.seatmap
    var cStr = ''
    map[seat.split("-")[0]][seat.split("-")[1]] = 1
    if (!checkSeats(map)) {
      wx.showToast({
        title: '不能跳座空座',
        icon: 'success',
        duration: 2000
      })
      map[seat.split("-")[0]][seat.split("-")[1]] = 3
      return;
    }
    seatsId = []
    var row = 0
    for (var i = 0; i < map.length; i++) {
      var total = 0
      for (var j = 0; j < map[i].length; j++) {
        total = total + map[i][j]
      }
      if (total === 0) {
        row++
      }
      var col = 0
      for (var j = map[i].length; j >= 0; j--) {
        if (map[i][j] === 0) {
          col++
        }
        if (map[i][j] === 3) {
          cStr = formatNumber(i + 1 - row) + '排' + formatNumber(map[i].length - j - col) + '座'
          seats.push(cStr)
          seatsId.push(i + "-" + j)
        }
      }
    }
    var money = seats.length * this.data.shop.price
    this.setData({
      money: money.toFixed(1),
      seatmap: map,
      seats: seats
    })
  },

  // 确认位置信息
  confirmseats: function(){
    var seat = ' '
    for (var i = 0; i < this.data.seats.length; i++){
      seat = seat + this.data.seats[i] + ' '
    }
    wx.showModal({
      title:'确认',
      content: '您确认选择座位' + seat +'吗？',
      success:function(res){
        if(res.confirm){
          wx.navigateTo({
            url: '../seat/buyGoods/buyGoods',
          })
        }
      }
    })
  },

  // 推荐座位
  recommondseats: function(e){
    var num = e.currentTarget.dataset.num
    var row = this.data.seatmap.length / 2
    // 后半场
    var searchbackseat = searchseats(row, this.data.seatmap.length, num, this.data.seatmap)
    if (searchbackseat.length > 0){
      seatsId = searchbackseat
      var map = this.data.seatmap
      var cStr = ''
      // 把推荐出来的位置在map里面标出来
      for (var i = 0; i < seatsId.length; i++){
        map[seatsId[i].split("-")[0]][seatsId[i].split("-")[1]] = 3
      }
      var seats = []
      var row = 0
      for (var i = 0; i < map.length; i++) {
        var total = 0
        for (var j = 0; j < map[i].length; j++) {
          total = total + map[i][j]
        }
        if (total === 0) {
          row++
        }
        var col = 0
        for (var j = map[i].length; j >= 0; j--) {
          if (map[i][j] === 0) {
            col++
          }
          if (map[i][j] === 3) {
            cStr = formatNumber(i + 1 - row) + '排' + formatNumber(map[i].length - j - col) + '座'
            seats.push(cStr)
          }
        }
      }
      // 计算总价
      var money = seats.length * this.data.shop.price
      this.setData({
        money: money.toFixed(1),
        seatmap: map,
        seats: seats
      })
      return
    }

    // 前半场
    var searchfrontseat = searchseats(0, row, num, this.data.seatmap)
    if (searchfrontseat.length > 0) {
      seatsId = searchfrontseat
      var map = this.data.seatmap
      var cStr = ''
      // 把推荐出来的位置在map里面标出来
      for (var i = 0; i < seatsId.length; i++) {
        map[seatsId[i].split("-")[0]][seatsId[i].split("-")[1]] = 3
      }
      // 计算位置
      var seats = []
      var row = 0
      for (var i = 0; i < map.length; i++) {
        var total = 0
        for (var j = 0; j < map[i].length; j++) {
          total = total + map[i][j]
        }
        if (total === 0) {
          row++
        }
        var col = 0
        for (var j = map[i].length; j >= 0; j--) {
          if (map[i][j] === 0) {
            col++
          }
          if (map[i][j] === 3) {
            cStr = formatNumber(i + 1 - row) + '排' + formatNumber(map[i].length - j - col) + '座'
            seats.push(cStr)
          }
        }
      }
      var money = seats.length * this.data.shop.price
      this.setData({
        money: money.toFixed(1),
        seatmap: map,
        seats: seats
      })
      return
    }

  },


})