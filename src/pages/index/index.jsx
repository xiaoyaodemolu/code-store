import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const [text, setText] = useState('点击。。')
  const saveInfo = async () => {
    console.log('9898info结果6677', aa)
  }
  return (
    <View >
      <Text>二维码商店</Text>
      <Button onClick={saveInfo}>点击</Button>
    </View>
  )
}
