// pages/broadcast/broadcast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    message: ''
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //
  },

  // 获取姓名
  changeName: function(e){
    this.setData({
      name: e.detail.value
    });
  },

  // 获取联系电话
  changePhone: function(e){
    this.setData({
      phone: e.detail.value
    });
  },

  // 获取留言
  changeMessage: function(e){
    this.setData({
      message: e.detail.value
    });
  },

  /* 点击确定 */
  submit: function () {
    // 验证
    if (!this.data.name) {
      wx.showToast({
        title: '请填写姓名',
        icon: 'none',
        duration: 1000
      })
    } else if(!this.data.phone) {
      wx.showToast({
        title: '请填写联系电话',
        icon: 'none',
        duration: 1000
      })
    } else if(!this.data.message){
      wx.showToast({
        title: '请填写留言',
        icon: 'none',
        duration: 1000
      })
    }else{
      // 成功
      wx.showToast({
        title: '提交成功!',
        icon: 'success',
        duration: 1000
      })
      // 清空
      this.setData({
        name: '',
        phone: '',
        message: ''
      });
    }
  }
})