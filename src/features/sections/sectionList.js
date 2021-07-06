import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectForms } from '../forms/formsSlice';
import NewSectionForm from '../../components/newSectionForm';
import Section from './section';

export default function SectionList() {
    const { formId } = useParams();
    const forms = useSelector(selectForms); 

    return (
        <>
            {
                forms[formId].sections.map(id => {
                    return <Section sectionId={id} />
                })
            }
            <NewSectionForm />
        </>
    );
}