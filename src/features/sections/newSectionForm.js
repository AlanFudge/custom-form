import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addSectionThunk, updateSection } from './sectionsSlice';
import { useParams } from 'react-router-dom';

export default function NewSectionForm({ edit = false, setEdit, section }) {
    const [name, setName] = useState(edit ? section.name : '');
    const [description, setDescription] = useState(edit ? section.description : '');
    const [format, setFormat] = useState(edit ? section.format : 'single-column');
    const { formId } = useParams();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (!edit) {
            e.preventDefault();
            if (name === '') return;

            dispatch(addSectionThunk({
                formId,
                section: {
                    sectionId: uuidv4(),
                    name,
                    description,
                    format
                }
            }));

            setName('');
            setDescription('');
            setFormat('');
        } else {
            e.preventDefault();

            dispatch(updateSection({
                ...section,
                name,
                description,
                format
            }));

            setEdit(false);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();

        setEdit(false);
        setName(section.name);
        setDescription(section.description);
        setFormat(section.format);
    }

    return (
        <section className={edit ? 'edit-section-details section-form' : 'new-section-form section-form'}>
            {
                edit ? null :
                    <h1>Add New Section</h1>
            }
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
                <input type='submit' value={edit ? 'Save' : 'Add New Section'}></input>
                {
                    edit ? <button className='cancel-edit-section' onClick={handleCancel}>Cancel</button> : null
                }
            </form>
        </section>
    )
}