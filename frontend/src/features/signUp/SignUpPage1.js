import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';
import { Button, TextField } from '@material-ui/core';
import { firebaseIsEmailExisting } from '../../util/firebaseFunctions';
import { getUserByEmail } from '../../util/apiCalls/getRequests';

const SignUpPage1 = ({ handlePageChange }) => {
    const {
        email,
        password,
        confirmPassword
    } = useSelector(state => state.signUp);
    const [ errorsState, setErrorsState ] = useState({ password: false, email: false });
    const [ errors, setErrors ] = useState({email: null, password: null});

    const dispatch = useDispatch();

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(setValue({stateToChange, data}));
    }

    const isEmailExistingCall = async () => {
        try { 
            const data = await getUserByEmail(email);
            const firebaseData = await firebaseIsEmailExisting(email);
            return data.length || firebaseData;
        } catch ( error ) {
            console.log(error);
        }
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        if(password !== confirmPassword) {
			setErrorsState({ ...errorsState, password: true });
			setErrors({ ...errors, password: "Passwords do not match"});
		} else if(password.length <= 6) {
			setErrorsState({ ...errorsState, password: true});
			setErrors({ ...errors, password: "Password must be 7 characters or longer"});
		} else if(await isEmailExistingCall()) {
			setErrorsState({ password: false, email: true });
			setErrors({ password: null, email: "A user with that email exists."});
		} else {
			setErrorsState({ password: false, email: false });
			setErrors({ password: null, email: null });
			handlePageChange(2);
		}
    }

    return (
        <form onSubmit={handleSubmit} className="signUpPage1">
            <TextField 
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : null}
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
                autoFocus
                required
            />

            <TextField 
                type="password"
                label="Password"
                name="password"
                value={password} 
                onChange={handleChange}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : null}
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
                type="password"
                label="Confirm Password"
                value={confirmPassword} 
                name="confirmPassword"
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
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