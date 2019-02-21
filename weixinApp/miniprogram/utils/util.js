var QQMapWX = require('../qqmap-wx-jssdk/qqmap-wx-jssdk.min.js');
var latitude = 0.0
var longitude = 0.0
var latitude1 = 0.0
var longitude1 = 0.0
var localCityName = ""
var cb = 0
/**
 * Map转json
 * @param m
 * @returns String
 */
function MapTOJson(m) {
  var str = '{';
  var i = 1;
  m.forEach(function(item, key, mapObj) {
    if (mapObj.size == i) {
      str += '"' + key + '":"' + item + '"';
    } else {
      str += '"' + key + '":"' + item + '",';
    }
    i++;
  });
  str += '}';
  //console.log(str);
  return str;
} 

var qqmapsdk = new QQMapWX({
  key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
});

function getLocation() {

  wx.getLocation({
    type: 'wgs84',
    altitude: true,
    success: function (res) {
      if (res.errMsg === 'getLocation:ok') {
        // success  
        var latitude = res.latitude
        var longitude = res.longitude
        latitude1 = latitude,
          longitude1 = longitude
          
          if( cb == 0){
        getLocal(latitude, longitude)
          }
        // this.setData({
        //   latitude1: latitude,
        //   longitude1: longitude
        // })

      }
    },
    fail: function (res) {
      console.error(res);
    },
    complete: function (res) {
      console.log(res);

    },
  });

}

//获取当前地理位置
function getLocal (latitude, longitude) {
  let localMovieAddr = wx.getStorageSync('localMovieAddress');
   let localCityName = wx.getStorageSync('localCityName');
  qqmapsdk.reverseGeocoder({
    location: {
      latitude: latitude,
      longitude: longitude
    },
    success: function (res) {
      console.log(JSON.stringify(res));
      var city = res.result.address_component.city
      if (res.status == 0) {
        console.log('local->' + localMovieAddr)
        // if (localMovieAddr == undefined || localMovieAddr == '') {
        var location = getMovieAddress(city);
        // }
        if (localCityName != city || localMovieAddr == undefined || localMovieAddr == '') {

          wx.showModal({
            title: '温馨提示',
            content: '当前定位为' + city + '是否切换为【' + location + '】影城？',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                localCityName = city;
                wx.setStorageSync('currCity', city)
                wx.setStorageSync('localCityName', city)
                wx.setStorageSync('localMovieAddress', location)
                var page = getCurrentPages().pop();
                console.log(page);
                if(page == undefined || page == null) return;
                page.onShow();
                // that.setData({
                //   // currProvince: res.result.address_component.province,
                //   currCity: localCityName,
                //   movieAddress: location,

                // })
                // cb = 1
                // getLocation()
              } else if (res.cancel) {
                console.log('用户点击取消')
                // that.setData({
                //   // currProvince: res.result.address_component.province,
                //   currCity: localCityName,
                //   movieAddress: localMovieAddr,

                // })
              }
            },
          })

        }
      }

    },
    fail: function (error) {
      console.error(error);
    },
    complete: function (res) {
      console.log(res);

    }
  });

}
//TODO 
 function getMovieAddress(city) {
   let list = [];
   let suZhou = [{
     'id': '0',
     'movieAddress': '苏州中心'
   },
   {
     'id': '1',
     'movieAddress': '昆山昆城广场'
   }
   ];
   let shangHai = [{
     'id': '0',
     'movieAddress': '上海安亭'
   },
   {
     'id': '1',
     'movieAddress': '上海浦东印象城'
   },
   {
     'id': '2',
     'movieAddress': '上海七宝'
   }
   ];
   let beiJing = [{
     'id': '0',
     'movieAddress': '北京清河'
   },
   {
     'id': '1',
     'movieAddress': '星星北京颐提港'
   },
   {
     'id': '2',
     'movieAddress': '星星北京奥体'
   },
   {
     'id': '3',
     'movieAddress': '北京顺义'
   }
   ];
   let qiTa = [{
     'id': '0',
     'movieAddress': city + '中心'
   }
   ];
   if (city === '苏州市') {
     list = suZhou;
   }
   else if (city === '上海市') {
     list = shangHai;
   }
   else if (city === '北京市') {
     list = beiJing;
   }
   else {
     list = qiTa;
   };
  var tempDistance = distance(list[0].latitude, list[0].longitude);
  var tempNode = list[0];

  for (let a of list) {
    var dis = distance(a.latitude, a.longitude);
    console.log('t->' + tempDistance + ' d->' + dis)
    console.log(tempDistance < dis)
    if (tempDistance < dis) {
      tempDistance = dis;
      tempNode = a;
    }
  }
  return tempNode.movieAddress
}
//计算两个坐标点的距离
function distance (la2, lo2) {
  var la1 = latitude1; 
  var lo1 = longitude1;
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  s = s.toFixed(2);
  return s;
}

/**
 * 验证输入的手机号码是否符合格式要求;
 * 符合返回true
 * 不符合返回false
 * @param {手机号码} telnum 
 */
function checkTelNum(telnum) {
  return telnum.length == 11 && (/^[0-9]+$/.test(telnum));
}


/**
 * 请求服务器变量
 */
var requestHandler = {
  url: '',
  data: {},
  method: '',
  success: function (res) {
  },
  fail: function () {
  },
  complete: function () {
  }
}

/**
 * 请求服务器时显示加载中
 * @param {请求服务器变量} requestHandler 
 */
function request(requestHandler) {
  var data = requestHandler.data;
  var url = requestHandler.url;
  var method = requestHandler.method;
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    data: data,
    method: method,
    success: function (res) {
      wx.hideLoading();
      requestHandler.success(res)
    },
    fail: function () {
      wx.hideLoading();
      requestHandler.fail();
    },
    complete: function () {
       
    }
  })
}


module.exports = {
  MapTOJson: MapTOJson,
  getLocation: getLocation,
  checkTelNum: checkTelNum,
  request:request
}



