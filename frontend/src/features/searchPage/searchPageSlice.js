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
        new_search_results:(( state, { payload }) => {
            state.games = payload;
            return state;
        }),
        set_search: (( state, { payload }) => {
            state.search = payload;
        })
    }
})

export const { add_games, set_next, set_search, new_search_results } = searchPageSlice.actions;

export default searchPageSlice.reducer;