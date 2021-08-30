import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSectionThunk, selectSections } from './sectionsSlice';
import { useParams } from 'react-router';
import NewInputForm from '../inputs/newInputForm';
import Input from '../inputs/input';
import NewSectionForm from './newSectionForm';


export default function Section({ sectionId, sectionNum }) {
    const sections = useSelector(selectSections);
    const section = sections[sectionId];
    const dispatch = useDispatch();
    const { formId } = useParams();
    const [edit, setEdit] = useState();
    const [addInput, setAddInput] = useState(false);

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
            <h2 className='edit-section-header'>Section {sectionNum}</h2>
            <div className='edit-section-content'>
                <button className='delete' onClick={handleDelete}>Delete Section</button>
                {
                    edit ?
                        <NewSectionForm edit={edit} setEdit={setEdit} section={section} />
                        :
                        <div className='edit-section-details'>
                            <h3>{section.name}</h3>
                            <p>{section.description}</p>
                            <p>{section.format}</p>
                            <button className='edit-section-details-button' onClick={e => setEdit(true)}>Edit</button>
                        </div>
                }
                <hr />
                <div className='edit-input-list'>
                    {
                        section.inputs.map(id => {
                            return (
                                <>
                                    <Input inputId={id} sectionId={sectionId} />
                                    <hr />
                                </>
                            );
                        })
                    }
                    {
                        addInput ?
                            <>
                                <NewInputForm sectionId={sectionId} />
                                <button className='cancel-add-input' onClick={e => setAddInput(false)}>Cancel</button>
                            </>
                            :
                            <button className='add-input' onClick={e => setAddInput(true)}>Add Input</button>
                    }
                </div>
            </div>
        </div>
    )
}