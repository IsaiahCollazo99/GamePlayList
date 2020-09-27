const { createSlice } = require("@reduxjs/toolkit");

export const feedPageSlice = createSlice({
    name: "feedPage",
    initialState: {
        games: [], 
        next: null, 
        filters: {
            system: "", 
            genre: "", 
            tag: "", 
            publisher: "", 
            developer: ""
        }
    },
    reducers: {
        add_games: (( state, { payload } ) => {
            state.games.push(...payload);
            return state;
        }),
        set_next: (( state, { payload }) => {
            state.next = payload;
        }),
        set_filters: (( state, { payload }) => {
            state.filters = payload;
        })
    }
})

export const { add_games, set_next, set_filters } = feedPageSlice.actions;

export default feedPageSlice.reducer;