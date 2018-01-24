// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 请求数据
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        const data = res.data.subjects.slice(0,3);
        // console.log(data);
        _this.setData({
          movies: data
        })
      }
    })
  },
  // 事件绑定函数
  start: function(){
    /**
     * 重定向
     * 页面跳转 
     */
    wx.redirectTo({
      url: '../board/board'
    })
  }
})