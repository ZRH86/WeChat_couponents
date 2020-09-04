let token = wx.getStorageSync('token')
console.log('TOKEN', token)

function networkpost(dataObj) {
    let promise = new Promise((resolve, reject) => {
        wx.request({
            url: dataObj.url,
            header: {
                'Content-Type': 'application/json',
                'token': token
            },
            data: dataObj.data,
            method: 'POST',
            success: function (res) { // 请求成功
                //自行处理返回结果
                console.log('返回结果：')
                console.log(res.data)
                // dataObj.app.netWorkData.result = res.data
                resolve(res.data);
            },
            fail: function (res) { // 请求失败
                wx.showToast({
                    title: '网络错误，请稍后再试',
                    icon: 'none',
                    duration: 2000
                })
                reject({ success: false });
            },
        })
    });
    return promise;
}
//get请求
function networkget(dataObj) {
    let promise = new Promise((resolve, reject) => {
        wx.request({
            url: dataObj.url,
            header: {
                'Content-Type': 'application/json',
                'token': token
            },
            data: dataObj.params,
            method: 'GET',
            success: function (res) {
                if (res.statusCode == 200) {
                    resolve({ bool: true });
                } else {
                    reject({ bool: false });
                }
                //返回结果自行处理
                console.log('返回结果：')
                console.log(res.data)
                // dataObj.app.netWorkData.result = res.data
            },
            fail: function (res) { // 请求失败
                wx.showToast({
                    title: '网络错误，请稍后再试',
                    icon: 'none',
                    duration: 2000
                })
                reject({ bool: false });
            },
        })
    });
    return promise;
}
module.exports = {
    networkget,
    networkpost
}