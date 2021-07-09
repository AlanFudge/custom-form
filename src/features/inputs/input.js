import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewInputForm from '../../components/newInputForm';
import { deleteInputThunk, selectInputs } from './inputsSlice';

export default function Input({ inputId, sectionId }) {
    const [edit, setEdit] = useState(false);
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
            {
                edit ?
                    <NewInputForm edit={edit} setEdit={setEdit} input={input} />
                    :
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
                        <button onClick={e => setEdit(true)}>Edit</button>
                        <button onClick={deleteInputHandler}>Delete Input</button>
                    </div>
            }
        </>
    )
}