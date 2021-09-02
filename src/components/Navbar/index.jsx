import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import home from '@/statics/tabBar/home.png';
import './index.scss'

export default function NavBar() {
    const style = {
        width: Taro.navBarHeight + 'px',
        height: Taro.navBarHeight + 'px',
        lineHeight: Taro.navBarLineHeight + 'px',
        top: Taro.navBarMarginTop + 'px',
        left: ( Taro.navBarMarginLeft + 5 ) + 'px'
    }
    return (
        // <View className='navbar' style={style}>
        //     <View>自定义导航栏</View>
        // </View>
        <Image src={home} className='navbar' style={style}/>
    )
}