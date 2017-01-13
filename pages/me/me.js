// pages/me/me.js
//
//
//
/**
 * "pages/me/me",
    "pages/me/preview/preview",
    "pages/me/preview/edit/edit"
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



var defaultDescriptionTextStyle = {
      height : "8rpx",
      followY : "hidden",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      padding : "20rpx"
    };

Page({
  data:{
    userInfo: {},
    userIdentifiter:"电影翻译园地创始人",
    userDescription:"电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影.电影翻译园地的创始人，来自台湾。曾参与超过2000部电影...",
    classes : {},

    isNeedToShowButton:false,
    isFullDescShowing:false,

    descriptionTextStyle : defaultDescriptionTextStyle,
    extensionButtonImageSrc : "../../image/content-closed.png"
  },



  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    
    var isNeedToShowButton_ = false
    if (that.data.userDescription.length > 28) {
      isNeedToShowButton_ = true
    }
    

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      classesData.cover = userInfo.avatarUrl;
      that.setData({
        isNeedToShowButton: isNeedToShowButton_,
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
      var userDescStyle = that.data.descriptionTextStyle;
      var imageSrc = "../../image/content-closed.png";
       
      if (that.data.isNeedToShowButton && that.data.descriptionTextStyle.followY == "hidden") {
        userDescStyle.followY = "visible";
        imageSrc =  "../../image/content-opening.png";
         userDescStyle.height = "auto";
         userDescStyle.backgroundColor = "rgba(0, 0, 0, 0.7)";
         userDescStyle.padding = "20px 120rpx 20px 20px";
      }else{
        userDescStyle = defaultDescriptionTextStyle;
      }

      that.setData({
        descriptionTextStyle    :   userDescStyle,
        extensionButtonImageSrc :   imageSrc
      })
  },


////
  toUserInfoPreviewPage:function(){
     wx.navigateTo({
      url: '../me/preview/preview'
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
