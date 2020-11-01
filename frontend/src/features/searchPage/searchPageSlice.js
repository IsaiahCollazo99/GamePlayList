const { createSlice } = require("@reduxjs/toolkit");

export const searchPageSlice = createSlice({
    name: "searchPage",
    initialState: {
        games: [],
        next: null,
        search: ""
    },
    reducers: {
        add_games: (( state, { payload } ) => {
            state.games.push(...payload);
            return state;
        }),
        set_next: (( state, { payload }) => {
            state.next = payload;
        }),
        set_search: (( state, { payload }) => {
            state.search = payload;
        })
    }
})

export const { add_games, set_next, set_search } = searchPageSlice.actions;

export default searchPageSlice.reducer;