import Taro from '@tarojs/taro'
import { axios } from 'taro-axios'

const host = 'http://localhost:9898'
//格式化时间
let formatDate = function (date) {
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒'
}
//登录
let login = function () {
    return new Promise((resolve, reject) => {
        Taro.getUserProfile({
            lang: 'zh_CN',
            desc: "获取信息哦",
            success: (res) => {
                resolve(res.result)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}
//获取地址
let getLocation = function () {
    return new Promise((resolve, reject) => {
        Taro.getLocation({
            success: (res) => {
                Taro.request({
                    url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + res.latitude + ',' + res.longitude + '&key=AMABZ-3EQC3-UER3S-YWIT2-GWDU2-TUF3Y',
                    success: (res1) => {
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
let useCloudFunc = function (funcName, data) {
    return new Promise((resolve, reject) => {
        Taro.cloud.callFunction({
            name: funcName,
            data: data
        }).then(res => {
            resolve(res.result)
        }).catch(err => {
            reject(err)
        })
    })
}
//axios=>post请求
let post = async function (url, data) {
    return await axios.post(host+url,data)
}
//axios=>update请求
let updateData = async function (url, data) {
    return await axios.post(host+url,data)
}
//跳转页面
let toUrl = function (url) {
    Taro.switchTab({
        url: url,
    })
}

export default { formatDate, login, getLocation, useCloudFunc, post, updateData, toUrl }