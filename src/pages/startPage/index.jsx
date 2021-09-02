import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, Image, NavigationBar, Navigator } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'
import ll from './ll.jpg'

export default function Index() {
    console.log('1010222')
    const [outTime, setOutTime] = useState(5)
    Taro.getSystemInfo({
        success:(res)=>{
            let btnInfo = Taro.getMenuButtonBoundingClientRect()
            console.log('9898胶囊信息',Taro.getMenuButtonBoundingClientRect())
            console.log('9898手机信息',res)
            Taro.navBarMarginTop = btnInfo.top || 0
            Taro.navBarHeight = btnInfo.height || 0
            Taro.navBarLineHeight = btnInfo.height || 0
            Taro.navBarMarginLeft = res.safeArea.width - btnInfo.right
        }
    })
    const changeTime = () => {
        Taro.switchTab({
            url: '/pages/index/index',
        })
    }
    return (
        <View className='startpage' onCatchTouchMove={true}>
            <NavBar/>
            <Button onClick={changeTime}>进入小程序</Button>
        </View>
        // <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
