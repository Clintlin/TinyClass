Page({
  data:{
    items:{},
  },
  
  onLoad: function (options) {

    var that = this

    console.log(options.tempFilePaths)
    that.setData({
      items:[
        options.tempFilePaths,
        options.tempFilePaths,
        options.tempFilePaths,
        options.tempFilePaths,
        options.tempFilePaths,
        options.tempFilePaths,
        options.tempFilePaths,
        ]
      })
  }
})

