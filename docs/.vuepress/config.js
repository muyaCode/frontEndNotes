module.exports = {
  title: '前端学习笔记',
  description: '记录前端学习的路径过程和笔记',
  base: '/frontEndNotes/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
      nav: [
          { text: '首页', link: '/' },
          { 
              text: '牧涯', 
              items: [
                  { text: 'Github', link: 'https://github.com/muyaCode' },
                  { text: '掘金', link: 'https://juejin.cn/user/3544481219748590' }
              ]
          }
      ],
      sidebar: [
        {
            title: '欢迎学习',
            path: '/',
            collapsable: true, // 折叠
            children: [
                { title: "学前必读", path: "/" }
            ]
        },
        {
          title: "基础学习",
          path: '/',
          collapsable: true, // 不折叠
          children: [
            { title: "条件类型", path: "/" },
            { title: "泛型", path: "/" }
          ],
        }
      ]
  }
}