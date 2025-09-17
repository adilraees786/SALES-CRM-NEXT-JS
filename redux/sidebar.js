import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: true,
}

export const sidebarValue = createSlice({
    name: 'sidebarValue',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload
        },
    },
})

export const { setOpen } = sidebarValue.actions

export default sidebarValue.reducer