import { createSlice } from '@reduxjs/toolkit'
 const counterStore = createSlice({
     name: 'counter',
     //初始化State
    initialState: {
        count:0
     },
    
    //修改状态的方法，同步方法，支持直接修改
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addNumber(state, action) {
            state.count += action.payload
        }
    }
})
//解构出actionCreate函数
const { increment, decrement ,addNumber} = counterStore.actions
//过去reducer
const reducer = counterStore.reducer

//通过按需导出的方式导出reducers中的方法
export { increment, decrement ,addNumber}

//默认导出 counterStore中的reducer
export default reducer
