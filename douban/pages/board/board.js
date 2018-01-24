// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgWrap: []
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
        const data = res.data.subjects.slice(0,5);
        _this.setData({
          imgWrap: data
        })
      }
    })
  }
})