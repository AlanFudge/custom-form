import { createSlice } from "@reduxjs/toolkit";
import { addSectionToForm, deleteSectionFromForm } from "../forms/formsSlice";
import { deleteInput } from "../inputs/inputsSlice";

const initialState = {}

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