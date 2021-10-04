import React from 'react';
import { useSelector } from 'react-redux';
import { selectInputs } from './inputsSlice';

export default function DisplayInput({ inputId }) {
    const inputs = useSelector(selectInputs);
    const { name, type, title, attributes, selectOptions } = inputs[inputId];
    const inputAttributes = {
        name,
        type,
        ...attributes
    }

    if (type === 'select') {
        return (
            <div id={inputId} className='display-input-select display-input'>
                <label htmlFor={name}>{title} {inputAttributes.required ? <span className='required-ast'>*</span> : null}</label>
                <select {...inputAttributes}>
                    {
                        selectOptions.map(value => {
                            return <option value={value}>{value}</option>
                        })
                    }
                </select>
            </div>
        )
    } else if (type === 'radio') {
        return (
            <div id={inputId} className='display-input-radio display-input'>
                <p htmlFor={name}>{title} {inputAttributes.required ? <span className='required-ast'>*</span> : null}</p>
                {
                    selectOptions.map(value => {
                        return (
                            <div className='display-input-radio-choice'>
                                <input {...inputAttributes} value={value}></input>
                                <label htmlFor={value}>{value}</label>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div id={inputId} className='display-input'>
            <label htmlFor={name}>{title} {inputAttributes.required ? <span className='required-ast'>*</span> : null}</label>
            <input {...inputAttributes}></input>
        </div>
    )
}