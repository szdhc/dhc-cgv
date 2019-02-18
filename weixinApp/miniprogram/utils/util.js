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
  let suzhou = [{
    'id': '0',
    'movieAddress': 'CGV苏州中心店',
    'latitude': '39.915405',
    'longitude': '116.403802'
  },
  {
    'id': '1',
    'movieAddress': 'CGV昆山广场店',
    'latitude': '31.200479',
    'longitude': '121.334421'
  }
  ];
  let shanghai = [{
    'id': '0',
    'movieAddress': 'CGV上海广场',
    'latitude': 1.2,
    'longitude': 2.2
  },
  {
    'id': '1',
    'movieAddress': 'CGV外滩店',
    'latitude': '77.77777',
    'longitude': '11.11111'
  },
  {
    'id': '2',
    'movieAddress': 'CGV浦东店',
    'latitude': '22.1111',
    'longitude': '65.4321'
  }
  ];
  if (city === '苏州市') {
    list = suzhou;
  } else {
    list = shanghai;
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

module.exports = {
  MapTOJson: MapTOJson,
  getLocation: getLocation
}



