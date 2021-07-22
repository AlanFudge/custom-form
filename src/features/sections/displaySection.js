import React from 'react';
import { useSelector } from 'react-redux';
import { selectSections } from './sectionsSlice';
import DisplayInput from '../inputs/displayInput';

export default function DisplaySection({ sectionId }) {
    const sections = useSelector(selectSections);
    const section = sections[sectionId];

    if (section.format === 'single-column') {
        return (
            <div className='display-section'>
                <h1>{section.name}</h1>
                <div className='display-section-content one-column'>
                    <p>{section.description}</p>
                    {
                        section.inputs.map(inputId => <DisplayInput inputId={inputId} />)
                    }
                </div>
            </div>
        )
    } else if (section.format === 'double-column') {
        const midpoint = Math.floor(section.inputs.length / 2);
        const columnOne = section.inputs.slice(0, midpoint);
        const columnTwo = section.inputs.slice(midpoint, section.inputs.length);

        return (
            <div className='display-section'>
                <h1>{section.name}</h1>
                <div className='display-section-content two-column'>
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
                </div>
            </div>
        )
    }

    return (
        <p>{sectionId}</p>
    )
}