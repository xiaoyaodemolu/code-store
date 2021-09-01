import { Component, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
    const [ text,setText ] = useState('点击。。')
    return (
        <View className='index'>
            <Text>我的个人信息</Text>
            <Button onClick={()=>setText('点击')}>{text}</Button>
        </View>
    )
}
