import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { firebaseLogIn } from '../../util/firebaseFunctions';
import { set_value } from './signInSlice';
import '../../css/signIn/signIn.css';
import { getUserByEmail } from '../../util/apiCalls/getRequests';

const SignIn = () => {
    const signIn = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const history = useHistory();
    const [ errors, setErrors ] = useState({});

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(set_value({ stateToChange, data }));
    }

    const isEmailExistingCall = async () => {
        try {
            const data = await getUserByEmail(signIn.email);
            return data.length;
        } catch ( error ) {
            console.log(error);
        }
    }

    const handleSubmit = async ( e ) => {
        try { 
            e.preventDefault();
            if(!await isEmailExistingCall()) {
                setErrors({...errors, email: "There is no record of this email."});
            } else {
                setErrors({});
                await firebaseLogIn(signIn.email, signIn.password);
                history.push("/games");
            }
        } catch ( error ) {
            if(error.code === "auth/wrong-password") {
                setErrors({...errors, email: "This email/password combination is incorrect."});
            } else if(error.code === "auth/user-not-found") {
                setErrors({...errors, email: "There is no record of this email."});
            }
            console.log(error);
        }
    }
    
    return (
        <main className="signInContainer">
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="email"
                    label="Email"
                    name="email"
                    value={signIn.email}
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
                    value={signIn.password} 
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
                    Log In
                </Button>
            </form>
        </main>
        
    )
}

export default SignIn;