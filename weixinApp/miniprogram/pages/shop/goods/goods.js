// pages/shop/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    totalPrice: 0,// 总价格
    totalCount: 0, // 总商品数
    carArray: [],
    minPrice: 20,//起送價格
    payDesc: '',
    deliveryPrice: 4,//配送費
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none'
  },

  // ------------------------goods information------------------------------
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },

  //清空购物车
  emptyCar: function (e) {
    let carA = this.data.carArray;
    if (carA != undefined && carA != null) {
      for (var i = 0; i < carA.length; i++) {
        this.data.goods.Count = 0;
      }
      this.setData({ goods: this.data.goods });
    }
    this.data.carArray = [];
    this.setData({ carArray: this.data.carArray });

    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })

    this.toggleList();
  },

  //移除商品
  decreaseCart: function (e) {
    // var index = this.data.goods.index;
    // var parentIndex = this.data.goods.parentIndex;
    // this.data.goods.forEach((good) => {
    //   good.foods.forEach((food) => {
    //     var num = this.data.goods[parentIndex].foods[index].Count;
    //     var mark = 'a' + index + 'b' + parentIndex
    //     if (food.Count > 0) {
    //       this.data.goods[parentIndex].foods[index].Count--
    //       var price = this.data.goods[parentIndex].foods[index].price;
    //       var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    //       var carArray1 = this.data.carArray.filter(item => item.mark != mark);
    //       carArray1.push(obj);
    //       console.log(carArray1);
    //       this.setData({
    //         carArray: carArray1,
    //         goods: this.data.goods
    //       })
    //       this.calTotalPrice()
    //       this.setData({
    //         payDesc: this.payDesc()
    //       })
    //     }
    //     if (num > 0) {
    //       var carArray1 = this.data.carArray.filter(item => item.num > 0)
    //       console.log(carArray1)
    //       this.setData({
    //         carArray: carArray1,
    //       })
    //     }
    //   })
    // })


    var index = this.data.goods.index;
    var parentIndex = this.data.goods.parentIndex;
    this.data.goods.Count--;
    var mark = 'a' + index + 'b' + parentIndex;
    var price = this.data.goods.price;
    var num = this.data.goods.Count;
    var name = this.data.goods.name;
    var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };

    var carArray1 = [];
    if (this.data.carArray != undefined && this.data.carArray != null) {
      for (var i = 0; i < this.data.carArray.length; i++) {
        if (this.data.carArray[i].mark == mark) {
          this.data.carArray[i].num = num;
          this.data.carArray[i].price = price;
          carArray1 = this.data.carArray;
        }
      }
    }

    carArray1 = this.data.carArray.filter(item => item.num > 0)
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })

    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })

    if (this.data.totalCount == 0) {
      this.toggleList();
    }

  },

  decreaseShopCart: function (e) {

    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;

    if (index == this.data.goods.index && parentIndex == this.data.goods.parentIndex) {
      this.data.goods.Count--;
      this.setData({ goods: this.data.goods });
    }

    var mark = 'a' + index + 'b' + parentIndex
    // var price = this.data.goods.price;
    // var num = this.data.goods.Count;
    // var name = this.data.goods.name;
    // var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };

    var carArray1 = [];
    let carArray = this.data.carArray;
    if (carArray != undefined && carArray != null) {
      for (var i = 0; i < carArray.length; i++) {
        if (carArray[i].mark == mark) {
          carArray[i].num = carArray[i].num - 1;
          carArray1 = carArray;
        }
      }
    }

    carArray1 = this.data.carArray.filter(item => item.num > 0);
    this.setData({
      carArray: carArray1
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })

    if (this.data.totalCount == 0) {
      this.toggleList();
    }


    // var index = e.currentTarget.dataset.itemIndex;
    // var parentIndex = e.currentTarget.dataset.parentindex;
    // this.data.goods[parentIndex].foods[index].Count--;
    // var mark = 'a' + index + 'b' + parentIndex;
    // var price = this.data.goods[parentIndex].foods[index].price;
    // var num = this.data.goods[parentIndex].foods[index].Count;
    // var name = this.data.goods[parentIndex].foods[index].name;
    // var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };

    // var carArray1 = [];
    // if (this.data.carArray != undefined && this.data.carArray != null) {
    //   for (var i = 0; i < this.data.carArray.length; i++) {
    //     if (this.data.carArray[i].mark == mark) {
    //       this.data.carArray[i].num = num;
    //       this.data.carArray[i].price = price;
    //       carArray1 = this.data.carArray;
    //     }
    //   }
    // }

    // carArray1 = this.data.carArray.filter(item => item.num > 0)
    // this.setData({
    //   carArray: carArray1,
    //   goods: this.data.goods
    // })

    // this.calTotalPrice();
    // this.setData({
    //   payDesc: this.payDesc()
    // })

    // if (this.data.totalCount == 0) {
    //   this.toggleList();
    // }
  },

  //添加到购物车
  addCart(e) {
    // var index = this.data.goods.index;
    // var parentIndex = this.data.goods.parentIndex;
    // this.data.goods.Count++;
    // var mark = 'a' + index + 'b' + parentIndex
    // var price = this.data.goods.price;
    // var num = this.data.goods.Count;
    // var name = this.data.goods.name;
    // var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    // var carArray1 = this.data.carArray.filter(item => item.mark != mark);
    // carArray1.push(obj);
    // this.setData({
    //   carArray: carArray1,
    //   goods: this.data.goods
    // })
    // this.calTotalPrice();
    // this.setData({
    //   payDesc: this.payDesc()
    // })
    var index = this.data.goods.index;
    var parentIndex = this.data.goods.parentIndex;
    this.data.goods.Count++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods.price;
    var num = this.data.goods.Count;
    var name = this.data.goods.name;
    var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };

    var updateFlg = 0;
    var carArray1 = [];
    if (this.data.carArray != undefined && this.data.carArray != null) {
      for (var i = 0; i < this.data.carArray.length; i++) {
        if (this.data.carArray[i].mark == mark) {
          this.data.carArray[i].num = num;
          this.data.carArray[i].price = price;
          updateFlg = 1;
          carArray1 = this.data.carArray;
        }
      }
    }

    if (updateFlg == 0) {
      carArray1 = this.data.carArray.filter(item => item.mark != mark);
      carArray1.push(obj);
      console.log(carArray1);
    }
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })

  },
  addShopCart: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    
    if (index == this.data.goods.index && parentIndex == this.data.goods.parentIndex) {
      this.data.goods.Count++;      
      this.setData({goods: this.data.goods});
    }

    var mark = 'a' + index + 'b' + parentIndex
    // var price = this.data.goods.price;
    // var num = this.data.goods.Count;
    // var name = this.data.goods.name;
    // var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };

    var carArray1 = [];
    let carArray = this.data.carArray;
    if (carArray != undefined && carArray != null) {
      for (var i = 0; i < carArray.length; i++) {
        if (carArray[i].mark == mark) {
          carArray[i].num = carArray[i].num + 1;
          carArray1 = carArray;
        }
      }
    }

    this.setData({
      carArray: carArray1
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })
  },
  //计算总价
  calTotalPrice: function () {
    var carArray = this.data.carArray;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      //payDesc: this.payDesc()
    });
  },
  //差几元起送
  payDesc() {
    if (this.data.totalPrice === 0) {
      // return `￥${this.data.minPrice}元起送`;
      return '请选择';
    } else {
      return '选好了';
    }
  },
  //結算
  pay() {
    if (this.data.totalPrice < this.data.minPrice) {
      return;
    }
    // window.alert('支付' + this.totalPrice + '元');
    //确认支付逻辑
    var resultType = "success";
    wx.redirectTo({
      url: '../goods/pay/pay?resultType=' + resultType
    })
  },
  //彈起購物車
  toggleList: function () {
    if (!this.data.totalCount) {
      this.data.fold = false;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    //console.log(this.data.fold);
    this.cartShow(fold)
  },
  cartShow: function (fold) {
    console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
    console.log(this.data.cartShow);
  },
  listShow() {
    if (!this.data.totalCount) {
      this.data.fold = true;
      return false;
    }
    let show = !this.fold;
    // if (show) {
    //     this.$nextTick(() => {
    //         if (!this.scroll) {
    //             this.scroll = new BScroll(this.$refs.listContent, {
    //                 click: true
    //             });
    //         } else {
    //             this.scroll.refresh();
    //         }
    //     });
    // }
    return show;
  },
  // ------------------------goods information end-------------------------------- 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      payDesc: this.payDesc()
    });
 
    let modeEncode = wx.getStorageSync("jsonStr");
    let mode = JSON.parse(modeEncode);
    this.setData({ goods: mode });    

    let carArr = wx.getStorageSync("jsonCarA");
    let carA = JSON.parse(carArr);
    this.setData({ carArray: carA });      

    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })

    // qqmapsdk = new QQMapWX({
    //   key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
    // });
    // this.setData({
    //   openid: getApp().globalData.openid
    // })

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
    console.log("goods-----unload!!!!!");
    wx.removeStorageSync("jsonCarA");
    wx.setStorageSync("jsonCarA", JSON.stringify(this.data.carArray));  

    wx.removeStorageSync("jsonStr");
    wx.setStorageSync("jsonStr", JSON.stringify(this.data.goods));        

    var that = this
    setTimeout(function () {
      that.setData({ isClose: true })
    }, 200) 
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