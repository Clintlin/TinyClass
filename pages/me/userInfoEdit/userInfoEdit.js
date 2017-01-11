
var app = getApp();

Page({
  data: {
    windowHeight:0,
    userInfo: {},
    userIdentifiter:"电影翻译园地创始人",
    userDescription:"电影翻译园地的创始人，来自台湾。曾参与超过2000部电影...",
    userMobliePhone:110
  },
  //事件处理函数
  bindViewTap: function() {
  },

  onLoad: function () {
    var that = this;

    //获取屏幕高度 
    wx.getSystemInfo({ 
      success: function (res) { 
      that.setData({ 
      windowHeight: res.windowHeight 
      })  
      } 
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})