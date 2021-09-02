import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'

export default function Index() {
  const [text, setText] = useState('点击。。')
  console.log('主页方法')
  return (
    <View >
      <NavBar/>
      主页=》{Taro.isSelectAddress?'老用户':'新用户'}
    </View>
  )
}
