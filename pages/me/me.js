// pages/me/me.js
//
//
//
/**
 * app.json 里需要添加这两个路径
 * "pages/me/me",
    "pages/me/userInfoEdit"
 */

// ============== fake data ==============
var classesData = {
  cover : "", // 课程封面封面
  title : "Title233333",
  subtitle : "233333333",
  course : "233",
  students : "233"
}



// ============== fake data end ==============





//获取应用实例
var app = getApp()

Page({
  data:{
    userInfo: {},
    userIdentifiter:"电影翻译园地创始人",
    userDescription:"电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影...",
    classes : {},
    isNeedToShowButton:false,
    isFullDescShowing:"hidden"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      classesData.cover = userInfo.avatarUrl;
      that.setData({
        isNeedToShowButton: function() {
          return false;
        },
        userInfo:userInfo,
        classes:[classesData,classesData,classesData,classesData,classesData,classesData]
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  showBtnOnClicked:function(e){
      var that = this;

      var str = "";
      if (isNeedToShowButton && isFullDescShowing == "hidden") {
        str = "visible"
      }else{
        str = "hidden"
      }

      that.setData({
          isFullDexcShowing : str
      })
  },


////
  toEditPage:function(){
     wx.navigateTo({
      url: '../me/userInfoEdit/userInfoEdit'
    })
  },





///
  lower:function(){
    // 上拉加载更多
  },
  upper:function(){
     // 下拉刷新
  }
})
