import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInputThunk } from '../features/inputs/inputsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function NewInputForm({ sectionId }) {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('text');
    const [attributes, setAttributes] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addInputThunk({
            sectionId,
            input:{
                inputId: uuidv4(),
                name,
                title,
                type,
                attributes
            }
        }))

        console.log('submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.currentTarget.value)} type='text' placeholder='Displayed title for input'></input>
            <input value={name} onChange={e => setName(e.currentTarget.value)} type='text' placeholder='Name of input with no spaces. should be unique.' pattern='\S+'></input>
            <select value={type} onChange={e => setType(e.currentTarget.value)}>
                <option value='text'>text</option>
                <option value='number'>number</option>
            </select>
            <input type='submit' value='Add New Input'></input>
        </form>
    )
}