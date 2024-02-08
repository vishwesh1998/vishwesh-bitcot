import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'MySlice',
    initialState: {
        value: []
    },
    reducers: {
        getContact: (state, action) => {
            let obj = action.payload
            state.value = obj
        },
        addConct: (state, action) => {
            let ob = action.payload
            let index = state.value.length - 1
            let id = state.value[index].id
            let newId = id + 1
            let obj = { ...ob, id: newId }
            state.value = [...state.value, obj]
        },
        updateContact: (state, action) => {
            let obj = action.payload
            console.log(obj)
            state.value = state.value.map(ob => ob.id == obj.id ? { ...ob, name: obj.name, email: obj.email, mobile: obj.mobile, address: obj.address } : ob)
        },
        delContact: (state, action) => {
            let ob = action.payload
            state.value = state.value.filter(obj => obj.id !== ob.id)
        },
        searchContact: (state, action) => {
            let ob = action.payload
        }
    }
})

export const { getContact, addConct, updateContact, delContact, searchContact } = slice.actions
export default slice.reducer