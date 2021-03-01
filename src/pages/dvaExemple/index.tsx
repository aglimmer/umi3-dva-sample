import React, { FC } from 'react';
import {ConnectProps, Loading, connect, NavLink, Dispatch } from 'umi';
import { IndexModelState } from './model';
//继承ConnectProps
interface PageProps extends ConnectProps {
    dvaExempleModel: IndexModelState;
    loading: boolean;
    dispatch:Dispatch;
}
//connect函数的第1、2个参数会通过props传递给IndexPage
const IndexPage: FC<PageProps> = ({ dvaExempleModel,loading, dispatch }) => {
  const { name } = dvaExempleModel;
  console.log("loading=",loading)
  const getName=()=>{
    //外部调用数据模型中的方法，必须要加上dvaExempleModel指定namespace
    dispatch({type:"dvaExempleModel/getName",payload:{msg:"传递一些信息"}})
  }
  return <div>
    <p>当前用户名:{name}</p>
    <p><button onClick={getName}>测试获取name</button></p>
    {/* subscriptions中的监听器会监听/hello */}
     <NavLink to={{pathname:"/hello",state:{name:'won',id:1001}}}>触发/hello</NavLink>
    </div>;
};
// connect 第2个参数可用该函数接受，默认缺省
// const mapDispatchProps=(dispatch: Dispatch)=>{
//   console.log(dispatch)
//   return {
//   dispatch:dispatch
//   };
// }

//connect用于连接 React 组件与 Redux store，在umi中model文件会被注册到 Redux store中
//connect第1个参数，用于把modelstate转换到props
//loading.models.dvaExempleModel 中名称dvaExempleModel必须与model的namespace一致
//{ dvaExempleModel, loading } 中名称dvaExempleModel用来取出namespace为dvaExempleMode的数据
//connect第2个参数可缺省，用于把dispatch转换到props
export default connect(({ dvaExempleModel, loading }: { dvaExempleModel: IndexModelState; loading: Loading }) => ({
    dvaExempleModel,
  loading: loading.models.dvaExempleModel,
}))(IndexPage);



