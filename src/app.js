import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {
    if(process.env.TARO_ENV === 'weapp'){
      Taro.login({
        success: (res) => {
          Taro.setStorageSync('loginCode', res.code)
        }
      })
      console.log('98981116',Taro.getStorageSync('loginCode'))
      
      Taro.authorize({
        scope: 'scope.userLocation',
        success: () =>{
          Taro.getLocation({
            success:(aa)=>{
              console.log('9898地址11',aa)
            }
          })
        }
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
