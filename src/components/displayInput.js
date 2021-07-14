import React from 'react';
import { useSelector } from 'react-redux';
import { selectInputs } from '../features/inputs/inputsSlice';

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
            <div id={inputId}>
                <label htmlFor={name}>{title}</label>
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
            <div id={inputId}>
                <label htmlFor={name}>{title}</label>
                <br />
                {
                    selectOptions.map(value => {
                        return (
                            <>
                                <input {...inputAttributes} value={value}></input>
                                <label htmlFor={value}>{value}</label>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div id={inputId}>
            <label htmlFor={name}>{title}</label>
            <input {...inputAttributes}></input>
        </div>
    )
}