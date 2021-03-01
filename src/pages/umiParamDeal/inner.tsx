import React, { useState, useCallback } from 'react';
//嵌套内层组件，解析index组件放在props.location.state中传递的参数，
//fn作为一个参数，可以被调用
export default function inner(props: any) {
    let {name,msg,add,other,fn} = props.location.state;
    const [count,updateCount] = useState(0);
    const callBack = useCallback((param:any) => {
        console.log("param=",param)
        updateCount(param)
         console.log("callBack...")
     }, [count])

     const [view,setView] = useState(true);
     const updateViewVisible =  useCallback(
         (isVisible:boolean) => {
             console.log("isVisible=",isVisible);
             setView(isVisible);
         },
         [view],
     )
     
     //传递给子组件
     props.location.state.callBack = callBack;
     props.location.state.updateViewVisible = updateViewVisible;
    return (
      <div>
        <div style={{display:view?'block':'none'}}>
          <h2 className="title">deal/inner.tsx页面</h2>
          <p>参数信息：{name}----{msg}----{add}----{other}</p>
          <button onClick={fn}>点击改变/deal组件文件颜色</button>
          <button onClick={()=>callBack(count+1)}>点击次数:{count}</button>
        </div>
        {/* 子组件摆放位置 */}
        <div>{props.children}</div>
      </div>
    );
  }