const { createSlice } = require("@reduxjs/toolkit");

export const signInSlice = createSlice({
    name: "signIn",
    defaultState: {email: "", password: ""},
    reducers: {
        set_value: (( state, { payload } ) => {
            const { stateToChange, data } = payload;
            state[stateToChange] = data;
        })
    }
})

export const { set_value } = signInSlice.actions;
export default signInSlice.reducer;