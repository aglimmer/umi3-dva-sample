import React from 'react'
import { NavLink } from 'umi'
const Login:React.FC=(props:any)=>{
    console.log(props)
 return <h3 style={{color:'grey'}}>
    用户登录页面
     <NavLink to="/">请登录</NavLink>
 </h3>
}
export default Login