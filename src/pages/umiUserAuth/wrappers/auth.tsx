import { Redirect } from 'umi'
import React from 'react';

const useAuth=()=>{
   return {isLogin:false}
}
export default (props:any) => {
  const { isLogin } = useAuth();
  // 只有用户登录，才能访问
  if (isLogin) {
    return <div>
      <p>欢迎到来</p>
      <div>
      { props.children }
      </div>
      </div>;
      // 没有登录，则重定向到外部页面
  } else {
    return <Redirect to="/login" />;
  }
}
