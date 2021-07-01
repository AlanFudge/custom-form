import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectForms } from '../forms/formsSlice';
import { deleteSectionThunk, selectSections } from './sectionsSlice';
import NewSectionForm from '../../components/newSectionForm';

export default function SectionList() {
    const sections = useSelector(selectSections);
    const { formId } = useParams();
    const forms = useSelector(selectForms);
    const sectionsForForm = forms[formId].sections.map(i => sections[i]);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        const sectionId = e.currentTarget.id;

        const inputIds = sections[sectionId].inputs.flatMap(id => {
            return sections[id].inputs;
        });

        dispatch(deleteSectionThunk({
            formId,
            sectionId,
            inputIds
        }));
    }

    return (
        <>
            {sectionsForForm.map(i => <><h1>{i.id}</h1><button id={i.id} onClick={handleDelete}>Delete</button></>)}
            <NewSectionForm />
        </>
    );
}