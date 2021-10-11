import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, RadioGroup, Radio } from '@tarojs/components'
import './index.scss'
import utils from '@/utils/util'

export default function Start() {
    // const [mark, setMark] = useState(false)
    const [modalName, setModalName] = useState('cu-modal')
    const [schoolValue, setSchoolValue] = useState('')
    const [customerInfo, setCustomerInfo] = useState({})
    useEffect(() => {
        Taro.showLoading({
            title: 'loading...'
        })
        fetchInfo()
    }, [])
    //包装异步，在useEffect中使用
    async function fetchInfo() {
        if (process.env.TARO_ENV === 'weapp') {
            //初始化云函数
            Taro.cloud.init({
                env: 'runners-5g9pog2o5a12d16a'
            })
            //时间
            let date = utils.formatDate(new Date())
            //openid
            let openid = (await utils.useCloudFunc('getOpenid')).openid
            //地址
            let localAddress = (await utils.getLocation()).address
            //校验是否为新用户
            let newCustomer = await utils.post('/userInfo_search', { openid })
            console.log('新的查询', newCustomer)
            setTimeout(function () {
                Taro.hideLoading()
            }, 500)
            // return
            if (newCustomer.data.userInfo == null) {
                let userInfo = {
                    openid,
                    localAddress,           //登录地址
                    registerAddress: '',      //使用地址
                    createDate: date,
                    updateDate: ''
                }
                //isSelectAddress是否选择学校的标识，也可作为判断是否为老用户的标识
                Taro.isSelectAddress = false
                setCustomerInfo(userInfo)
                setModalName('cu-modal show')
            } else {
                Taro.isSelectAddress = true
                //用户信息存入storage
                Taro.setStorageSync('userInfo', { ...newCustomer.data.userInfo, localAddress })
                await utils.updateData('/userInfo_update', { searchParams: { openid }, updateParams: { localAddress } })
                utils.toUrl('/pages/home/index')
            }
        }
    }
    //没有？按钮函数
    const noSchool = () => {
        // utils.toUrl('/pages/home/index')
    }
    //随便看看函数
    const noLogin = () => {
        Taro.setStorageSync('userInfo', customerInfo)
        // utils.toUrl('/pages/home/index')
    }
    //选择学校函数
    const onChooseSchoolItem = (value) => {
        setSchoolValue(value)
        setCustomerInfo({ ...customerInfo, registerAddress: value })
    }
    //GO！函数
    const startGo = async () => {
        if (customerInfo.registerAddress == '') {
            console.log('9898不走这？', customerInfo)
            Taro.showToast({ title: '请选择社区！', icon: 'none' })
            return
        }
        console.log('9898没选学校')
        Taro.setStorageSync('userInfo', customerInfo)
        await utils.post('/userInfo_add', customerInfo)
        utils.toUrl('/pages/home/index')
    }
    return (
        <View>
            {process.env.NODE_ENV}
            {/* 新用户选择学校弹框 */}
            <View className={modalName}>
                <View className="cu-dialog">
                    <View className="cu-bar bg-white justify-end">
                        <View className="content">选择社区</View>
                    </View>
                    {/* <View className="padding-xl"> */}
                    <RadioGroup className="block">
                        <View className="cu-list menu text-left" style={{height:'350px',overflow:'auto'}}>
                            {[{ title: '清华大学', value: 'qinghua' }, { title: '北京大学', value: 'beida' }, { title: '复旦大学', value: 'fudan' }, { title: '南京大学', value: 'nanda' }, { title: '西安交通大学', value: 'xijiaoda' }, { title: '太原理工大学', value: 'taiyuanligong' }, { title: '山西大学', value: 'shanxidaxue' }, { title: '太原科技大学', value: 'taiyuankejidaxue' }].map(item => {
                                return (
                                    <View className="cu-item" key={item.value} onClick={()=>onChooseSchoolItem(item.value)}>
                                        <View className="title">{item.title}</View>
                                        <Radio className="radio" value={item.value} checked={schoolValue==item.value?true:false}></Radio>
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

            {/* 底部tabbar */}
            {/* <TabBar/> */}
        </View>
        // <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
