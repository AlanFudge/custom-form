import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectResponses } from './responsesSlice';
import Response from './response';

export default function ResponseList() {
    const { formId } = useParams();
    const responses = useSelector(selectResponses);
    const responseIdsForForm = Object.keys(responses).filter(responseId => responses[responseId].formId === formId);

    if (responseIdsForForm.length === 0) {
        return (
            <>
                <h1>Nothing to see here!</h1>
                <p>There are no responses for this form!</p>
            </>
        )
    }

    return (
        <div className='response-list'>
            {
                responseIdsForForm.map(responseId => {
                    return <Response responseId={responseId} />
                })
            }
        </div>
    );
}