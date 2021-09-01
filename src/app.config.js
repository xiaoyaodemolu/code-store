export default {
    pages: [
        'pages/index/index',
        'pages/selfInfo/index'
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
        list: [
            {
                iconPath: 'statics/tabBar/codesStore.png',
                selectedIconPath: 'statics/tabBar/codesStore.png',
                pagePath: 'pages/index/index',
                text: 'Runners'
            }, 
            {
                iconPath: 'statics/tabBar/selfInfo.png',
                selectedIconPath: 'statics/tabBar/selfInfo.png',
                pagePath: 'pages/selfInfo/index',
                text: '我的'
            }, 
            // {
            //     iconPath: 'resource/node.png',
            //     selectedIconPath: 'resource/node_on.png',
            //     pagePath: 'pages/nodes/nodes',
            //     text: '节点'
            // }
        ],
        'color': '#000',
        'selectedColor': '#00FF7F',
        'backgroundColor': '#93D3FF',
        'borderStyle': 'black'
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#93D3FF',
        navigationBarTitleText: 'Codes-Store',
        navigationBarTextStyle: 'black',
        
    }
}
