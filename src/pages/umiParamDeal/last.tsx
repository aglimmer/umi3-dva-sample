import React, { useState, useCallback } from 'react';
// 最里层的嵌套组件，同样取出外层放在props.location.state中传递过来的参数，包括函数updateViewVisible
// 调用updateViewVisible可以更新外层组件
export default function last(props: any) {
    let {callBack,updateViewVisible} = props.location.state;
    let [like,setLike] = useState(0);
    let [visible,setVisible] = useState(false);
    return (
      <div>
        <div>
          <h2 className="title">deal/last.tsx页面</h2>
          <p>测试useCallBack函数传递</p>
          <button onClick={()=>{setLike(like-1);callBack(like);}}>当前修改:{like}</button>
          <button onClick={()=>{setVisible(!visible);updateViewVisible(visible)}}>设置/deal组件可见性</button>
        </div>
      </div>
    );
  }