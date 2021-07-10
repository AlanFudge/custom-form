import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectResponses } from './responsesSlice';

export default function ResponseList() {
    const { formId } = useParams();
    const responses = useSelector(selectResponses);
    const responseIdsForForm = Object.keys(responses).filter(responseId => responses[responseId].formId === formId);

    return (
        <div className='response-list'>
            {
                responseIdsForForm.map(responseId => {
                    <Response responseId={responseId} />
                })
            }
        </div>
    );
}