import React from 'react';
import { useSelector } from 'react-redux';
import { selectInputs } from '../features/inputs/inputsSlice';

export default function DisplayInput({ inputId }) {
    const inputs = useSelector(selectInputs);
    const { name, type, title, attributes } = inputs[inputId];
    const inputAttributes = {
        name,
        type,
        ...attributes
    }

    return (
        <div id={inputId}>
            <label htmlFor={name}>{title}</label>
            <input {...inputAttributes}></input>
        </div>
    )
}