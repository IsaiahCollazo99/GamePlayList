import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';

const SignUpPage2 = ({ handlePageChange, handleSignUp }) => {
    const {
        username,
        first_name,
        last_name,
        birthday,
        gender,
    } = useSelector(state => state.signUp);

    const dispatch = useDispatch();

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(setValue({stateToChange, data}));
    }
    
    return (
        <form onSubmit={handleSignUp}>
            <input type="text" name="username" value={username} onChange={handleChange} />
            <input type="text" name="first_name" value={first_name} onChange={handleChange} />
            <input type="text" name="last_name" value={last_name} onChange={handleChange} />
            <input type="date" name="birthday" value={birthday} onChange={handleChange} />
            <select name="gender" value={gender} onChange={handleChange}>
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
            </select>
            <button type="button" onClick={handlePageChange}>Back</button>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpPage2;