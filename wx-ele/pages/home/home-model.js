class Home {
  constructor(){
    //
  }

  // 获取轮播图数据
  getBannerData(id){
    wx.request({
      url: 'http://z.cn/api/v1/banner/' + id,
      method: 'GET',
      success: function(res){
        console.log(res);
        return res;
      }
    })
  }
}

// 向外暴露
export { Home };