import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addSectionThunk } from './../features/sections/sectionsSlice';
import { useParams } from 'react-router-dom';

export default function NewSectionForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [format, setFormat] = useState('single-column');
    const { formId } = useParams();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') return;

        dispatch(addSectionThunk({
            formId,
            section: {
                id: uuidv4(),
                name,
                description,
                format
            }
        }));
    }

    return (
        <section>
            <h1>Add New Section</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id='section-name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder='Section Name'
                />
                <input
                    id='description'
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    placeholder='Enter directions or description of section'
                />
                <select id='format' name='format' onChange={(e) => setFormat(e.currentTarget.value)}>
                    <option value='single-column'>Single Column</option>
                    <option value='double-column'>Two Columns</option>
                </select>
                <input type='submit' value='Add New Section'></input>
            </form>
        </section>
    )
}