const { createSlice } = require("@reduxjs/toolkit");

export const feedPageSlice = createSlice({
    name: "feedPage",
    initialState: {games: []},
    reducers: {
        add_games: ( ( state, { payload } ) => {
            state.games.push(...payload);
        }),
    }
})

export const { add_games } = feedPageSlice.actions;

export default feedPageSlice.reducer;