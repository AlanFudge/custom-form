import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteResponse, selectResponses } from './responsesSlice';

export default function Response({ responseId }) {
    const dispatch = useDispatch();
    const responses = useSelector(selectResponses);
    const response = responses[responseId];
    const responseBody = response.body;

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteResponse({ responseId }));
    }

    return (
        <div className='response'>
            <h1 className='response-header'>
               {new Date(response.timestamp).toLocaleString()} 
            </h1>
            <div className='response-body'>
                <ul>
                    {
                        Object.keys(responseBody).map(key => {
                            return (
                                <li>
                                    <span>{key}:</span> {responseBody[key]}
                                </li>
                            );
                        })
                    }
                </ul>
                <button onClick={handleDelete}>Delete Response</button>
            </div>
        </div>
    )
}