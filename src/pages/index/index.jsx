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
    const [customerInfo, setCustomerInfo] = useState({})
    useEffect(() => {
        fetchInfo()
    }, [mark, modalName, customerInfo])
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
                setCustomerInfo(userInfo)
                setModalName('cu-modal show')
                // await utils.addData('customerInfo',userInfo)
            } else {
                Taro.isSelectAddress = true
                //用户信息存入storage
                Taro.setStorageSync('userInfo', userInfo)
                utils.toUrl('/pages/home/index')
                // await utils.updateData('customerInfo',{openid},{localAddress:'嘿嘿哈哈'})
            }
        }
    }
    //没有？按钮函数
    const noSchool = () => {
        utils.toUrl('/pages/home/index')
    }
    //随便看看函数
    const noLogin = () => {
        Taro.setStorageSync('userInfo', customerInfo)
        utils.toUrl('/pages/home/index')
    }
    //选择学校函数
    const onChooseSchool = (e) => {
        setCustomerInfo({...customerInfo,registerAddress:e.target.value})
    }
    //GO！函数
    const startGo = async () => {
        console.log('9898不走这？',customerInfo)
        if(customerInfo.registerAddress==''){
            console.log('9898没选学校')
            return
        }
        Taro.setStorageSync('userInfo', customerInfo)
        await utils.addData('customerInfo', customerInfo)
        utils.toUrl('/pages/home/index')
    }
    return (
        <View>
            <NavBar />
            {/* 新用户选择学校弹框 */}
            <View className={modalName}>
                <View className="cu-dialog">
                    <View className="cu-bar bg-white justify-end">
                        <View className="content">选择社区</View>
                    </View>
                    {/* <View className="padding-xl"> */}
                    <RadioGroup className="block" onChange={onChooseSchool}>
                        <View className="cu-list menu text-left">
                            {[{title:'清华大学',value:'qinghua'},{title:'北京大学',value:'beida'},{title:'复旦大学',value:'fudan'},{title:'南京大学',value:'nanda'},{title:'西安交通大学',value:'xijiaoda'}].map(item => {
                                return (
                                    <View className="cu-item" key={item.value}>
                                        <View className="title">{item.title}</View>
                                        <Radio className="blue radio" value={item.value}></Radio>
                                    </View>
                                )
                            })}
                        </View>
                    </RadioGroup>
                    <View class="cu-bar bg-white">
                        <View className="action margin-0 flex-sub text-cyan " onClick={noSchool}>没有？</View>
                        <View className="action margin-0 flex-sub text-grey solid-left" onClick={noLogin}>随便看看</View>
                        <View className="action margin-0 flex-sub text-cyan solid-left" onClick={startGo}>GO!</View>
                    </View>
                </View>
            </View>
        </View>
        // <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
