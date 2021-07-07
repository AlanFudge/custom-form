import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInputThunk } from '../features/inputs/inputsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function NewInputForm({ sectionId }) {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('text');
    const [required, setRequired] = useState(false)
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [pattern, setPattern] = useState(null);
    const [maxlength, setMaxlength] = useState(null);
    const dispatch = useDispatch();
    const [selectOptions, setSelectOptions] = useState([]);
    
    const handleSelectOptionsChange = (e) => {
        e.preventDefault();

        setSelectOptions(e.currentTarget.value.split(','));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addInputThunk({
            sectionId,
            input: {
                inputId: uuidv4(),
                name,
                title,
                type,
                attributes: {
                    min,
                    max,
                    pattern,
                    maxlength,
                    required
                },
                selectOptions
            }
        }))

        setTitle('');
        setName('');
        setType('text');
        setRequired(false);
        setMin(null);
        setMax(null);
        setPattern(null);
        setMaxlength(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.currentTarget.value)} type='text' placeholder='Displayed title for input'></input>
            <input value={name} onChange={e => setName(e.currentTarget.value)} type='text' placeholder='Name of input with no spaces. should be unique.' pattern='\S+'></input>
            <select value={type} onChange={e => setType(e.currentTarget.value)}>
                <option value='text'>text</option>
                <option value='number'>number</option>
                <option value='color'>color</option>
                <option value='date'>date</option>
                <option value='datetime-local'>datetime-local</option>
                <option value='email'>email</option>
                <option value='file'>file</option>
                <option value='image'>image</option>
                <option value='month'>month</option>
                <option value='tel'>telephone</option>
                <option value='time'>time</option>
                <option value='url'>url</option>
                <option value='week'>week</option>
                <option value='select'>select</option>
            </select>
            {
                type === 'select' ?
                    <input type='text' value={selectOptions.join(',')} onChange={handleSelectOptionsChange} placeholder='comma seperated list of select options'></input>
                    : null
            }
            <div class='attributes-list'>
                <p>Leave empty for no attribute</p>
                <label htmlFor='required'>Required?</label>
                <input name='required' type='checkbox' checked={required} onChange={e => setRequired(!required)}></input>
                <label htmlFor='min'>Min</label>
                <input name='min' type='number' value={min} onChange={e => e.currentTarget.value === '' ? setMin(null) : setMin(e.currentTarget.value)}></input>
                <label htmlFor='max'>Max</label>
                <input name='max' type='number' value={max} onChange={e => e.currentTarget.value === '' ? setMax(null) : setMax(e.currentTarget.value)}></input>
                <label htmlFor='pattern'>RegEx Pattern</label>
                <input name='pattern' type='text' placeholder='/[a-z]/gi' value={pattern} onChange={e => e.currentTarget.value === '' ? setPattern(null) : setPattern(e.currentTarget.value)}></input>
                <label htmlFor='maxlength'>Max Length</label>
                <input name='max-length' type='number' placeholder='max length of text' value={maxlength} onChange={e => e.currentTarget.value === '' ? setMaxlength(null) : setMaxlength(e.currentTarget.value)}></input>
            </div>
            <input type='submit' value='Add New Input'></input>
        </form>
    )
}