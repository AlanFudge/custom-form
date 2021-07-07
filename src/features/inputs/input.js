import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInputThunk, selectInputs } from './inputsSlice';

export default function Input({ inputId, sectionId }) {
    const inputs = useSelector(selectInputs);
    const input = inputs[inputId];
    const dispatch = useDispatch();

    const deleteInputHandler = (e) => {
        e.preventDefault();
        dispatch(deleteInputThunk({
            inputId,
            sectionId
        }));
    }

    return (
        <>
            <p>{input.inputId}</p>
            <button onClick={deleteInputHandler}>Delete Input</button>
        </>
    )
}