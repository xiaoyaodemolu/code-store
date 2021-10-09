import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const payFunc = () => {
    // Taro.requestPayment({
    //   timeStamp: new Date().getTime(),

    // })
  }
  return (
    <View style={{marginTop:'100px'}}>
      <Button onClick={payFunc}>发起支付</Button>
    </View>
  )
}
