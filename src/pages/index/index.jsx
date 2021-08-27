import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import utils from '@/utils/util'

export default function Index() {
    const [ text,setText ] = useState('点击。。')
    const info = {
        name: '',
        time: '',
        address: ''
    }
    
    const saveInfo = async () => {
        info.name = (await utils.login()).userInfo.nickName
        info.address = (await utils.getLocation()).data.result.address
        let date = new Date()
        info.time = utils.formatDate(date)

        console.log('9898info结果6677',info)
    }
    return (
        <View className='index'>
            <Text>二维码商店</Text>
            <Button onClick={saveInfo}>点击</Button>
        </View>
    )
}
