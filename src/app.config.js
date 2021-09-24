export default {
    pages: [
        'pages/index/index', 
        'pages/home/index',
        // 'pages/sendOrder/index',
        // 'pages/message/index',
    ],
    permission: {
        "scope.userLocation": {
            desc: "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶一次后台定位
        },
        // "scope.userLocationBackground": {
        //     desc: "你的位置信息将用于小程序位置接口的效果展示实时的" // 高速公路行驶持续后台定位
        // }
    },
    requiredBackgroundModes: ['location'],     //配合scope.userLocationBackground使用
    tabBar: {
        selectedColor: "#3cc51f",
        borderStyle: "black",
        backgroundColor: "#ffffff",
        custom: true,
        color: "#7A7E83",
        list: [
            {
                // iconPath: 'statics/tabBar/income.png',
                // selectedIconPath: 'statics/tabBar/income-select.png',
                pagePath: 'pages/index/index',
                text: '流水'
            },
            {
                // iconPath: 'statics/tabBar/income.png',
                // selectedIconPath: 'statics/tabBar/income-select.png',
                pagePath: 'pages/home/index',
                text: '流水'
            },
            // {
            //     heigher: true,
            //     iconPath: 'statics/tabBar/post.png',
            //     selectedIconPath: 'statics/tabBar/post-select.png',
            //     pagePath: 'pages/sendOrder/index',
            //     text: '添加'
            // }, 
            // {
            //     iconPath: 'statics/tabBar/message.png',
            //     selectedIconPath: 'statics/tabBar/message-select.png',
            //     pagePath: 'pages/message/index',
            //     text: '信息'
            // }
            ],
            'color': '#000',
            'selectedColor': '#00FF7F',
            'backgroundColor': '#93D3FF',
            'borderStyle': 'black'
        },
    window: {
        // backgroundTextStyle: 'light',
        // navigationBarBackgroundColor: '#93D3FF',
        // navigationBarTitleText: 'Codes-Store',
        // navigationBarTextStyle: 'black',
        navigationStyle: 'custom'
    }
}
