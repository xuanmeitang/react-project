import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/modules/counterStore'
import asyncRequestReducer from '@/store/modules/asyncRequest'
import loginReducer from '@/store/modules/loginRequest'
//组合子模块
const store = configureStore({
    reducer: {
        counter: counterReducer,
        asyncRequest: asyncRequestReducer,
        login:loginReducer
    }
})
export default store