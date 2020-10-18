const { createSlice } = require("@reduxjs/toolkit");

export const createListSlice = createSlice({
    name: "createList",
    initialState: {
        openModal: false
    },
    reducers: {
        open_modal: (( state ) => {
            state.openModal = !state.openModal;
        })
    }
})

export const { open_modal } = createListSlice.actions;

export default createListSlice.reducers