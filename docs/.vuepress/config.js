module.exports = {
    title: 'demo-vue-ui的说明文档',
    description: 'demo-vue-ui的说明文档',
    themeConfig : {
        // displayAllHeaders: true,
        sidebar:  {
            
            '/packages/':[
                '',
                ['start','开始'],
                ['button','按钮'],
                ['slider','轮播'],
                ['divider','分隔']
            ],
            '/guide/':[
                "",
                ['start','第一步']
            ],
            '/':[
                    "",
                    ['packages','组件'],
                    ['guide','教程'],
            ]
        }
      },
    port:8000,
    markdown : {lineNumbers:true}
  }