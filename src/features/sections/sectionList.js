import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectForms } from '../forms/formsSlice';
import NewSectionForm from '../../components/newSectionForm';
import Section from './section';

export default function SectionList() {
    const { formId } = useParams();
    const forms = useSelector(selectForms);
    const [addNewSection, setAddNewSection] = useState(false);

    return (
        <>
            {
                forms[formId].sections.map(id => {
                    return <Section sectionId={id} />
                })
            }
            {
                addNewSection ?
                    <>
                        <NewSectionForm />
                        <button onClick={e => setAddNewSection(false)}>Collapse Form</button>
                    </>
                    :
                    <button onClick={e => setAddNewSection(true)}>Add New Section</button>
            }
        </>
    );
}