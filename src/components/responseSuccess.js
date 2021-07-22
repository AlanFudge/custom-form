import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ResponseSucess() {
    const history = useHistory();
    const redirect = () => {
        history.push('/');
    }

    setTimeout(redirect, 5000);

    return (
        <div className='response-success'>
            <h2>Submission Successfull</h2>
            <p>
                Thank you for submitting your response! You will be redirected to home
            </p>
            <p>
                If you would like to view your response or any responses, please got to 'Edit/View Forms'
            </p>
        </div >
    )
}