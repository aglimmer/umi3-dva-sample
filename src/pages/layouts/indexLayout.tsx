import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'umi'
//最外层的布局组件，通过props.children决定内层嵌套组件的放置位置
export default (props: any) => {
    return <div id="root">
        <h2>/layouts/index.tsx布局组件</h2>
        <NavLink to="/">/</NavLink><br/>
      <NavLink to="/index">/index</NavLink><br/>
      <NavLink to="/dvaProduct">/dvaProduct</NavLink><br/>
      <NavLink to="/dvaExemple">/dvaExemple</NavLink><br/>
      <NavLink to="/simple/index">/simple/index</NavLink><br/>
      <NavLink to="/umiUserAuth">/umiUserAuth</NavLink><br/>
      <NavLink to="/umiParamDeal/index/inner/last">/umiParamDeal/index/inner/last</NavLink><br/>
        <div>{props.children}</div>
    </div>

}
