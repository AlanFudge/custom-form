import React from 'react';
import { useSelector } from 'react-redux';
import { selectInputs } from './inputsSlice';

export default function Input({ inputId }) {
    const inputs = useSelector(selectInputs);
    const input = inputs[inputId];

    return (
        <p>{input.inputId}</p>
    )
}