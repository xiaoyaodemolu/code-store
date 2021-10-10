import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const payFunc = () => {
    // Taro.requestPayment({
    //   timeStamp: new Date().getTime(),

    // })
    let data = {
      openid: Taro.getStorageSync('userInfo').openid,
      money: 0.1
    }
    Taro.request({
      url: "http://82.157.124.108:8087/wxpay",
      // url: "http://82.157.124.108:8087/wxpay",
      data: data,
      method: "POST",
      dataType: "json",
      success: (res) => {
        let data = res.data.data
        Taro.requestPayment({
          timeStamp: data.timeStamp,
          package: "prepay_id=" + data.prepayId,
          nonceStr: data.nonceStr,
          signType: "MD5",
          paySign: data.paySign,
          success: (res) => {
            console.log("支付成功", res)
          },
          fail: (res) => {
            console.log("支付失败", res)
          },
          // complete: function (res) { }
        })
      }
    })

  }
  return (
    <View style={{ marginTop: '100px' }}>
      <Button onClick={payFunc}>发起支付</Button>
    </View>
  )
}
