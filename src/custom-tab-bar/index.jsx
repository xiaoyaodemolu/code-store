import Taro, { getCurrentPages } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { useState, useEffect, useRef, useCallback } from 'react'
import './index.scss'
import aa1 from './images/income-select.png'
import aa2 from './images/income.png'
import bb1 from './images/message-select.png'
import bb2 from './images/message.png'
import cc1 from './images/post-select.png'
import cc2 from './images/post.png'

export default function NavBar() {
    const [selected, setSelected] = useState('')
    console.log('9898载入多少',selected)
    // useCallback(()=>{
    //     console.log('9898存值',selected)
    // },[selected])
    const style = {
        paddingTop: '5px',
        paddingBottom: Taro.safeBottomPadding + 'px'
    }
    // 临时定义图片
    const list = [
        { selectedPath: aa1, path: aa2, pagePath:'/pages/home/index', bulge: false, text: '流水' },
        { selectedPath: cc1, path: cc2, pagePath:'/pages/write/index', bulge: true },
        { selectedPath: bb1, path: bb2, pagePath:'/pages/selfInfo/index', bulge: false, text: '消息' }
    ]
    const switchTab = (item,index) => {
        console.log('9898跳转2',item,index)
        Taro.switchTab({
            // url: index == 0? '/src/pages/home/index.jsx':(index==1?'/src/pages/write/index':'/src/pages/selfInfo/index')
            url: item.pagePath
        })
        // setSelected(index)
        
    }
    return (
        <View className="tabbar" style={style}>
            {list.map((item,index)=>{
                return (
                    <View key={index} className={'tabbar-item'+(item.bulge?' bulge':'')}  onClick={()=>switchTab(item,index)}>
                        <View className="tabbar-bulge tabbar-text"></View>
                        <Image className="image" src={selected==index?item.selectedPath:item.path}/>
                        {item.text?<View className="tabbar-text">{item.text}</View>:''}
                    </View>
                )
            })}
        </View>
    )
}