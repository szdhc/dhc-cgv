// pages/index/chooseMovie/seat/buyGoods/buyGoods.js
Page({

  data: {
    isClose: true,     //判断当前页面是打开还是返回页
    // --------------------------------------------------------------//
    // --------------------goods information----------------------------

    goods: [
      {
        "name": "人气热销",
        "type": -1,
        "foods": [
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            // "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            // "ratings": [
            //   {
            //     "username": "3******c",
            //     "rateTime": 1469281964000,
            //     "rateType": 0,
            //     "text": "很喜欢的粥",
            //     "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            //   },
            //   {
            //     "username": "2******3",
            //     "rateTime": 1469271264000,
            //     "rateType": 0,
            //     "text": "",
            //     "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            //   },
            //   {
            //     "username": "3******b",
            //     "rateTime": 1469261964000,
            //     "rateType": 1,
            //     "text": "",
            //     "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            //   }
            // ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "经典套餐",
        "type": 2,
        "foods": [
          {
            "name": "X-COMBO套餐",
            "price": 29,
            "oldPrice": 36,
            "description": "46OZ爆米花*1+220Z可乐*1",
            "sellCount": 17,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "现调饮料",
        "type": 1,
        "foods": [
          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "爆米花类",
        "type": -1,
        "foods": [
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "瓶装饮料",
        "type": -1,
        "foods": [
          {
            "name": "八宝酱菜",
            "price": 4,
            "oldPrice": "",
            "description": "",
            "sellCount": 84,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "拍黄瓜",
            "price": 9,
            "oldPrice": "",
            "description": "",
            "sellCount": 28,
            "Count": 0,
            "rating": 100,
            "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "精选套餐",
        "type": -1,
        "foods": [
          {
            "name": "红豆薏米粥套餐",
            "price": 37,
            "oldPrice": "",
            "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
            "sellCount": 3,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "皮蛋瘦肉粥套餐",
            "price": 31,
            "oldPrice": "",
            "description": "",
            "sellCount": 12,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "果拼果汁",
        "type": -1,
        "foods": [
          {
            "name": "蜜瓜圣女萝莉杯",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 1,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "加多宝",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 7,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "小吃主食",
        "type": -1,
        "foods": [
          {
            "name": "扁豆焖面",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 188,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "葱花饼",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 124,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "牛肉馅饼",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 114,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "招牌猪肉白菜锅贴/10个",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 101,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "糊塌子",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 80,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "特色粥品",
        "type": -1,
        "foods": [
          {
            "name": "皮蛋瘦肉粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 229,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "南瓜粥",
            "price": 9,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 91,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "红豆薏米美肤粥",
            "price": 12,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 86,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "红枣山药糙米粥",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 81,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "鲜蔬菌菇粥",
            "price": 11,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 56,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "田园蔬菜粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 33,
            "Count": 0,
            "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      }
    ],
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
    cartShow: 'none',

    // --------------------------end------------------------------------

  },

  // ------------------------goods information------------------------------

  selectFoods: function (e) {

    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    var mark = 'a' + index + 'b' + parentIndex;

    var obj = {};
    obj = this.data.goods[parentIndex].foods[index];
    obj["index"] = index;
    obj["parentIndex"] = parentIndex;
    obj["mark"] = mark;

    // 转成json 字符串
    let modeStr = JSON.stringify(obj);
    wx.removeStorageSync("jsonStr");
    wx.setStorageSync("jsonStr", modeStr);
    wx.removeStorageSync("jsonCarA");
    wx.setStorageSync("jsonCarA", JSON.stringify(this.data.carArray));
    // url encode
    // let modeEncode = encodeURIComponent(modeStr);
    // console.log(modeStr);
    this.setData({ isClose: false });
    wx.navigateTo({
      url: '../shop/goods/goods',
      //url: '../shop/goods/goods?jsonStr=' + str,
    })
  },

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
        this.data.goods[carA[i].parentIndex].foods[carA[i].index].Count = 0;
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
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count--;
    var mark = 'a' + index + 'b' + parentIndex;
    var price = this.data.goods[parentIndex].foods[index].price;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var name = this.data.goods[parentIndex].foods[index].name;
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
    this.decreaseCart(e);
  },

  //添加到购物车
  addCart(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var name = this.data.goods[parentIndex].foods[index].name;
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
    this.addCart(e);
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
    // if (this.data.totalPrice === 0) {
    //   // return `￥${this.data.minPrice}元起送`;
    //   return '请选择';
    // } else if (this.data.totalPrice < this.data.minPrice) {
    //   let diff = this.data.minPrice - this.data.totalPrice;
    //   return '还差' + diff + '元起送';
    // } else {
    //   return '选好了';
    // }
    if (this.data.totalPrice === 0) {
      // return `￥${this.data.minPrice}元起送`;
      return '请选择';
    } else {
      return '选好了';
    }
  },
  //結算
  pay() {
    if (this.data.totalPrice == 0) {
      wx.showModal({
        title: '购物提示',
        content: '请选择需要购买的商品',
        showCancel: false,
      })
      return;
    }
    // window.alert('支付' + this.totalPrice + '元');
    //确认支付逻辑
    var resultType = "success";

    let modeStr = JSON.stringify(this.data.carArray);
    wx.removeStorageSync("jsonCarA");
    wx.setStorageSync("jsonCarA", JSON.stringify(this.data.carArray));

    wx.navigateTo({
      url: '../shop/dinnMethod/dinnMethod'
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

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      payDesc: this.payDesc()
    });
  },

  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {

  },

  /**
* 生命周期函数--监听页面隐藏
*/
  onHide: function () {
    if (this.data.isClose) {
      console.log('重新打开')
    }
  },

  onShow: function () {

    console.log("shops-----------------" + this.data.isClose);

    // 当页面从详细跳转过来时
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 1];
    if (!this.data.isClose) {

      let carArr = wx.getStorageSync("jsonCarA");
      let carA = JSON.parse(carArr);
      this.setData({ carArray: carA });

      for (var i = 0; i < this.data.goods.length; i++) {
        for (var j = 0; j < this.data.goods[i].foods.length; j++) {
          this.data.goods[i].foods[j].Count = 0;
        }
      }

      if (carA != undefined && carA != null && carA.length > 0) {
        for (var i = 0; i < carA.length; i++) {
          this.data.goods[carA[i].parentIndex].foods[carA[i].index].Count = carA[i].num;
        }
      }

      this.setData({ goods: this.data.goods });

      // let jsonStr = wx.getStorageSync("jsonStr");
      // let carGood = JSON.parse(jsonStr);
      // this.data.goods[carGood.parentIndex].foods[carGood.index] = carGood;
      // this.setData({ goods: this.data.goods});

      this.calTotalPrice();
      this.setData({
        payDesc: this.payDesc()
      })
    }

  },
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        if (res.errMsg === 'getLocation:ok') {
          // success  
          var latitude = res.latitude
          var longitude = res.longitude
          vm.getLocal(latitude, longitude);
        }
      },
      fail: function (res) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      },
    });
  },

})
