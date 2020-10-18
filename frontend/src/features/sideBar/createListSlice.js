const { createSlice } = require("@reduxjs/toolkit");

export const createListSlice = createSlice({
    name: "createList",
    initialState: {
        openModal: false
    },
    reducers: {
        open_modal: (( state ) => {
            state.openModal = true;
        }),
        close_modal: (( state ) => {
            state.openModal = false;
        }),
    }
})

export const { open_modal, close_modal } = createListSlice.actions;

export default createListSlice.reducer;