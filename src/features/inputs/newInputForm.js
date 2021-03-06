import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInputThunk, updateInput } from './inputsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function NewInputForm({ sectionId, edit = false, setEdit, input }) {
    const [title, setTitle] = useState(edit ? input.title : '');
    const [name, setName] = useState(edit ? input.name : '');
    const [type, setType] = useState(edit ? input.type : 'text');
    const [required, setRequired] = useState(edit ? input.attributes.required : false)
    const [min, setMin] = useState(edit ? input.attributes.min : null);
    const [max, setMax] = useState(edit ? input.attributes.max : null);
    const [pattern, setPattern] = useState(edit ? input.attributes.pattern : null);
    const [maxLength, setMaxLength] = useState(edit ? input.attributes.maxLength : null);
    const [step, setStep] = useState(edit ? input.attributes.step : null);
    const [placeholder, setPlaceholder] = useState(edit ? input.attributes.placeholder : null);
    const [selectOptions, setSelectOptions] = useState(edit ? input.selectOptions : []);
    const dispatch = useDispatch();

    const handleSelectOptionsChange = (e) => {
        e.preventDefault();

        setSelectOptions(e.currentTarget.value.split(','));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!edit) {
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
                        maxLength,
                        required,
                        placeholder,
                        step
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
            setMaxLength(null);
            setStep(null);
            setPlaceholder(null);
            setSelectOptions([]);
        } else {
            dispatch(updateInput({
                ...input,
                name,
                title,
                type,
                attributes: {
                    min,
                    max,
                    pattern,
                    maxLength,
                    required,
                    placeholder,
                    step
                },
                selectOptions
            }));

            setEdit(false);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();

        setEdit(false);

        setTitle(input.title);
        setName(input.name);
        setType(input.type);
        setRequired(input.attributes.required);
        setMin(input.attributes.min);
        setMax(input.attributes.max);
        setPattern(input.attributes.pattern);
        setMaxLength(input.attributes.maxLength);
        setStep(input.attributes.step);
        setPlaceholder(input.attributes.placeholder);
        setSelectOptions(input.selectOptions);
    }

    return (
        <form className='new-input-form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <label htmlFor='title'>Input Title</label>
                <input
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                    type='text'
                    placeholder='Displayed title for input'
                    required>
                </input>
            </div>
            <div className='input-container'>
                <label htmlFor='name'>Input Name</label>
                <input
                    name='name'
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                    type='text'
                    placeholder='Unique Name of Input' pattern='\S+'
                    required>
                </input>
            </div>
            <div className='input-container'>
                <label htmlFor='type'>Input Type</label>
                <select name='type' value={type} onChange={e => setType(e.currentTarget.value)}>
                    <option value='text'>text</option>
                    <option value='number'>number</option>
                    <option value='checkbox'>checkbox</option>
                    <option value='color'>color</option>
                    <option value='date'>date</option>
                    <option value='datetime-local'>datetime-local</option>
                    <option value='email'>email</option>
                    <option value='month'>month</option>
                    <option value='tel'>telephone</option>
                    <option value='time'>time</option>
                    <option value='url'>url</option>
                    <option value='week'>week</option>
                    <option value='select'>select</option>
                    <option value='radio'>radio (multiple choice)</option>
                </select>
            </div>
            {
                type === 'select' || type === 'radio' ?
                <div className='input-container'>
                    <label htmlFor='select-list'>Select Options</label>
                    <input
                        name='select-list'
                        type='text'
                        value={selectOptions.join(',')}
                        onChange={handleSelectOptionsChange}
                        placeholder='comma seperated list of select options or multiple choice options'>
                    </input>
                </div>
                    : null
            }
            <div className='attributes-list'>
                <p>Leave empty for no attribute</p>
                <div className='input-container'>
                    <label htmlFor='required'>Required?</label>
                    <input
                        name='required'
                        type='checkbox'
                        checked={required}
                        onChange={e => setRequired(!required)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='min'>Min</label>
                    <input
                        name='min'
                        type='number'
                        value={min}
                        onChange={e => e.currentTarget.value === '' ? setMin(null) : setMin(e.currentTarget.value)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='max'>Max</label>
                    <input
                        name='max'
                        type='number'
                        value={max}
                        onChange={e => e.currentTarget.value === '' ? setMax(null) : setMax(e.currentTarget.value)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='pattern'>RegEx Pattern</label>
                    <input
                        name='pattern'
                        type='text'
                        placeholder='Regex Pattern...'
                        value={pattern}
                        onChange={e => e.currentTarget.value === '' ? setPattern(null) : setPattern(e.currentTarget.value)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='maxLength'>Max Length</label>
                    <input
                        name='max-length'
                        type='number'
                        placeholder='max length of text'
                        value={maxLength}
                        onChange={e => e.currentTarget.value === '' ? setMaxLength(null) : setMaxLength(e.currentTarget.value)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='step'>Step</label>
                    <input
                        type='number'
                        placeholder='Step of number input'
                        value={step}
                        step='0.0001'
                        onChange={e => e.currentTarget.value === '' ? setStep(null) : setStep(e.currentTarget.value)}>
                    </input>
                </div>
                <div className='input-container'>
                    <label htmlFor='placeholder'>Placeholder</label>
                    <input
                        type='text'
                        placeholder='placeholder text for input'
                        value={placeholder}
                        onChange={e => e.currentTarget.value === '' ? setPlaceholder(null) : setPlaceholder(e.currentTarget.value)}>
                    </input>
                </div>
            </div>
            <input className='save-input' type='submit' value={edit ? 'Save' : 'Add New Input'}></input>
            {
                edit ? <button className='cancel-edit-input' onClick={handleCancel}>Cancel</button> : null
            }
        </form>
    )
}