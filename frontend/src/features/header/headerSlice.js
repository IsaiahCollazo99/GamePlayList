const { createSlice } = require("@reduxjs/toolkit");

export const headerSlice = createSlice({
    name: "header",
    initialState: {showSearch: false},
    reducers: {
        show_search: (( state ) => {
            state.showSearch = !state.showSearch;
        })
    }
})

export default headerSlice.reducer