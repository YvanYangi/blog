module.exports = {
    // theme: 'yubisaki',
    title: '个人主页',
    description: 'Personal Website',
    head: [
        ['link', {rel: 'shortcut icon', href: `/WechatIMG1.png`}],
    ],
    plugins: [
        'flowchart'
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        serviceWorker: {
            //updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
                message: "内容已更新！",
                buttonText: "Refresh"
            }
        },
        nav: [
            {text: '主页', link: '/'},
            // { text: 'Guide', link: '/guide/' },
            // {text: 'Github', link: 'https://github.com/yvanyangi'},
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese' },
            //         { text: 'Japanese', link: '/language/japanese' }
            //     ]
            // }
        ],
        sidebar: [


            // '/home/home',
            // {
            //     title: 'JAVA 片段',
            //     collapsable: true,
            //     children: [
            //         '/java/aes-rsa-java',
            //         '/java/java-write-json'
            //     ]
            // },
            // {
            //     title: 'HTML 片段',
            //     collapsable: true,
            //     children: [
            //         '/html/photo-update',
            //         '/html/get-url-params'
            //     ]
            // },
            // '/mysql/mysql'
            // ,
            // {
            //     title: '流媒体',
            //     collapsable: true,
            //     children: [
            //         '/rtmp/nginx-rtmp',
            //         '/rtmp/opencv'
            //     ]
            // },
            // {
            //     title: '地图',
            //     collapsable: true,
            //     children: [
            //         '/map/map-bubble',
            //         '/map/estimated-time'
            //     ]
            // }

        ]
    }
};
