// index.js
// 云函数入口文件,获取小程序码
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
      page: event.pages,
      scene: event.scene,
      isHyaline: true
    })
    
    return result
  } catch (err) {
    throw err
  }
}
