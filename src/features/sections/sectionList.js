import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectForms } from '../forms/formsSlice';
import NewSectionForm from './newSectionForm';
import Section from './section';

export default function SectionList() {
    const { formId } = useParams();
    const forms = useSelector(selectForms);
    const [addNewSection, setAddNewSection] = useState(false);

    return (
        <div className="section-list">
            {
                forms[formId].sections.map((id, i) => {
                    return <Section sectionId={id} sectionNum={i + 1} />
                })
            }
            {
                addNewSection ?
                    <>
                        <NewSectionForm />
                        <button className='cancel-add-section' onClick={e => setAddNewSection(false)}>Cancel</button>
                    </>
                    :
                    <button className='add-section' onClick={e => setAddNewSection(true)}>Add New Section</button>
            }
        </div>
    );
}