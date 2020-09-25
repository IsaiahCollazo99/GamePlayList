const { createSlice } = require("@reduxjs/toolkit");

export const feedPageSlice = createSlice({
    name: "feedPage",
    initialState: {games: [], next: null},
    reducers: {
        add_games: (( state, { payload } ) => {
            state.games.push(...payload);
        }),
        set_next: (( state, { payload }) => {
            state.next = payload;
        })
    }
})

export const { add_games, set_next } = feedPageSlice.actions;

export default feedPageSlice.reducer;