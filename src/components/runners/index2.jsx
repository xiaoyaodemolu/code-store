import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Image, Text, Swiper, SwiperItem, Input, Button, ScrollView } from '@tarojs/components'
import './index.scss'
import coin from './images/coin.png'
const goodsList1 = [
    {
        id: '1',
        storeName: '大郎烧饼的说法大商股份都不放过',
        desc: '这是一个外卖',
        tagId: '1',
        price: 10,
        goodsPrice: 25,
        imgUrl: '',
        address: '1号楼302室',
        orderTotal: 10
    },
    {
        id: '2',
        storeName: '东校门顺丰',
        desc: '这是一个取快递',
        tagId: '2',
        price: 2,
        goodsPrice: 0,
        imgUrl: '',
        address: '1号楼302室',
        orderTotal: 102
    },
    {
        id: '3',
        storeName: '肯德基',
        desc: '这是一个外卖',
        tagId: '1',
        price: 5,
        goodsPrice: 68,
        imgUrl: '',
        address: '2号楼602室',
        orderTotal: 60
    },
    {
        id: '4',
        storeName: '运城大盘鸡',
        desc: '这是一个外卖',
        tagId: '1',
        price: 2,
        goodsPrice: 25,
        imgUrl: '',
        address: '6号楼802室',
        orderTotal: 60
    },
    {
        id: '5',
        storeName: '西门中通',
        desc: '这是一个快递',
        tagId: '2',
        price: 5,
        goodsPrice: 0,
        imgUrl: '',
        address: '1号楼302室',
        orderTotal: 302
    },
    {
        id: '6',
        storeName: '麦当劳',
        desc: '这是一个外卖',
        tagId: '1',
        price: 6,
        goodsPrice: 55,
        imgUrl: '',
        address: '7号楼209室',
        orderTotal: 80
    },
    {
        id: '7',
        storeName: '德克士',
        desc: '这是一个外卖',
        tagId: '1',
        price: 6,
        goodsPrice: 65,
        imgUrl: '',
        address: '3号楼382室',
        orderTotal: 99
    },
    {
        id: '8',
        storeName: '大郎烧饼',
        desc: '这是一个外卖',
        tagId: '1',
        price: 3,
        goodsPrice: 25,
        imgUrl: '',
        address: '8号楼302室',
        orderTotal: 810
    },
    {
        id: '9',
        storeName: '王哥烧烤',
        desc: '这是一个外卖',
        tagId: '1',
        price: 6,
        goodsPrice: 75,
        imgUrl: '',
        address: '8号楼162室',
        orderTotal: 19
    },
]
export default function Index() {
    const [cardCur, setCardCur] = useState(0)
    const [goodsList, setGoodsList] = useState([])
    useEffect(() => {
        setGoodsList(goodsList1)
    },[])
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]
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
    const style = {
        marginTop: (Taro.navBarLineHeight + Taro.navBarMarginTop) + 'px',
        overflow: 'auto',
        height: '82%',
    }

    const aa = () => {
        console.log('9898到底了到底了')
    }
    const bb = (e) => {
        console.log('9898手指离开屏幕',e)
        let query = Taro.createSelectorQuery()
        query.select('#item'+goodsList[goodsList.length-1].id).boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec((res) => {
            console.log('9898itemid',res)
        })
    }
    const cc = () => {
        console.log('9898istop',isTop)
    }
    return (
        <View id="contents" className="contents" style={style} onTouchEnd={bb}>
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
            <View id='searchbar' className='searchbar'>
                <View className="cu-bar search bg-white searchborder">
                    <View className="search-form round">
                        <Text className="cuIcon-search"></Text>
                        <Input type="text" placeholder="搜索图片、文章、视频" confirmType="search"></Input>
                    </View>
                    <View className="action">
                        <Button className="cu-btn bg-gradual-gradualCyanBlue shadow-blur round">搜索</Button>
                    </View>
                </View>
            </View>
            {/* <ScrollView className={isTop?"scrollcontents addheight":"scrollcontents"} scrollY onScrollToLower={aa} lowerThreshold={200}> */}
            <ScrollView className="scrollcontents" scrollY onScrollToLower={aa} lowerThreshold={200}>
                {goodsList.map(item => {
                    return (
                        <View id={'item'+item.id} className='goodsitem shadow-warp' onClick={cc}>
                            <View className='goodsimg'>
                                <Image src='https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg' />
                            </View>
                            <View className='goodsdesc'>
                                <View className='storename'>
                                    {item.storeName}
                                </View>
                                <View>
                                    <Text style={{ color: '#44B2AD', fontSize: '18px' }} className='iconfont'>&#xe64f;</Text>
                                    {item.orderTotal}
                                </View>
                                <View>
                                    <Text>
                                        完成此单需要约
                                </Text>
                                    <Text style={{ color: 'red' }}>{item.goodsPrice}</Text>
                                    <Text>元</Text>
                                </View>
                                <View style={{ color: '#44B2AD' }}>更多。。。<Text style={{ fontSize: '14px' }} className='iconfont'>&#xe62d;</Text></View>
                            </View>
                            <View className='goodsmoney'>
                                <View>
                                    <Image src={coin} />
                                    <Text style={{ color: '#44B2AD', fontSize: '20px' }}>{item.price}</Text>
                                </View>
                                <View className='deal'>
                                    <Text style={{ fontSize: '30px', color: '#4DC4B5' }} className='iconfont'>&#xe86f;</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <View>最后1页</View>
            </ScrollView>
        </View>
    )
}
