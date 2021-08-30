import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectForms } from './formsSlice';
import { useParams } from 'react-router-dom';
import SectionList from '../sections/sectionList';
import NewFormForm from './newFormForm';

export default function Form() {
    const forms = useSelector(selectForms);
    const { formId } = useParams();
    const form = forms[formId];
    const [edit, setEdit] = useState(false);

    return (
        <>
            <div className="edit-form">
                {
                    edit ?
                        <NewFormForm edit={edit} setEdit={setEdit} form={form} />
                        :
                        <div className="edit-form-details">
                            <h2>Edit Form</h2>
                            <div className="edit-form-details-content">
                                <h3>{form.name}</h3>
                                <h3>{form.externalTarget}</h3>
                                <button className="edit-form-edit-button" value='Edit' onClick={e => setEdit(true)}>Edit</button>
                            </div>
                        </div>
                }
            </div>
            <SectionList />
        </>
    )
}