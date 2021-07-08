import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForms, updateForm } from './formsSlice';
import { useParams } from 'react-router-dom';
import SectionList from '../sections/sectionList';

export default function Form() {
    const forms = useSelector(selectForms);
    const { formId } = useParams();
    const form = forms[formId];
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(form.name);
    const [externalTarget, setExternalTarget] = useState(form.externalTarget);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateForm({
            ...form,
            name,
            externalTarget
        }));

        setEdit(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();

        setEdit(false);
        setName(form.name);
        setExternalTarget(form.externalTarget);        
    }

    return (
        <>
            <h3>I Am A Form {form.name}: {form.id}</h3>
            {
                edit ?
                    <form onSubmit={handleSubmit}>
                        <input
                            name='name'
                            type='text'
                            value={name}
                            onChange={e => setName(e.currentTarget.value)}
                            placeholder='Form Name'>
                        </input>
                        <input
                            name='externalTarget'
                            type='url'
                            value={externalTarget}
                            onChange={e => setExternalTarget(e.currentTarget.value)}
                            placeholder='https://sometarget.com'>
                        </input>
                        <button value='Cancel' onClick={handleCancel}>Cancel</button>
                        <input type='submit' value='Save'></input>
                    </form>
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