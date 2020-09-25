import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';
import { TextField } from '@material-ui/core';

const SignUpPage1 = ({ handlePageChange }) => {
    const {
        email,
        password,
        confirmPassword
    } = useSelector(state => state.signUp);

    const dispatch = useDispatch();

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(setValue({stateToChange, data}));
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handlePageChange(2);
    }

    return (
        <form onSubmit={handleSubmit} className="signUpPage1">
            <TextField 
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />

            <TextField 
                type="password"
                label="Password"
                value={password} 
                name="password"
                onChange={handleChange}
                required
            />

            <TextField 
                type="password"
                label="Confirm Password"
                value={confirmPassword} 
                name="confirmPassword"
                onChange={handleChange}
                required
            />
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpPage1;