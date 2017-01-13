// pages/me/preview/preview.js
var app = getApp();

Page({
  data: {
    windowHeight:0,
    userInfo: {},
    userIdentifiter:"电影翻译园地创始人",
    userDescription:"电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.111111111111111111111111111111111111111",
    userMobliePhone:110
  },
  //事件处理函数
  bindViewTap: function() {
  },
  editInfo:function(e){
    var id_ = e.currentTarget.id
    var title = ""
    var content = ""
    if (id_ == "identifiter") {
      title = "职业身份"
      content = this.data.userIdentifiter
    }else if (id_ == "description") {
      title = "个人简介"
      content = this.data.userDescription
    }else if (id_ == "mobile") {
      title = "手机"
      content = this.data.userMobliePhone
    }

    var params = '?title=' + title + '&&type=' + id_ + '&&content=' + content 

    wx.navigateTo({
      url: '../preview/edit/edit' + params
    })

  },
  onLoad: function (options) {
    var that = this;
    handleEditResult(options,that)
    
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

function handleEditResult(data,pageObject){
  if (data.edit == null) {
    return false;
  }

  if (data.type == "identifiter") {
      pageObject.setData({
        userIdentifiter:data.content
    })
  }else if (data.type == "description") {
    pageObject.setData({
        userDescription:data.content
    })
  }else if (data.type == "mobile") {
    pageObject.setData({
        userMobliePhone:data.content
    })
  }
  return true
}