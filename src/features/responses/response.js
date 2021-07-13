import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteResponse, selectResponses } from './responsesSlice';

export default function Response({ responseId }) {
    const dispatch = useDispatch();
    const responses = useSelector(selectResponses);
    const response = responses[responseId];
    const responseBody = response.body;

    console.log(responseBody);

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteResponse({ responseId }));
    }

    return (
        <div className='response'>
            <h3>{response.responseId}</h3>
            <h4>{response.formId}</h4>
            <ul>
                {
                    Object.keys(responseBody).map(key => {
                        return (
                            <li>
                                {`${key}: ${responseBody[key]}`}
                            </li>
                        );
                    })
                }
            </ul>
            <button onClick={handleDelete}>Delete Response</button>
        </div>
    )
}