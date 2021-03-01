# umi3-dva-sample

这是一个学习创建umi项目的简易例子，通过umi脚手架创建。

目的是学习umi的路由配置，以及umi整合dva的用法。

## 项目创建

```shell
#创建一个目录作为项目名称
mkdir umi3-dva-sample
#切换
cd umi3-dva-sample
#使用官方脚手架工具创建项目
yarn create @umijs/umi-app
#然后还需要使用yarn安装依赖
yarn
#启动项目
yarn start
```

## 学习提示

按照官方教程创建umi项目，在整合dvaumi项目有时会提示：

`模块“"../../node_modules/umi/types"”没有导出的成员“connect”。ts(2305)`

可能的原因是在下载依赖过程中发生某些错误，这时最好清除再重新用脚手架工具创建，创建完以后不需要额外安装依赖

这是使用 `@umijs/umi-app`脚手架工具创建的简单的入门项目，如果在项目中使用`Ant Design Pro`，可以去参考[Ant Design文档](https://pro.ant.design/docs/getting-started-cn)



## 相关文档

UmiJS VERSION 3.X:https://umijs.org/zh-CN/docs/getting-started

github关于umi的资源：https://github.com/umijs/umi

umi整合dva：https://umijs.org/zh-CN/plugins/plugin-dva

dvaJS文档：https://dvajs.com/guide/getting-started.html