import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置路由
  routes: [
    {
      path: '/', component: '@/pages/layouts/indexLayout',
      routes: [
        {path:"/index",component:'@/pages/index'},
        // {path:"/dvaAntUser",component:"@/pages/dvaAntUser/index"},
        { path: '/dvaProduct', component: '@/pages/dvaProduct/index' },
        { path: "/dvaExemple", component: '@/pages/dvaExemple/index' },
        {
          path: "/simple", component: "@/pages/simple/layouts/indexLayout",
          routes: [
            { path: "/simple/index", component: "@/pages/simple/pages/index" }
          ]
        },
        //权限路由，如用户只有登录才能访问某些资源
        {
          path: "/umiUserAuth", component: "@/pages/umiUserAuth/wrappers/auth",
          routes: [
            { path: "/umiUserAuth/home", component: "@/pages/umiUserAuth/home" }
          ]
        },
        { path: "login", component: "@/pages/umiUserAuth/login" },
        // 多层嵌套路由，path需要一层一层递增
        {
          path: "/umiParamDeal", component: "@/pages/umiParamDeal/layouts/indexLayout",
          routes: [
            {
              path: "/umiParamDeal/index", component: "@/pages/umiParamDeal/index",
              routes: [
                {
                  path: "/umiParamDeal/index/inner", component: "@/pages/umiParamDeal/inner",
                  routes: [
                    { path: "/umiParamDeal/index/inner/last", component: "@/pages/umiParamDeal/last" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  fastRefresh: {},
});
