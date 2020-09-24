import React, { useState } from 'react';
import SignUpPage1 from './SignUpPage1';
import SignUpPage2 from './SignUpPage2';

const SignUpContainer = () => {
    const [ page, setPage ] = useState(1);

    const handlePageChange = ( toPage ) => {
        setPage(toPage);
    }

    const getPageDisplay = () => {
        if(page === 1) return <SignUpPage1 handlePageChange={handlePageChange} />
        if(page === 2) return <SignUpPage2 handlePageChange={handlePageChange} />
    }

    return (
        <>
            {getPageDisplay()}
        </>
    )
}

export default SignUpContainer;