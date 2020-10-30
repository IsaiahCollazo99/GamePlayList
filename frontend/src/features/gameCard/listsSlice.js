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
        }),
        update_list: (( state, { payload } ) => {
            const lists = JSON.parse(JSON.stringify(state));
            for(let i = 0; i < lists.length; i++) {
                const list = lists[i];

                if(list.id === payload.id) {
                    state[i] = payload;
                    break;
                }
            }
        }),
        remove_list: (( state, { payload } ) => {
            const lists = JSON.parse(JSON.stringify(state));
            for(let i = 0; i < lists.length; i++) {
                const list = lists[i];
                
                if(list.id === payload.id) {
                    let res = [...state.slice(0, i), ...state.slice(i + 1)];
                    return res;
                }
            }
        })
    }
})

export const { add_list, add_multiple_lists, update_list, remove_list } = listsSlice.actions
export default listsSlice.reducer