import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUsername } from '../../util/apiCalls/getRequests';
import { setValue } from './signUpSlice';

const SignUpPage2 = ({ handlePageChange, handleSignUp }) => {
    const {
        username,
        first_name,
        last_name,
        birthday,
        gender,
    } = useSelector(state => state.signUp);
    const [ errors, setErrors ] = useState({});

    const dispatch = useDispatch();

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(setValue({stateToChange, data}));
    }
    
    const isUsernameExisting = async () => {
        try {
            const data = await getUserByUsername(username);
            return data.user;
        } catch ( error ) {
            console.log(error);
        }
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        if(await isUsernameExisting()) {
            setErrors({username: "A user with that username exists.", ...errors});
        } else {
            handleSignUp();
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="signUpPage2">
            <TextField 
                type="text"
                label="First Name"
                name="first_name"
                value={first_name}
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                autoFocus
                required
            />

            <TextField 
                type="text"
                label="Last Name"
                name="last_name"
                value={last_name}
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                required
            />

            <TextField 
                type="text"
                label="Username"
                name="username"
                value={username}
                onChange={handleChange}
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username : null}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                FormHelperTextProps={{
                    style: {
                        color: '#f44336'
                    }
                }}
                required
            />

            <TextField 
                type="date"
                label="Birthday"
                InputLabelProps={{
                    shrink: true
                }}
                name="birthday"
                value={birthday}
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                required
            />

            <TextField 
                select
                label="Gender"
                InputLabelProps={{
                    shrink: true
                }}
                name="gender"
                value={gender}
                onChange={handleChange}
                SelectProps={{
                    style: {
                        color: 'white',
                        textAlign: 'left'
                    },
                    displayEmpty: true,
                    native: true
                }}
                required
            >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Male</option>
            </TextField>
            
            <section className="buttons">
                <Button
                    type="button" 
                    onClick={handlePageChange}
                    variant="contained"
                    color="secondary"
                >
                    Back
                </Button>
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Sign Up
                </Button>
            </section>
        </form>
    )
}

export default SignUpPage2;