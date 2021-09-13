import Taro, { setStorageSync } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { useState, useEffect, useRef } from 'react'
import './index.scss'
import runner from './images/runner.png'
import runnerSelected from './images/runner-selected.png'
import sendorder from './images/sendorder.png'
import sendorderSelected from './images/sendorder-selected.png'
import message from './images/message.png'
import messageSelected from './images/message-selected.png'

export default function TabBar(props) {
    console.log('9898props',props)
    const [selected, setSelected] = useState(0)
    const [animation, setAnimation] = useState('')

    const toggle = () => {
        setAnimation('shake')
        setTimeout(function () {
            setAnimation('')
        }, 500)
    }
    let style = {
        paddingTop: '5px',
        paddingBottom: Taro.safeBottomPadding + 'px',
        borderBottomLeftRadius: props.borderBottomLeftRadius
    }
    // 临时定义图片
    const list = [
        { path: runner, selectedPath: runnerSelected, index: 0, bulge: false, text: 'runner' },
        { path: sendorder, selectedPath: sendorderSelected, index: 1, bulge: true },
        { path: message, selectedPath: messageSelected, index: 2, bulge: false, text: '消息' }
    ]
    const switchTab = (item) => {
        setSelected(item.index)
        toggle()
        props.setShowPage(item.index)
    }
    return (
        <View className="tabbar" style={style}>
            {list.map(item => {
                return (
                    <View ket={item.index} className={'tabbar-item' + (item.bulge ? ' bulge' : '')} onClick={() => switchTab(item)}>
                        <View className="tabbar-bulge tabbar-text"></View>
                        {/* <Image className="image" src={selected == item.index ? item.selectedPath : item.path} /> */}
                        <Image className={'image animation-' + (animation == 'shake' && selected == item.index ? 'shake' : '') + ' animation-reverse shadow'} src={selected == item.index ? item.selectedPath : item.path}/>
                        {item.text ? <View className={selected == item.index ? "tabbar-text-selected" : "tabbar-text"}>{item.text}</View> : ''}
                    </View>
                )
            })}
        </View>
    )
}