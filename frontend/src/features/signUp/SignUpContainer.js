import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createDefaultLists, signUpUser } from '../../util/apiCalls/postRequests';
import SignUpPage1 from './SignUpPage1';
import SignUpPage2 from './SignUpPage2';

const SignUpContainer = () => {
    const [ page, setPage ] = useState(1);
    const signUp = useSelector(state => state.signUp);

    const handlePageChange = () => {
        setPage(page === 1 ? 2 : 1);
    }

    const handleSignUp = async( e ) => {
        e.preventDefault();
        try {
            const data = await signUpUser({...signUp});
            const { user } = data;
            await createDefaultLists(user.id);
        } catch ( error ) {
            console.log(error);
        }
    }

    const getPageDisplay = () => {
        if(page === 1) return <SignUpPage1 handlePageChange={handlePageChange} />
        if(page === 2) return (
            <SignUpPage2 handlePageChange={handlePageChange} handleSignUp={handleSignUp} />
        )
    }

    return (
        <>
            {getPageDisplay()}
        </>
    )
}

export default SignUpContainer;