import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ResponseSucess() {
    const history = useHistory();
    const redirect = () => {
        history.push('/');
    }

    setTimeout(redirect, 3500);
    
    return (
        <>
            <h2>Submission Successfull</h2>
            <p>Thank you for submitting your response! You will be redirected to home</p>
        </>
    )
}