import Taro from '@tarojs/taro'
import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'

export default function Index() {
    const [ text,setText ] = useState('点击')
    console.log('个人信息页面')
    return (
        <View>
            <NavBar/>
            个人信息页面~~~{Taro.isSelectAddress?'老用户':'新用户'}
        </View>
    )
}
