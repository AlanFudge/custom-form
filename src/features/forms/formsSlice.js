import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteInput } from "../inputs/inputsSlice";
import { deleteSection } from "../sections/sectionsSlice";

//If DB is implemented use asyncThunk to add to DB

const initialState = {
    // 'some-uuidv4-id': {
    //     id: "some-uuidv4-id",
    //     name: "form-name",
    //     sections: ["array-of-section-ids"],
    //     externalTarget: "external-target-default-undefined"
    // }
}

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addForm(state, action) {
            state[action.payload.id] = {
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
        changeFormName(state, action) {
            state[action.payload.formId].name = action.payload.name;
        },
        changeFormTarget(state, action) {
            state[action.payload.formId].externalTarget = action.payload.externalTarget;
        },
        deleteForm(state, action) {
            delete state[action.payload.formId];
        }
    }
});

export const selectForms = (state) => state.forms;
export const { addForm, addSectionToForm, deleteSectionFromForm, changeFormName, changeFormTarget, deleteForm } = formsSlice.actions;

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