export const API_URI = 'https://api.cgv.com'

function fetchApi(type, params, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URI}/${type}`,
      data: params,
      method: method || 'GET',
      header: {
        'content-type': 'json'
      },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  getOpenId: function(type, encryptedData, iv, js_code, method) {
    return fetchApi(type, {
        "encryptedData": encryptedData,
        "iv": iv,
        "js_code": js_code
      }, method)
      .then(res => res.data)
  },
}