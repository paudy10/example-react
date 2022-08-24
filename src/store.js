import { configureStore } from '@reduxjs/toolkit'
import userDetailReducer from './userDetailSlice'

const store = configureStore({
    reducer: {
        userDetail: userDetailReducer
    }
})

export default store