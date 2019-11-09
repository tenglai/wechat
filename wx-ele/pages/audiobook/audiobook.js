// pages/audiobook/audiobook.js
var data_ = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
    _WIDTH_: '',
    _HEIGHT_: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let _this = this;

    _this.setData({
      navLeftItems: data_.getSData(),
      navRightItems: data_.getSData()
    })

    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.windowWidth);
        // console.log(res.windowHeight);

        _this.setData({
          _WIDTH_: res.windowWidth,
          _HEIGHT_: res.windowHeight
        })
      }
    })
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})