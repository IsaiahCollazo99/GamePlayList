import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { firebaseLogIn } from '../../util/firebaseFunctions';
import { set_value } from './signInSlice';

const SignIn = () => {
    const signIn = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = ( e ) => {
        const stateToChange = e.target.name;
        const data = e.target.value;
        dispatch(set_value({ stateToChange, data }));
    }

    const handleSubmit = async ( e ) => {
        try { 
            e.preventDefault();
            await firebaseLogIn(signIn.email, signIn.password);
            history.push("/games");
        } catch ( error ) {
            console.log(error);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} value={signIn.email} />
            <input type="password" name="password" onChange={handleChange} value={signIn.password} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default SignIn;