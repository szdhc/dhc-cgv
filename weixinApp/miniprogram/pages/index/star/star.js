var app = getApp()
Page({
    data: {
        IP: "",
        FileIP: "",
        stars: [0, 1, 2, 3, 4],
        normalSrc: '../../../images/no_star.png',
        selectedSrc: '../../../images/full_star.png',
        halfSrc: '../../../images/half_star.png',
        userInfo:{},
        filmData:{},
        key: 0,//评分
        content:'',//评论
        scoreText: ['超烂啊', '超烂啊', '比较差', '比较差', '一般般', '一般般', '比较好', '比较好', '完美', '完美']
    },
    onLoad: function () {
        this.setData({
          IP: "http://192.168.0.121:3333",
          FileIP: "http://192.168.0.121:3223"
        })
        var that = this
        _getUserInfo();
        function _getUserInfo() {
            wx.getUserInfo({
                success: function (res) {
                    that.setData({
                        userInfo: res.userInfo
                    })
                    that.update()
                }
            })
        }
        wx.request({
            url: this.data.IP + '/film/find',
            data: {
                _id: this.options.id
            },
            success: ((res) => {
                this.setData({
                    filmData: res.data
                })
            })
        })
    },
    //点击右边,半颗星
    selectLeft: function (e) {
        this.setData({
            clickFlag: true
        })
        var key = e.currentTarget.dataset.key
        if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
            //只有一颗星的时候,再次点击,变为0颗
            key = 0;
        }
        this.setData({
            key: key
        })

    },
    //点击左边,整颗星
    selectRight: function (e) {
        this.setData({
            clickFlag: true
        })
        var key = e.currentTarget.dataset.key
        this.setData({
            key: key
        })
    },
    bindTextAreaInput: function (e) {
        if (e.detail.value.length>=6){
            this.setData({
                content: e.detail.value
            })
        }
    },  
    // 提交评论
    submitComment(){
        if (this.data.content == '' && this.data.key != 0){
            wx.showToast({
                title: '至少6个字',
                icon:'none',
                duration: 1500
            })
        }
        
        if (this.data.key != 0 && this.data.content != ''){
            
            let commentArr = {
                point: this.data.key * 2,
                content: this.data.content,
                nickname: this.data.userInfo.nickName,
                head_img: this.data.userInfo.avatarUrl,
                good_num: 684,
                time: '昨天',
                film_img: this.data.filmData.film_bill[0].replace(/\\/g,'/'),
                film_name: this.data.filmData.film_name,
                film_nd: this.data.filmData.film_nd,
                film_id: this.data.filmData._id
            }
            // 请求电影 
            wx.request({
                url: this.data.IP + '/film_comment/add',
                data: commentArr,
                success: ((res) => {
                    // 存我的评价
                    wx.request({
                        url: this.data.IP + '/users/update',
                        data: { _id: wx.getStorageSync("userId"), film_comment: res.data, isPush: true },
                        success: ((res) => {
                        })
                    })
                    wx.request({
                        url: this.data.IP + '/film/update',
                        data: { _id: this.options.id, film_comment: res.data, isPush: true },
                        success: ((res) => {
                            wx.showToast({
                                title: '评论成功',
                                icon: 'none',
                                duration: 2000
                            })
                            
                            let timer=setTimeout(function(){
                            wx.navigateBack({ changed: true })
                            clearTimeout(timer)
                            },1500)
                        })
                    })
                })
            })
        }
    }
})