import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Component } from 'react'
import './app.scss'

class App extends Component {

    isIPhoneX = () => {
    }
    async componentDidMount() {
        let screenHeight = Taro.getSystemInfoSync().screenHeight
        let safeArea = Taro.getSystemInfoSync().safeArea
        let btnInfo = Taro.getMenuButtonBoundingClientRect()
        Taro.isIPhoneX = screenHeight !== safeArea.bottom
        Taro.navBarMarginTop = btnInfo.top || 0
        Taro.navBarHeight = btnInfo.height || 0
        Taro.navBarLineHeight = btnInfo.height || 0
        Taro.navBarMarginLeft = safeArea.width - btnInfo.right
        Taro.safeBottomPadding = screenHeight - safeArea.bottom
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
