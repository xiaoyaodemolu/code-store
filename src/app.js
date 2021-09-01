import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'
import utils from './utils/util'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowSelectModal: true
        }
    }
    async componentDidMount() {
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
            // let isNewCustomer = await utils.useCloudFunc('isNewCustomer',{openid})
            // let aa = await utils.searchData('customerInfo',{openid:'o7MH55cmTNBJFas252BXav_OvoLB'})
            let isNewCustomer = await utils.searchData('customerInfo',{openid})
            if(isNewCustomer==false){
                
                await utils.addData('customerInfo',userInfo)
            }else{
                await utils.updateData('customerInfo',{openid},{localAddress:'嘿嘿哈哈'})
            }
            console.log('9898拿到个啥',isNewCustomer)
            //用户信息存入storage
            Taro.setStorageSync('userInfo', userInfo)
            Taro.showActionSheet({
                itemList: ['A', 'B', 'C'],
                success (res) {
                  console.log(res.tapIndex)
                },
                fail (res) {
                  console.log(res.errMsg)
                }
              })
        }
    }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }



    // this.props.children 是将要会渲染的页面
    render() {
        console.log('9898啥玩意',this.props.children)
        return this.props.children
    }
}

export default App
