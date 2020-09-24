const { createSlice } = require("@reduxjs/toolkit");

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        email: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
        username: "",
        birthday: "",
        gender: "",
        profile_picture: ""
    },
    reducers: {
        setValue: ( state, { payload }) => {
            const { stateToChange, data } = payload;
            state[stateToChange] = data;
        }
    }
});

export const { setValue } = signUpSlice.actions;

export default signUpSlice.reducer;