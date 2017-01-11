var NFHttp = require('../../utils/NFHttpTool.js')

var documentImages = new Array();
var totalPage = 0
var currentPage = 0
var documentsCodes = new Array();
Page({
  data:{
    windowHeight: 0,
    items:{},
  },

  getDocumentByPageIndex: function(index){
    var i = 0
    var tmpItems = new Array()
    while(i <= 4) {
      if (i >= documentsCodes.length) {
        break;
      }
      tmpItems.push(documentsCodes[i + index].docCode);
      i++;
    }
    return tmpItems;
  },
  
  onLoad: function (options) {

    var that = this
    //
    //获取屏幕高度 
    wx.getSystemInfo({ 
      success: function (res) { 
      that.setData({ 
      windowHeight: res.windowHeight 
      })  
      } 
    }) 

    //
    var sucessBlock = function(res){
      
      documentsCodes = res.data
      totalPage =  Math.round(res.data.length/5)
      currentPage = 0
      
      var willDisplayItem = that.getDocumentByPageIndex(currentPage);
      that.showDocument(willDisplayItem)
      
    }
    NFHttp.getAllDocument(sucessBlock,null)
  },

  showDocument:function(willDisplayItem){

    wx.showToast({
      title: '',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function(){
      wx.hideToast()
    },2000)
    var that = this

    for (var i=0;i<willDisplayItem.length;i++)
    {
      var updateBlock = function(doc){
        var pages = doc.data.pages;
        var photos = pages[0].photos
        var cover = photos.cover_key
        documentImages.push(cover)
        that.setData({items:documentImages})
        
        wx.hideToast()
      }
      NFHttp.requestDocumentByCode(willDisplayItem[i],updateBlock,null)
    }
    currentPage++;
    
  },



// scroll view 的方法

  scroll:function(event){
    console.log("1111")
  },


  lower:function(event){
    var that = this;
    var willDisplayItem = that.getDocumentByPageIndex(currentPage);
    that.showDocument(willDisplayItem)
    
  }
  
})