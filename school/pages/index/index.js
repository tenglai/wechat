//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: {
      imgUrls: [
        'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png',
        'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
      ],
      descs: [
        '聚划算',
        '天猫',
        '天猫国际',
        '外卖',
        '天猫超市',
        '充值中心',
        '阿里旅行',
        '领金币',
        '到家',
        '分类'
      ]
    },
    /*自定义轮播图 配置*/
    slider: [
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' }
    ],
    swiperCurrent: 0,
    /*模态框*/
    is_modal_Hidden: true,
    is_modal_Msg: '我是一个自定义组件'
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
  },

  // 显示模态框
  showModal: function() {
    this.setData({
      is_modal_Hidden: false
    })
  }
})
