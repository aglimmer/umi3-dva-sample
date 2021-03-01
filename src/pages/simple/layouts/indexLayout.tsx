import React from 'react';
// 简单的布局组件
export default (props: any) => {
    return <div>
        <div className="div-1">
            <h2>布局组件，放置下一个嵌套组件</h2>
            <div>{props.children}</div>
        </div>
    </div>
}
