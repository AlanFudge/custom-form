import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewFormForm from '../../components/newFormForm';
import { Form } from './form';
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
                        <div id={form.formId}>
                            <h2>{form.name}</h2>
                            <Link to={'/forms/' + form.formId}>
                                <p>{form.formId}</p>
                            </Link>
                            <p>{form.externalTarget}</p>
                            <ul>
                                {
                                    form.sections.map(input => {
                                        return <li>{input}</li>
                                    })
                                }
                            </ul>
                            <button onClick={handleDelete} formId={form.formId}>Delete Form</button>
                        </div>
                    )
                })
            }
            <NewFormForm />
        </div>
    )
}