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
        price: "2018.03.09.15:23:15"
      },
      {
        id: "002",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=1004404590,1607956492&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      },
      {
        id: "003",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=2305064940,3470659889&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      },
      {
        id: "004",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=3986819380,1610061022&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      },
      {
        id: "005",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=3583238552,3525141111&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      },
      {
        id: "006",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=1167272381,3361826143&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      },
      {
        id: "007",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=789486313,2033571593&fm=23&gp=0.jpg",
        name: "深圳边检总站2018年度考试录用公务员入围体检体能测评最低综合成绩分数线公告",
        price: "2018.03.09.15:23:15"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 加入购物车  
  addcart: function (e) {
    this.setData({
      toastHidden: false
    });
    // 遍历列表 与 购物车列表  
    for (var i in this.data.goodslist) {
      // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项  
      if (this.data.goodslist[i].id == e.target.id) {
        // 给goodsList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量  
        this.data.goodslist[i].count = 1;
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
        var arr = wx.getStorageSync('cart') || [];
        // 如果购物车有数据  
        if (arr.length > 0) {
          // 遍历购物车数组  
          for (var j in arr) {
            // 判断购物车内的item的id，和事件传递过来的id，是否相等  
            if (arr[j].id == e.target.id) {
              // 相等的话，给count+1（即再次添加入购物车，数量+1）  
              arr[j].count = arr[j].count + 1;
              // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              // 返回（在if内使用return，跳出循环节约运算，节约性能）  
              return;
            }
          }
          // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  
          arr.push(this.data.goodslist[i]);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）  
        else {
          arr.push(this.data.goodslist[i]);
        }
        // 最后，把购物车数据，存放入缓存  
        try {
          wx.setStorageSync('cart', arr)
          // 返回（在if内使用return，跳出循环节约运算，节约性能）  
          return;
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
})