import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSectionThunk, selectSections } from './sectionsSlice';
import { useParams } from 'react-router';
import NewInputForm from '../../components/newInputForm';
import Input from '../inputs/input';
import NewSectionForm from '../../components/newSectionForm';


export default function Section({ sectionId }) {
    const sections = useSelector(selectSections);
    const section = sections[sectionId];
    const dispatch = useDispatch();
    const { formId } = useParams();
    const [edit, setEdit] = useState();

    const handleDelete = (e) => {
        e.preventDefault();

        const inputIds = section.inputs;

        dispatch(deleteSectionThunk({
            formId,
            sectionId,
            inputIds
        }));
    }

    return (
        <div className='edit-section'>
            {
                edit ?
                    <NewSectionForm edit={edit} setEdit={setEdit} section={section} />
                    :
                    <>
                        <h2>{section.name}</h2>
                        <p>{section.description}</p>
                        <p>{section.format}</p>
                        <button onClick={e => setEdit(true)}>Edit</button>
                    </>
            }
            <div className='edit-input-list'>
                {
                    section.inputs.map(id => {
                        return <Input inputId={id} sectionId={sectionId} />
                    })
                }
                <NewInputForm sectionId={sectionId} />
            </div>
            <button className='delete' onClick={handleDelete}>Delete Section</button>
        </div>
    )
}