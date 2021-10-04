import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewInputForm from './newInputForm';
import { selectSections, swapInputIndexes } from '../sections/sectionsSlice';
import { deleteInputThunk, selectInputs } from './inputsSlice';

export default function Input({ inputId, sectionId }) {
    const [edit, setEdit] = useState(false);
    const inputs = useSelector(selectInputs);
    const sections = useSelector(selectSections);
    const input = inputs[inputId];
    const section = sections[sectionId];
    const dispatch = useDispatch();

    const deleteInputHandler = (e) => {
        e.preventDefault();
        dispatch(deleteInputThunk({
            inputId,
            sectionId
        }));
    }

    const handleSwapUp = (e) => {
        const currentIndex = section.inputs.indexOf(input.inputId);
        if (currentIndex <= 0) {
            e.preventDefault();
        } else {
            e.preventDefault();

            const input1Id = input.inputId;
            const input2Id = section.inputs[currentIndex - 1];

            dispatch(swapInputIndexes({
                sectionId,
                input1Id,
                input2Id
            }))
        }
    }

    const handleSwapDown = (e) => {
        const currentIndex = section.inputs.indexOf(input.inputId);
        if (currentIndex < 0 || currentIndex == sections[sectionId].inputs.length - 1) {
            e.preventDefault();
        } else {
            e.preventDefault();

            const input1Id = input.inputId;
            const input2Id = section.inputs[currentIndex + 1];

            dispatch(swapInputIndexes({
                sectionId,
                input1Id,
                input2Id
            }))
        }
    }

    return (
        <>
            {
                edit ?
                    <NewInputForm sectionId={sectionId} edit={edit} setEdit={setEdit} input={input} />
                    :
                    <div className="input">
                    <div className="swap-button-holder">
                        <button className='swap-up' onClick={handleSwapUp}>↑</button>
                        <button className='swap-down' onClick={handleSwapDown}>↓</button>
                    </div>
                        <h3>{input.title}</h3>
                        <p>Input Name: {input.name}</p>
                        <p>Input Type: {input.type}</p>
                        <ul>
                            {
                                Object.keys(input.attributes).map(key => {
                                    return input.attributes[key] ? <li>{`${key}: ${input.attributes[key]}`}</li> : null;
                                })
                            }
                        </ul>
                        <button className="edit-input-button" onClick={e => setEdit(true)}>Edit</button>
                        <button className="delete-input-button" onClick={deleteInputHandler}>Delete Input</button>
                    </div>
            }
        </>
    )
}