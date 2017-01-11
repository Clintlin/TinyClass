function toCanvas(){
    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], 
                        sourceType: ['album'], 
                        success: function(res){
                            // success
                            wx.navigateTo({
                            url: '../canvas/canvas?tempFilePaths='+res.tempFilePaths
                            })
                        }
                        })
}

function toLogs(){
    wx.navigateTo({
      url: '../logs/logs'
    })
}

function toDocuments(){
    wx.navigateTo({
      url: '../me/me'
    })
}

module.exports.toCanvas = toCanvas
module.exports.toLogs = toLogs
module.exports.toDocuments = toDocuments