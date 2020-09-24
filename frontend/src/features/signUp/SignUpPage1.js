import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';

const SignUpPage1 = () => {
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

    return (
        <form className="signUpContainer">
            <input type="email" value={email} name="email" onChange={handleChange} />
            <input type="password" value={password} name="password" onChange={handleChange} />
            <input type="password" value={confirmPassword} name="confirmPassword" onChange={handleChange} />
        </form>
    )
}

export default SignUpPage1;