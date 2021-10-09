import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'
import React from 'react'
import utils from '@/utils/util'
import avatar from './images/avatar.png'

export default function Index(props) {
    const [userInfo,setUserInfo] = useState({})

    const dianji = async () => {
        let userInfo = await utils.login()
        console.log('9898xinxi',userInfo)
        setUserInfo(userInfo)
    }

    const style = {
        paddingTop: (Taro.navBarLineHeight + Taro.navBarMarginTop) + 'px',
    }
    return (
        <View className='myinfo' style={style}>
            <View className='basicinfo' >
                <View className='userinfo'>
                    <View>
                        <Image style={{backgroundColor:'#1296db'}} src={userInfo.avatarUrl?userInfo.avatarUrl:avatar} className='avatarimage'/>
                    </View>
                    <View className='nickname'>
                        {userInfo.nickName?userInfo.nickName:'登录'}
                        {/* <Text className='iconfont' style={{fontSize:'35px',color:'#707070'}}>&#xe61b;</Text> */}
                    </View>
                </View>
                <View className='userbar'>
                    <View className='baritem'>
                        <View>
                            56
                        </View>
                        <View>
                            关注
                        </View>
                    </View>
                    <View className='baritem'>
                        <View>
                            680
                        </View>
                        <View>
                            粉丝
                        </View>
                    </View>
                    <View className='baritem'>
                        <View>
                            288
                        </View>
                        <View>
                            获赞
                        </View>
                    </View>
                </View>
            </View>
            <View className='contents' onClick={dianji}>

            </View>
        </View>
    )
}
