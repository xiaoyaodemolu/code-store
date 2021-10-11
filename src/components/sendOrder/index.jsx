import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView } from '@tarojs/components'
import './index.scss'

export default function Index(props) {
    const style1 = {
        height:'100%',
        paddingTop:props.style.marginTop,
        paddingBottom: '20%',
        backgroundColor: '#ffffff'
    }
    const style2 = {
        height:'100%',
        overflow: 'auto',
        padding: '10px'
    }
  const payFunc = () => {
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
    <View style={style1}>
        <View style={style2}>
            {/* <Button onClick={payFunc}>发起支付</Button> */}
            <View className='ordercard'>
                <View className='lm'></View>
                <View className='rm'></View>
                <View className='dashborder'></View>
                <View className='ordertitle'>

                </View>
                <View className='ordercontent'>

                </View>
            </View>
        </View>
    </View>
  )
}
