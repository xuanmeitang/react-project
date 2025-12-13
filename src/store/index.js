import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counteStore'
import asyncRequestReducer from './modules/asyncRequest'
//组合子模块
const store = configureStore({
    reducer: {
        counter: counterReducer,
        asyncRequest:asyncRequestReducer
    }
})
export default store