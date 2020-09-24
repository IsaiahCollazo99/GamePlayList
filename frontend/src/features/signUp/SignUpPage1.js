import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './signUpSlice';

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
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} name="email" onChange={handleChange} />
            <input type="password" value={password} name="password" onChange={handleChange} />
            <input type="password" value={confirmPassword} name="confirmPassword" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpPage1;