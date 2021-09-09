import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteInput } from "../inputs/inputsSlice";
import { deleteSection } from "../sections/sectionsSlice";

//If DB is implemented use asyncThunk to add to DB

const initialState = {
    '71f7163b-924e-40f2-9ab1-a96b2ad7f858': {
        formId: '71f7163b-924e-40f2-9ab1-a96b2ad7f858',
        name: 'EOC/Submission',
        externalTarget: 'https://someurl.com/',
        sections: [
            'df26778a-691c-49ec-8050-57198bf8f654',
            '5cd8257b-71f7-4a32-9c99-8fb682c8e128',
            'daf28cfb-1ec0-4e3c-b27e-99e457cb47bf',
            '2dc8747f-2a7e-4a8d-b0f8-cfd0bb2c04f5'
        ]
    }
}

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addForm(state, action) {
            state[action.payload.formId] = {
                ...action.payload,
                sections: []
            }
        },
        addSectionToForm(state, action) {
            state[action.payload.formId].sections.push(action.payload.sectionId);
        },
        deleteSectionFromForm(state, action) {
            state[action.payload.formId].sections = state[action.payload.formId].sections.filter(i => i != action.payload.sectionId);
        },
        updateForm(state, action) {
            state[action.payload.formId] = action.payload;
        },
        deleteForm(state, action) {
            delete state[action.payload.formId];
        }
    }
});

export const selectForms = (state) => state.forms;
export const { addForm, addSectionToForm, deleteSectionFromForm, updateForm, deleteForm } = formsSlice.actions;

export const deleteFormThunk = (payload) => {
    return (dispatch) => {
        const { formId, sectionIds, inputIds } = payload;
        inputIds.forEach(inputId => {
            dispatch(deleteInput({ inputId }));
        });
        sectionIds.forEach(sectionId => {
            dispatch(deleteSection({ sectionId }));
        });
        dispatch(deleteForm({ formId }));
    }
}

export default formsSlice.reducer;