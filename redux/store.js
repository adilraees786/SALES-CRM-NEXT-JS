'use client'
import { configureStore } from '@reduxjs/toolkit'
import sidebarValue from './sidebar'

export const store = configureStore({
    reducer: {
        sidebarValue,
    },
})

export default store