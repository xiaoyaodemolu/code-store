import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, Image, NavigationBar, Navigator } from '@tarojs/components'
import './index.scss'
import NavBar from '@/components/Navbar/index'
import utils from '@/utils/util'

export default async function Index() {
    console.log('1010222')
    const [mark, setMark] = useState(false)
    const changeTime = () => {
        Taro.switchTab({
            url: '/pages/index/index',
        })
    }
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
            //地址
            let localAddress = (await utils.getLocation()).address
            let userInfo = {
                date,
                openid,
                localAddress,           //登录地址
                registerAddress:''      //使用地址
            }
            //校验是否为新用户
            let newCustomer = await utils.searchData('customerInfo',{openid})
            // let newCustomer = false
            if(newCustomer==false){
                //isSelectAddress是否选择学校的标识，也可作为判断是否为老用户的标识
                Taro.isSelectAddress = false
                setMark(true)
                // await utils.addData('customerInfo',userInfo)
            }else{
                // if(newCustomer[0].registerAddress){
                //     Taro.isSelectAddress = true
                // }else{
                //     Taro.isSelectAddress = false
                // }
                Taro.isSelectAddress = true
                setMark(false)
                Taro.setStorageSync('userInfo', userInfo)
                // await utils.updateData('customerInfo',{openid},{localAddress:'嘿嘿哈哈'})
            }
            if(Taro.isSelectAddress===false){
                console.log('这是新用户',Taro.getStorageSync('userInfo'))
            }else{
                console.log('这是老用户1',Taro.getStorageSync('userInfo'))
            }
            console.log('9898拿到个啥',newCustomer)
            //用户信息存入storage
        }
    }
    useEffect(()=>{
        fetchInfo()
    },[])
    
    return (
        <View>
            <NavBar/>
            <Button onClick={changeTime}>进入小程序</Button>
        </View>
        // <Image src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'/>
    )
}
