// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist: [
      {
        id: "001",
        imgUrl: "http://img5.imgtn.bdimg.com/it/u=2906541843,1492984080&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018-03-09"
      },
      {
        id: "002",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=1004404590,1607956492&fm=23&gp=0.jpg",
        name: "政府网站年度工作报表（2017年度）",
        price: "2018-02-01"
      },
      {
        id: "003",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=2305064940,3470659889&fm=23&gp=0.jpg",
        name: "关于开展2017年边检服务品牌集中宣传活动的通告",
        price: "2017-08-15"
      },
      {
        id: "004",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=3986819380,1610061022&fm=23&gp=0.jpg",
        name: "全国公安系统英雄模范立功集体表彰大会特别节目《一切为人民》5月31日央视一套播出",
        price: "2017-05-31"
      },
      {
        id: "005",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=3583238552,3525141111&fm=23&gp=0.jpg",
        name: "深圳出入境边防检查总站2017年度考试录用公务员面试公告",
        price: "2017-02-15"
      },
      {
        id: "006",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=1167272381,3361826143&fm=23&gp=0.jpg",
        name: "关于开展2016年中国边检服务品牌集中推介宣传活动的通告",
        price: "2016-08-15"
      },
      {
        id: "007",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=789486313,2033571593&fm=23&gp=0.jpg",
        name: "深圳边检总站2016年度考试录用公务员入围体检体能测评最低综合成绩分数线公告（二）",
        price: "2016-02-26"
      },
      {
        id: "008",
        imgUrl: "http://img5.imgtn.bdimg.com/it/u=2906541843,1492984080&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018-03-09"
      },
      {
        id: "009",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=1004404590,1607956492&fm=23&gp=0.jpg",
        name: "政府网站年度工作报表（2017年度）",
        price: "2018-02-01"
      },
      {
        id: "010",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=2305064940,3470659889&fm=23&gp=0.jpg",
        name: "关于开展2017年边检服务品牌集中宣传活动的通告",
        price: "2017-08-15"
      },
      {
        id: "011",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=3986819380,1610061022&fm=23&gp=0.jpg",
        name: "全国公安系统英雄模范立功集体表彰大会特别节目《一切为人民》5月31日央视一套播出",
        price: "2017-05-31"
      },
      {
        id: "012",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=3583238552,3525141111&fm=23&gp=0.jpg",
        name: "深圳出入境边防检查总站2017年度考试录用公务员面试公告",
        price: "2017-02-15"
      },
      {
        id: "013",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=1167272381,3361826143&fm=23&gp=0.jpg",
        name: "关于开展2016年中国边检服务品牌集中推介宣传活动的通告",
        price: "2016-08-15"
      },
      {
        id: "014",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=789486313,2033571593&fm=23&gp=0.jpg",
        name: "深圳边检总站2016年度考试录用公务员入围体检体能测评最低综合成绩分数线公告（二）",
        price: "2016-02-26"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 跳转详情页 
   */
  goGroupDetail: function(){
    // 页面跳转并传值
    wx.navigateTo({
      url: './groupDetail/groupDetail?id=1',
    })
  }
})