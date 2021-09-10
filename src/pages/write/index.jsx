import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'

export default function Index() {
  const [text, setText] = useState('点击。。')
  return (
    <View >
      第二页
    </View>
  )
}
