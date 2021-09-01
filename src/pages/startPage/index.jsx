
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'

export default function Index() {
    const [outTime, setOutTime] = useState(5)

    // let timer = setTimeout(() => {
    //     clearTimeout(timer)
    //     changeTime()
    // }, 5000)

    const timeout = setInterval(() => {
        if (outTime == 0) {
            clearInterval(timeout)
            changeTime()
        }
        setOutTime(outTime - 1)
    }, 1000)
    useEffect(() => {
        console.log('9898useEffect走了吗')
        Taro.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#E0FFFF'
        })
        timeout
    },timeout);
    const changeTime = () => {
        console.log('9898开始启动了吗')
        Taro.switchTab({
            url: '/pages/index/index',
        })
    }
    return (
        // <View>
        //     启动页离开还有{outTime}秒le。。。
        // </View>
        <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
