import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForms } from './formsSlice';
import { useHistory, useParams } from 'react-router-dom';
import { addResponse } from '../responses/responsesSlice';
import DisplaySection from '../sections/displaySection';
import { v4 as uuidv4 } from 'uuid';

export default function DisplayForm() {
    const { formId } = useParams();
    const forms = useSelector(selectForms);
    const form = forms[formId];
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        // this will allow you to create a form body from a submit action; All inputs must have a name associated with them else key will be null
        const formBody = {};

        [...e.target].forEach(element => {
            if (element.getAttribute('name') != 'submit') {
                formBody[element.getAttribute('name')] = element.value;
            }
        });

        const response = {
            formId,
            responseId: uuidv4(),
            body: {
                ...formBody
            }
        }

        if (form.externalTarget && form.externalTarget != '') {
            fetch(form.externalTarget, {
                body: JSON.stringify(response.body),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(response => JSON.parse(response))
                .catch(error => {
                    window.alert(`Issue submitting form to external target, but response will be recorded locally\nError: ${error}`);
                });
        }

        dispatch(addResponse(response));

        history.push('/form-success');
    }

    return (
        <form className='display-form' onSubmit={handleSubmit}>
            <div className='display-form-header'>
                <h1>{form.name}</h1>
                <p>* Required</p>
            </div>
            {
                form.sections.map(sectionId => <DisplaySection sectionId={sectionId} />)
            }
            <input type='submit' name='submit' value='Submit'></input>
        </form>
    )
}