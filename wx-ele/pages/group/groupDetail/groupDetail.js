// pages/group/groupDetail/groupDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '关于开展2017年边检服务品牌集中宣传活动的通告',
    time: '2017.08.15.17:18:20',
    content: '根据公安部统一部署，深圳边检总站将于8月19日在深圳各出入境口岸开展边检服务品牌集中宣传活动，届时将集中宣传展示中国边检服务品牌形象、公安部各项出入境便民利民措施以及深圳边检总站相关服务举措，并提供出入境政策法规及通关流程等现场咨询服务。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id: options.id
    })
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