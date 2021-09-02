import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Component } from 'react'
import './app.scss'
import utils from './utils/util'

class App extends Component {

    async componentDidMount() {
        Taro.getSystemInfo({
            success:(res)=>{
                let btnInfo = Taro.getMenuButtonBoundingClientRect()
                Taro.navBarMarginTop = btnInfo.top || 0
                Taro.navBarHeight = btnInfo.height || 0
                Taro.navBarLineHeight = btnInfo.height || 0
                Taro.navBarMarginLeft = res.safeArea.width - btnInfo.right
            }
        })
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
