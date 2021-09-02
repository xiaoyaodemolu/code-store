import Taro from '@tarojs/taro'
//格式化时间
let formatDate = function(date) {
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒' 
}
//登录
let login = function() {
    return new Promise((resolve,reject)=>{
        Taro.getUserProfile({
            lang: 'zh_CN',
            desc: "获取信息哦",
            success: (res) => {
                resolve(res.result)
            },
            fail: (err)=> {
                reject(err)
            }
        })
    })
}
//获取地址
let getLocation = function() {
    return new Promise((resolve,reject)=>{
        Taro.getLocation({
            success: (res) => {
                Taro.request({
                    url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+res.latitude+','+res.longitude+'&key=AMABZ-3EQC3-UER3S-YWIT2-GWDU2-TUF3Y',
                    success: (res1)=>{
                        resolve(res1.data.result)
                    }
                })
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}
//调用云函数
let useCloudFunc = function(funcName,data) {
    return new Promise((resolve,reject)=>{
        Taro.cloud.callFunction({
            name: funcName,
            data: data
        }).then(res=>{
            resolve(res.result)
        }).catch(err=>{
            reject(err)
        })
    })
}
Taro.cloud.init({
    env: 'cloud1-7gxpsw7i3b71f7cf'
})
let db = Taro.cloud.database() 
//数据库新增数据
let addData = function(dbName,data) {
    return new Promise((resolve,reject)=>{
        db.collection(dbName).add({
            data
        }).then(res=>{
            resolve(res)
        })
    })
}
//数据库查询数据
let searchData = function(dbName,params) {
    return new Promise((resolve,reject)=>{
        db.collection(dbName).where(params).get().then(res=>{
            if(res.data.length>0){
                resolve(res.data)
            }else{
                resolve(false)
            }
        })
    })
}
//数据库更新数据
let updateData = function(dbName,params,data) {
    const _ = db.command
    return new Promise((resolve,reject)=>{
        db.collection(dbName).where(params).update({data}).then(res=>{
            resolve(res)
        })
    })
}

export default { formatDate, login, getLocation, useCloudFunc, addData, searchData, updateData }