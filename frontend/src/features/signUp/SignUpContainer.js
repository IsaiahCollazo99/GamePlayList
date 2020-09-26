import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createDefaultLists, signUpUser } from '../../util/apiCalls/postRequests';
import { firebaseSignUp } from '../../util/firebaseFunctions';
import SignUpPage1 from './SignUpPage1';
import SignUpPage2 from './SignUpPage2';
import '../../css/signUp/signUp.css';

const SignUpContainer = () => {
    const [ page, setPage ] = useState(1);
    const signUp = useSelector(state => state.signUp);

    const handlePageChange = () => {
        setPage(page === 1 ? 2 : 1);
    }

    const handleSignUp = async () => {
        try {
            const firebaseUser = await firebaseSignUp(signUp.email, signUp.password, signUp.username);
            const signUpData = { ...signUp, id: firebaseUser.uid };
            const data = await signUpUser({...signUpData});
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
        <main className="signUpContainer">
            <h1>CREATE AN ACCOUNT {page}/2</h1>
            {getPageDisplay()}
        </main>
    )
}

export default SignUpContainer;