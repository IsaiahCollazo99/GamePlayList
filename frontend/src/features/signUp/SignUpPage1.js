import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';
import { Button, TextField } from '@material-ui/core';

const SignUpPage1 = ({ handlePageChange }) => {
    const {
        email,
        password,
        confirmPassword
    } = useSelector(state => state.signUp);
    const [ errors, setErrors ] = useState({email: "", password: ""});

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
                helperText={errors.email ? errors.email : null}
                FormHelperTextProps={{
                    style: {
                        color: '#f44336'
                    }
                }}
                autoFocus
                required
            />

            <TextField 
                type="password"
                label="Password"
                name="password"
                value={password} 
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
            
            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Next Page
            </Button>
        </form>
    )
}

export default SignUpPage1;