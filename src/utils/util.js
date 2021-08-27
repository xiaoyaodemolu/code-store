import Taro from '@tarojs/taro'
//格式化时间
let formatDate = function(date) {
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒' 
}
//登录
let login = function() {
    return new Promise((resolve,reject)=>{
        Taro.getUserProfile({
            desc: "获取信息哦",
            success: (res) => {
                console.log('9898具体信息111e',res)
                Taro.setStorageSync('userInfo', res.userInfo)
                // info.name = res.userInfo.nickName
                resolve(res)
            },
            fail: (err)=> {
                reject(err)
            }
        })
    })
}
let getLocation = function() {
    return new Promise((resolve,reject)=>{
        Taro.getLocation({
            success: (res) => {
                Taro.request({
                    url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+res.latitude+','+res.longitude+'&key=AMABZ-3EQC3-UER3S-YWIT2-GWDU2-TUF3Y',
                    success: (res1)=>{
                        console.log('9898真实地址222e',res1)
                        // info.address = res1.data.result.address
                        resolve(res1)
                    }
                })
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}
export default { formatDate, login, getLocation }