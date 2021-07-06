import { createSlice } from "@reduxjs/toolkit";
import { addSectionToForm, deleteSectionFromForm } from "../forms/formsSlice";
import { deleteInput } from "../inputs/inputsSlice";

const initialState = {}

const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        addSection(state, action) {
            state[action.payload.id] = {
                ...action.payload,
                inputs: []
            }
        },
        changeSectionName(state, action) {
            state[action.payload.sectionId].name = action.payload.name;
        },
        changeSectionDescription(state, action) {
            state[action.payload.sectionId].description = action.payload.description;
        },
        changeSectionFormat(state, action) {
            state[action.payload.sectionId].format = action.payload.format;
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
        }
    }
});

export const selectSections = (state) => state.sections;
export const { addSection, changeSectionName, changeSectionDescription, changeSectionFormat, addInputToSection, swapInputIndexes, deleteSection } = sectionsSlice.actions;

export const addSectionThunk = (payload) => {
    return (dispatch) => {
        dispatch(addSection(payload.section));

        dispatch(addSectionToForm({ formId: payload.formId, sectionId: payload.section.id }))
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