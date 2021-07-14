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
            <h3>I Am A Form {form.name}: {form.id}</h3>
            {
                edit ?
                    <NewFormForm edit={edit} setEdit={setEdit} form={form} />
                    :
                    <>
                        <h3>{form.name}</h3>
                        <h4>{form.externalTarget}</h4>
                        <button value='Edit' onClick={e => setEdit(true)}>Edit</button>
                    </>
            }
            <SectionList />
        </>
    )
}