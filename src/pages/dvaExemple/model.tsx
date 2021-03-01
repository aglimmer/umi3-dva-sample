
import { Effect, Reducer, Subscription } from 'umi';
//数据模型中的state类型
export interface IndexModelState{
  name: string|any;
}
//数据模型的结构类型
export interface IndexModelType {
  namespace: 'dvaExempleModel';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState|any>;
    getName:Reducer<IndexModelState>;
    simpleFn:Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
// 实现数据模型
const IndexModel: IndexModelType = {
  namespace: 'dvaExempleModel',
  state: {
    name: 'default name',
  },
  //https://dvajs.com/api/#effects
  //effects用于处理异步操作和业务逻辑，不直接修改 state
  effects: {
    *query({ payload }, { call, put }) {
      //由于effect中的函数无返回返回值，因此需要将其
      yield put({type:"save",payload:{name:"zhangsan"}})
    },
   
  },
  // reducer是以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方，由 action 触发。
  reducers: { 
    simpleFn(state,action){
      console.log("simpleFn----")
      return {name:state?.name}
    },
    getName(state,action){
      let msg = action.payload.msg;
      console.log("msg=",msg)
      let name = "用户"+Math.floor(Math.random()*100);
      return {name:name}
    },
    save(state, action) {
      console.log("query---save---")
      state.name = action.payload+"，welcome...";
      return {
        name:action.payload+state.haha
       
      }
    },
  },
  //subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname,state}) => {
        //监听
        if (pathname === '/hello') {
          const {id,name} = state as {id:number,name:string};
          console.log("输出参数：",id,name);
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};
// 要默认导出dva数据模型
export default IndexModel;
