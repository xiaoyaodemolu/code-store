import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'

export default function Index() {
    console.log('个人信息页面1',Taro.getCurrentInstance().page.getTabBar())
    // useDidShow(() => {
    //     if (typeof scope.getTabBar === 'function' && scope.getTabBar()) {
    //       scope.getTabBar().$component.setSelected({
    //         selected: 3
    //       });
    //     }
    //   });
    return (
        <View>
            第三页
        </View>
    )
}
