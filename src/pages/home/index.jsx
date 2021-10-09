import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, RadioGroup, Radio } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'
import TabBar from '@/components/Tabbar/index'
import utils from '@/utils/util'
import Runners from '@/components/runners/index'
import SendOrder from '@/components/sendOrder/index'
import Message from '@/components/message/index'

export default function Index() {
    const style = {
        marginTop: (Taro.navBarLineHeight + Taro.navBarMarginTop) + 'px',
        height: '81%',
    }
    const [modalName, setModalName] = useState('')
    const [showPage, setShowPage] = useState(0)
    const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState('0')
    const setStyle = () => {
        setModalName('')
        setBorderBottomLeftRadius('0')
    }
    const navBarFunc = () => {
        setModalName('viewModal')
        setBorderBottomLeftRadius('35px')
    }
    return (
        <View>
            <View className={'DrawerPage bg-gradual-gradualCyanBlue' + (modalName == 'viewModal' ? ' show' : '')}>
                <View onClick={navBarFunc}>
                    <NavBar/>
                </View>
                {showPage == 0 ? <Runners style={style}/> : (showPage == 1 ? <SendOrder /> : <Message style={style}/>)}
                <TabBar borderBottomLeftRadius={borderBottomLeftRadius} setShowPage={setShowPage} />
            </View>
            <View className={'DrawerClose' + (modalName == 'viewModal' ? ' show' : '')} onClick={setStyle}>
                <Text className="cuIcon-pullright"></Text>
            </View>
            <View style={{ marginTop: '300px' }} className={'DrawerWindow' + (modalName == 'viewModal' ? ' show' : '')}>
                我是副页
            </View>
        </View>
    )
}