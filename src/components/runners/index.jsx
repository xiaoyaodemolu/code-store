import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Image, Text, Swiper, SwiperItem, Input, Button, ScrollView } from '@tarojs/components'
import './index.scss'

export default function Index() {
    const [cardCur, setCardCur] = useState(0)
    const [isTop, setIsTop] = useState(false)
    const [whileTop, setWhileTop] = useState(10)
    const [scrollTop, setScrollTop] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            let query = Taro.createSelectorQuery()
            query.select('#card-swiper').boundingClientRect()
            query.selectViewport().scrollOffset()
            query.exec((res) => {
                console.log('9898res', res)
                if (res[0]) {
                    setWhileTop(res[0].height)
                    // setWhileTop(res[0].height-Taro.navBarLineHeight - Taro.navBarMarginTop)
                    // setWhileTop(400)
                }
            })
        }, 1000)
    }, [])
    const style = {
        marginTop: (Taro.navBarLineHeight + Taro.navBarMarginTop) + 'px',
        // paddingTop: (Taro.navBarLineHeight + Taro.navBarMarginTop) + 'px',
        // overflow: 'auto',
        height: '82%',
        position: 'relative'
    }
    console.log('9898刷新了吗', style)
    const imgList = [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }]
    const onScroll = () => {
        setScrollTop(whileTop)
        setIsTop(true)
    }
    const dianji = (e) => {
        console.log('9898高度', whileTop)
        setScrollTop(0)
        setIsTop(false)
    }
    return (
        <ScrollView className="contents" scrollY={!isTop} style={style} onScroll={onScroll} scrollTop={scrollTop} scrollWithAnimation={true}>
            <Swiper id="card-swiper" className="card-swiper" circular={true} autoplay={true} interval={5000} current={cardCur} duration={500} onChange={(e) => setCardCur(e.target.current)}>
                {imgList.map((item, index) => {
                    return (
                        <SwiperItem className={cardCur == index ? 'cur' : ''}>
                            <View className="swiper-item">
                                <Image src={item.url} mode="aspectFill"></Image>
                            </View>
                        </SwiperItem>
                    )
                })}
            </Swiper>
            <View id="runnersContent" className='runnersContent'>
                <View class="inputshadow" >
                    <View className="search-form round">
                        &nbsp;
                        <Text className="cuIcon-search"></Text>
                        <Input type="text" placeholder=" 搜索图片、文章、视频" confirm-type="search"></Input>
                    </View>
                    <View className="action">
                        <Button className="cu-btn bg-green shadow-blur round" onClick={dianji}>搜索</Button>
                    </View>
                </View>
                <ScrollView scrollY={isTop} id="orders" className='orders'>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}1</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}2</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}3</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}4</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}5</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}6</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>{isTop ? 'TRUE' : 'FALSE'}</View>
                    <View>结束结束结束结束</View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}
