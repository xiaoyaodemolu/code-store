import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'

class App extends Component {

    componentDidMount() {
        if (process.env.TARO_ENV === 'weapp') {
            //获取登录code
            Taro.login({
                success: (res) => {
                    console.log('9898resres',res)
                    Taro.setStorageSync('loginCode', res.code)
                }
            })
            //获取位置信息
            Taro.authorize({
                scope: 'scope.userLocation',
                success: () => {}
            })
            // 获取实时位置
            // Taro.authorize({
            //     scope: 'scope.userLocationBackground',
            //     success: () => {
            //         Taro.startLocationUpdateBackground({
            //             success: (res) => {
            //                 console.log('9898什么啊',res)
            //             }
            //         })
            //     }
            // })
        }
    }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    // this.props.children 是将要会渲染的页面
    render() {
        return this.props.children
    }
}

export default App
