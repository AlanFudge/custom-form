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
        <div>
            <h3>{input.inputId}</h3>
            <h4>{input.name}</h4>
            <h5>{input.title}</h5>
            <p>{input.type}</p>
            <ul>
                {
                    Object.keys(input.attributes).map(key => {
                        return <li>{`${key}: ${input.attributes[key]}`}</li>
                    })
                }
            </ul>
            <button onClick={deleteInputHandler}>Delete Input</button>
        </div>
    )
}