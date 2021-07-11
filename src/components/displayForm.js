import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForms } from '../features/forms/formsSlice';
import { useParams } from 'react-router-dom';
import { addResponse } from '../features/responses/responsesSlice';

export default function DisplayForm() {
    const { formId } = useParams;
    const forms = useSelector(selectForms);
    const form = forms[formId];
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addResponse({
            formId,
            responseId: uuidv4(),
            body: {
                //response body
            }
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello World</h1>
            {
                form.sections.map(sectionId => <p>{sectionId}</p>)
            }
        </form>
    )
}