// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*轮播图 配置*/
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    circular: true, // 是否采用衔接滑动
    /*自定义轮播图 配置*/
    slider: [
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' }
    ],
    swiperCurrent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //轮播图的切换事件  
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  }
})