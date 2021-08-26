import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  dianji = () => {
    Taro.getUserProfile({
      lang: 'zh_CN',
      desc: '我要信息',
      success: (res) => {
        console.log('9898个人信息',res)
      }
    })
  }
  render() {
    return (
      <View className='index'>
        <Text>临猗县一带一路发展战略合作合办-创业发展协会正式启动！！！</Text>
        <Button onClick={this.dianji}>点击</Button>
      </View>
    )
  }
}
