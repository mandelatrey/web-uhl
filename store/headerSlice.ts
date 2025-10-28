import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HeaderState = {
    isOpen: boolean
    isProjectsDropdownOpen: boolean
    isScrolling: boolean
}

const initialState: HeaderState = {
    isOpen: false,
    isProjectsDropdownOpen: false,
    isScrolling: false
}

const headerSlice = createSlice ({
    name: 'header',
    initialState,
    reducers: {
        toggleOpen(state) {
            state.isOpen = !state.isOpen
        },
        setOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
        setProjectsOpen(state, action: PayloadAction<boolean>) {
            state.isProjectsDropdownOpen = action.payload
        },
        setIsScrolling(state, action: PayloadAction<boolean>){
            state.isScrolling = action.payload
        },
    },
})

export const { 
    toggleOpen, 
    setOpen, 
    setProjectsOpen, 
    setIsScrolling 
} = headerSlice.actions

export default headerSlice.reducer