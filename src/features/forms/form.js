import React from 'react';
import { useSelector } from 'react-redux';
import { selectForms } from './formsSlice';
import { useParams } from 'react-router-dom';
import SectionList from '../sections/sectionList';

export default function Form() {
    const forms = useSelector(selectForms);
    const { formId } = useParams();
    const form = forms[formId];

    return (
        <>
            <h3>I Am A Form {form.name}: {form.id}</h3>
            <SectionList />
        </>
    )
}