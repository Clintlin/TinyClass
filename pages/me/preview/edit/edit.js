// pages/me/preview/edit/edit.js
Page({
  data:{
    title:"",
    content:"",
    contentType:"",
  },
  onLoad:function(options){
    var that = this;
    that.setData({
      title:options.title,
      content:options.content,
      contentType:options.type
    })

    wx.setNavigationBarTitle({
      title: that.data.title
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
  saveContent:function(){
    // 保存完毕以后回到上一页，并刷新一下页面，恩恩
    var that = this;
    var params = '?edit=1&type='+that.data.contentType+'&content='+that.data.content
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })

  },

  textareaValueChanged:function(e){
    var that = this;
    that.setData({
      content:e.detail.value,

    })
  }
})