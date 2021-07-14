import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addForm, updateForm } from './formsSlice';

export default function NewFormForm({ edit = false, setEdit, form }) {
    const [name, setName] = useState(edit ? form.name : '');
    const [externalTarget, setExternalTarget] = useState(edit ? form.externalTarget : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!edit) {
            if (name.length === 0) return;

            dispatch(addForm({
                formId: uuidv4(),
                name,
                externalTarget
            }));

            setName('');
            setExternalTarget('');
        } else {
            dispatch(updateForm({
                ...form,
                name,
                externalTarget
            }));

            setEdit(false);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();

        setEdit(false);
        setName(form.name);
        setExternalTarget(form.externalTarget);
    }

    return (
        <section>
            {edit ? null : <h1>Add New Form</h1>}
            <form onSubmit={handleSubmit}>
                <input
                    name='form-name'
                    id='form-name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder='Form Name'
                />
                <input
                    name='external-target'
                    id='external-target'
                    type='url'
                    value={externalTarget}
                    onChange={(e) => setExternalTarget(e.currentTarget.value)}
                    placeholder='https://www.someurl.com'
                />
                <input name='submit' type='submit' value={edit ? 'Save' : 'Add New Form'}></input>
                {edit ? <button value='Cancel' onClick={handleCancel}>Cancel</button> : null}
            </form>
        </section>
    )
}