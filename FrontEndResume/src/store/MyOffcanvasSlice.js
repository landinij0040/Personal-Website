import { createSlice } from '@reduxjs/toolkit';

export const offcanvasSlice = createSlice({
    name: 'offcanvas',
    initialState: {
        value: false,
    },
    reducers: {
        show: (state) => {
            state.value = true;
        },
        doNotShow: (state) => {
            state.value = false;
        },
    },
});

export const { show, doNotShow } = offcanvasSlice.actions;


export default offcanvasSlice.reducer;