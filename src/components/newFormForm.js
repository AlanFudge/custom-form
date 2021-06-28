import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addForm } from '../features/forms/formsSlice';

export default function NewFormForm() {
    const [name, setName] = useState('');
    const [externalTarget, setExternalTarget] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) return;

        dispatch(addForm({
            id: uuidv4(),
            name,
            externalTarget
        }));
    }

    return (
        <section>
            <h1>Add New Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id='topic-name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder='Form Name'
                />
                <input
                    id='external-target'
                    type='url'
                    value={externalTarget}
                    onChange={(e) => setExternalTarget(e.currentTarget.value)}
                    placeholder='https://www.someurl.com'
                />
                <input type='submit' value='Add New Form'></input>
            </form>
        </section>
    )
}