import React, { useState, useRef, useCallback } from 'react';
//在当前组件中把回调函数放在props.location.state传递给嵌套组件，这里通过props.children传递
export default function index(props: any) {
  let {name,msg} = props.location.state;
  const obj = {add:"deal组件添加的信息"}
  const [view,updateView] = useState(false);
  const ref = useRef(false);
  const callBack = ()=>{
    ref.current = !ref.current;
    updateView(ref.current)
    console.log("callBack----")
    console.log("view="+ref.current)
  }
  props.location.state={...props.location.state,...obj,other:'另外添加的信息',fn:callBack}
  return (
    <div>
      <div style={{color:view?'red':'green'}}>
        <h2 className="title">index.tsx页面</h2>
        <p>参数信息：{name}----{msg}</p>
      </div>
      <div>
        {/* 传递回调函数给嵌套组件 */}
        {props.children}
      </div>
    </div>
  );
}
