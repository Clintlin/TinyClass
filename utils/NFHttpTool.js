if(typeof RequestMethodType == "undefined"){
    var RequestMethodType = {};
     RequestMethodType.POST = 'POST';
     RequestMethodType.GET = 'GET';
}


var DeviceId = 'MDAwMDAwMDAwMIXemdqAzaGj';
var Api = 'http://api.drawsay.com/';
var version = '/version/213';
function requestWithMethod(methodType,params,url,success,fail){
    var host = Api + 'api.php?s=' + url + version;
    wx.request({
      url: host,
      data: params,
      method: methodType, 
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function(res){
        // success
        if (isFunction(success)) {
            // success(res);
            success(res.data);
        }
      },
      fail: function() {
        // fail
        if (isFunction(fail)) {
            fail();
        }
      }
    })
}


// 同步画声线上文档
function getAllDocument(success,failure){
    var params = {'deviceCode':DeviceId};
    requestWithMethod(
        RequestMethodType.POST,
        params,
        '/Device/historyRecordList',
        success,
        failure
    )
}

function requestDocumentByCode(code,success,failure){
    var params = {
        'deviceCode':DeviceId,
        'docCode':code
    };
    requestWithMethod(
        RequestMethodType.GET,
        params,
        '/Device/getUserDocs',
        success,
        failure
    )
}


function isFunction(callback){
    return (callback && typeof(callback) === "function");
}


module.exports.getAllDocument = getAllDocument
module.exports.requestDocumentByCode = requestDocumentByCode