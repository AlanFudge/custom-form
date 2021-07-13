import React from 'react';
import { useSelector } from 'react-redux';
import { selectSections } from '../features/sections/sectionsSlice';
import DisplayInput from './displayInput';

export default function DisplaySection({ sectionId }) {
    const sections = useSelector(selectSections);
    const section = sections[sectionId];

    if (section.format === 'single-column') {
        return (
            <>
                <h1>{section.name}</h1>
                <p>{section.description}</p>
                {
                    section.inputs.map(inputId => <DisplayInput inputId={inputId} />)
                }
            </>
        )
    } else if (section.format === 'double-column') {
        const midpoint = Math.floor(section.inputs.length / 2);
        const columnOne = section.inputs.slice(0, midpoint);
        const columnTwo = section.inputs.slice(midpoint, section.inputs.length);

        return (
            <>
                <h1>{section.name}</h1>
                <p>{section.description}</p>
                <div className='column-one'>
                    {
                        columnOne.map(inputId => <DisplayInput inputId={inputId} />)
                    }
                </div>
                <div className='column-two'>
                    {
                        columnTwo.map(inputId => <DisplayInput inputId={inputId} />)
                    }
                </div>
            </>
        )
    }

    return (
        <p>{sectionId}</p>
    )
}