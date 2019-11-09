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
        'https://cdn-img.easyicon.net/png/5053/505312.gif',
        'https://cdn-img.easyicon.net/png/11599/1159919.gif',
        'https://cdn-img.easyicon.net/png/5479/547983.gif',
        'https://cdn-img.easyicon.net/png/49/4922.gif',
        'https://cdn-img.easyicon.net/png/11598/1159837.gif',
        'https://cdn-img.easyicon.net/png/5483/548303.gif',
        'https://cdn-img.easyicon.net/png/407/40721.gif',
        'https://cdn-img.easyicon.net/png/316/31651.gif',
        'https://cdn-img.easyicon.net/png/11672/1167231.gif',
        'https://cdn-img.easyicon.net/png/10775/1077575.gif'
      ],
      descs: [
        '总站首页',
        '总站概况',
        '要闻',
        '工作动态',
        '公告栏',
        '政策法规',
        '通关指南',
        '服务系统',
        '业务咨询',
        '网站管理'
      ]
    },
    /*自定义轮播图 配置*/
    slider: [
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://www.szbj.gov.cn/ueditorupload/image/20180904/61491536023452489.jpg' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://www.szbj.gov.cn/ueditorupload/image/20180820/72361534728079228.JPG' },
      { id: '0', linkUrl: 'pages/index/index', picUrl: 'http://www.szbj.gov.cn/ueditorupload/image/20180906/3591536198195804.JPG' }
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
    this.setData({
      is_modal_Hidden: true
    })
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
