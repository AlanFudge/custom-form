import { createSlice } from "@reduxjs/toolkit";
import { addSectionToForm, deleteSectionFromForm } from "../forms/formsSlice";
import { deleteInput } from "../inputs/inputsSlice";

const initialState = {
    'df26778a-691c-49ec-8050-57198bf8f654': {
        sectionId: 'df26778a-691c-49ec-8050-57198bf8f654',
        name: 'Prerequisites',
        description: 'All items must be completed before form submission.',
        format: 'single-column',
        inputs: [
            '5d3c0b0d-7f57-406a-99c8-59faeed35c80',
            '6f8213bd-79cf-496e-9146-76b1749cc238'
        ]
    },
    '5cd8257b-71f7-4a32-9c99-8fb682c8e128': {
        sectionId: '5cd8257b-71f7-4a32-9c99-8fb682c8e128',
        name: 'Minimums',
        description: 'All minimums must be met before form submission. Any and all submissions not meeting minimums will be charged no show fees when cancelled.',
        format: 'double-column',
        inputs: [
            '5d2c2dfc-e57a-4431-a962-31c025b748d7',
            '74e90405-12ec-4aca-b06f-ccb6545317a6',
            '12b7b138-9f4d-4efe-b33b-1bab0f024b0f',
            '38e33044-5f1b-493c-a0bc-6921406c8b50'
        ]
    },
    "daf28cfb-1ec0-4e3c-b27e-99e457cb47bf": {
        sectionId: "daf28cfb-1ec0-4e3c-b27e-99e457cb47bf",
        name: "Multiple Choice",
        description: "Please select one of the multiple choice options",
        format: "single-column",
        inputs: [
            "dbda2ef8-1613-40e8-8730-fa1b13a8191e",
            "31bb2b7c-cebb-4a8d-a38d-e5aab55166ba"
        ]
    },
    '2dc8747f-2a7e-4a8d-b0f8-cfd0bb2c04f5': {
        sectionId: '2dc8747f-2a7e-4a8d-b0f8-cfd0bb2c04f5',
        name: 'Select Inputs',
        description: 'Please select one of the options from the dropdown menus below.',
        format: 'single-column',
        inputs: [
            '06ba6179-c5f2-4210-bfbb-dcb33b72a38d',
            '0f8b4207-2c4a-4ccc-9a46-970f1a923bd1'
        ]
    }
}

const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        addSection(state, action) {
            state[action.payload.sectionId] = {
                ...action.payload,
                inputs: []
            }
        },
        updateSection(state, action) {
            state[action.payload.sectionId] = action.payload;
        },
        addInputToSection(state, action) {
            state[action.payload.sectionId].inputs.push(action.payload.inputId);
        },
        swapInputIndexes(state, action) {
            const input1Index = state[action.payload.sectionId].inputs.indexOf(action.payload.input1Id);
            const input2Index = state[action.payload.sectionId].inputs.indexOf(action.payload.input2Id);
            state[action.payload.sectionId].inputs[input1Index] = action.payload.input2Id;
            state[action.payload.sectionId].inputs[input2Index] = action.payload.input1Id;
        },
        deleteSection(state, action) {
            delete state[action.payload.sectionId];
        },
        deleteInputFromSection(state, action) {
            state[action.payload.sectionId].inputs = state[action.payload.sectionId].inputs.filter(id => id != action.payload.inputId);
        }
    }
});

export const selectSections = (state) => state.sections;
export const { addSection, updateSection, addInputToSection, swapInputIndexes, deleteSection, deleteInputFromSection } = sectionsSlice.actions;

export const addSectionThunk = (payload) => {
    const { formId, section } = payload
    return (dispatch) => {
        dispatch(addSection(section));

        dispatch(addSectionToForm({ formId, sectionId: section.sectionId }))
    }
}

export const deleteSectionThunk = (payload) => {
    return (dispatch) => {
        payload.inputIds.forEach(inputId => {
            dispatch(deleteInput({ inputId }));
        });

        dispatch(deleteSection({ sectionId: payload.sectionId }));

        dispatch(deleteSectionFromForm({ sectionId: payload.sectionId, formId: payload.formId }));
    }
}

export default sectionsSlice.reducer;