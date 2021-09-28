import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import more from './images/more.png';
import './index.scss'

export default function NavBar() {
    const style = {
        width: (Taro.navBarHeight-5) + 'px',
        height: (Taro.navBarHeight-5) + 'px',
        lineHeight: (Taro.navBarLineHeight-5) + 'px',
        top: Taro.navBarMarginTop + 'px',
        left: ( Taro.navBarMarginLeft + 5 ) + 'px'
    }
    return (
        <Image src={more} className='navbar' style={style}/>
    )
}