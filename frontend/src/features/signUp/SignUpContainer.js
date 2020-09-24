import React, { useState } from 'react';
import SignUpPage1 from './SignUpPage1';

const SignUpContainer = () => {
    const [ page, setPage ] = useState(1);

    const handlePageChange = ( toPage ) => {
        setPage(toPage);
    }

    const getPageDisplay = () => {
        if(page === 1) return <SignUpPage1 handlePageChange={handlePageChange} />
        if(page === 2) return <p>2</p>
    }

    return (
        <>
            {getPageDisplay()}
        </>
    )
}

export default SignUpContainer;