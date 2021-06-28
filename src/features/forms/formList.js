import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewFormForm from '../../components/newFormForm';
import { Form } from './form';
import { selectForms, deleteFormThunk } from './formsSlice';
import { selectSections } from './../sections/sectionsSlice';

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
        })

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
                        <div id={form.id}>
                            <h2>{form.name}</h2>
                            <p>{form.id}</p>
                            <p>{form.externalTarget}</p>
                            <ul>
                                {
                                    form.sections.map(input => {
                                        return <li>{input}</li>
                                    })
                                }
                            </ul>
                            <button onClick={handleDelete} formId={form.id}>Delete Form</button>
                        </div>
                    )
                })
            }
            <NewFormForm />
        </div>
    )
}