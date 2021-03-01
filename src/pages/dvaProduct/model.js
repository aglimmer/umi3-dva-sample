export default {
    namespace: 'products',
    state: [
        { id: 1, name: 'dva' },
        { id: 2, name: 'antd' },
    ],
    reducers: {
        delete(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};