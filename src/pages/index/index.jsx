import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, RadioGroup, Radio } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'
import utils from '@/utils/util'

export default function Index() {
    console.log('1010222')
    const [mark, setMark] = useState(false)
    const [modalName, setModalName] = useState('cu-modal')

    useEffect(() => {
        fetchInfo()
    }, [mark])
    //包装异步，在useEffect中使用
    async function fetchInfo() {
        if (process.env.TARO_ENV === 'weapp') {
            //初始化云函数
            Taro.cloud.init({
                env: 'cloud1-7gxpsw7i3b71f7cf'
            })
            //时间
            let date = utils.formatDate(new Date())
            //openid
            let openid = (await utils.useCloudFunc('getOpenid')).openid
            // //地址
            let localAddress = (await utils.getLocation()).address
            let userInfo = {
                date,
                openid,
                localAddress,           //登录地址
                registerAddress: ''      //使用地址
            }
            //校验是否为新用户
            let newCustomer = await utils.searchData('customerInfo', { openid })
            // // let newCustomer = false
            if (newCustomer == false) {
                //isSelectAddress是否选择学校的标识，也可作为判断是否为老用户的标识
                Taro.isSelectAddress = false
                setModalName('cu-modal show')
                // await utils.addData('customerInfo',userInfo)
            } else {
                Taro.isSelectAddress = true
                setModalName('cu-modal show')
                // await utils.updateData('customerInfo',{openid},{localAddress:'嘿嘿哈哈'})
            }
            // //用户信息存入storage
            Taro.setStorageSync('userInfo', userInfo)
            console.log('9898拿到个啥', newCustomer)
        }
    }
    const startGo = async() => {
        await utils.addData('customerInfo',Taro.getStorageSync('userInfo'))
        Taro.switchTab({
            url: '/pages/home/index',
        })
    }
    return (
        <View>
            <NavBar/>
            {/* 新用户选择学校弹框 */}
            <View className={modalName}>
                <View className="cu-dialog">
                    <View className="cu-bar bg-white justify-end">
                        <View className="content">选择社区</View>
                    </View>
                    {/* <View className="padding-xl"> */}
                    <RadioGroup className="block">
                        <View className="cu-list menu text-left">
                            {['清华大学', '北京大学', '复旦大学', '南京大学', '西安交通大学'].map((item, i) => {
                                return (
                                    <View className="cu-item" key={i}>
                                        <View className="title">{item}</View>
                                        <Radio className="blue radio"></Radio>
                                    </View>
                                )
                            })}
                        </View>
                    </RadioGroup>
                    {/* </View> */}
                    {/* <View className="cu-bar bg-white justify-end"> */}
                    {/* <View className="cu-bar bg-white">
                                <View className="action flex-sub">没有？</View>
                                <Button className="action cu-btn flex-sub line-green text-green" bindtap="hideModal">随便看看</Button>
                                <Button className="action cu-btn flex-sub bg-green margin-left" onClick={changeTime}>确定</Button>
                           
                    </View> */}
                    <View class="cu-bar bg-white">
                        <View className="action margin-0 flex-sub text-cyan " onClick={startGo}>没有？</View>
                        <View className="action margin-0 flex-sub text-grey solid-left" onClick={startGo}>随便看看</View>
                        <View className="action margin-0 flex-sub text-cyan solid-left" onClick={startGo}>GO!</View>
                    </View>
                </View>
            </View>
        </View>
        // <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
