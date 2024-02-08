import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './slice'

const store = configureStore({
    reducer: {
        myContact: contactSlice
    }
})

export default store