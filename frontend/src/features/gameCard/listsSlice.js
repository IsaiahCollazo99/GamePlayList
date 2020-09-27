const { createSlice } = require("@reduxjs/toolkit");

export const listsSlice = createSlice({
    name: "lists",
    initialState: [],
    reducers: {
        add_list: (( state, { payload }) => {
            state.push(payload);
        }),
        add_multiple_lists: (( state, { payload }) => {
            return payload;
        })
    }
})

export const { add_list, add_multiple_lists } = listsSlice.actions
export default listsSlice.reducer