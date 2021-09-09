import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewFormForm from './newFormForm';
import { selectForms, deleteFormThunk } from './formsSlice';
import { selectSections } from './../sections/sectionsSlice';
import { Link } from 'react-router-dom';

export default function FormList() {
    const forms = useSelector(selectForms);
    const sections = useSelector(selectSections);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        const formId = e.target.getAttribute('formId');
        const sectionIds = forms[formId].sections;
        const inputIds = sectionIds.flatMap(id => {
            return sections[id].inputs;
        });

        dispatch(deleteFormThunk({
            formId,
            sectionIds,
            inputIds
        }));
    }

    return (
        <div id='forms-container'>
            {
                Object.values(forms).map(form => {
                    return (
                        <div className='form-info' id={form.formId}>
                            <h2>{form.name}</h2>
                            <div>
                                <Link to={'/forms/' + form.formId}>
                                    <p>Edit Form</p>
                                </Link>
                                <Link to={`/${form.formId}`}>
                                    <p>Submit a Response</p>
                                </Link>
                                <Link to={`/forms/${form.formId}/responses`}>
                                    <p>View Responses</p>
                                </Link>
                                <button onClick={handleDelete} formId={form.formId}>Delete Form</button>
                            </div>
                        </div>
                    )
                })
            }
            <NewFormForm />
        </div>
    )
}