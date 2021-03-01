import React from 'react'
// 布局组件，要在该组建中通过props.children告诉嵌套组件的显示位置
export default function IndexLayout(props: any) {
  props.location.state =  { name: "小张", msg: "传递参数测试" }
  return (
    <div>
       <h1 style={{color:'orange'}}>Welcome your Visiting!</h1>
      <h1 style={{ color: 'red' }}>IndexLayout.tsx自定义路由组建。。。</h1>
      <div>{props.children}</div>
    </div>
  )
}