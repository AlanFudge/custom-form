import { createSlice } from "@reduxjs/toolkit";
import { addInputToSection, deleteInputFromSection } from "../sections/sectionsSlice";

const initialState = {}

const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        addInput(state, action) {
            state[action.payload.inputId] = action.payload
        },
        changeInputName(state, action) {
            state[action.payload.inputId].name = action.payload.name;
        },
        changeInputTitle(state, action) {
            state[action.payload.inputId].title = action.payload.title;
        },
        changeInputType(state, action) {
            state[action.payload.inputId].type = action.payload.type;
        },
        deleteInput(state, action) {
            delete state[action.payload.inputId];
        },
        addAttributes(state, action) {
            state[action.payload.inputId].attributes = action.payload.attributes;
        }
    }
});

export const selectInputs = (state) => state.inputs;
export const { addInput, changeInputName, changeInputTitle, changeInputType, deleteInput, addAttributes } = inputsSlice.actions;

export const addInputThunk = (payload) => {
    const { sectionId, input } = payload;
    const { inputId, name, type, title, attributes } = input;
    return (dispatch) => {
        dispatch(addInputToSection({ sectionId, inputId }));

        dispatch(addInput({ inputId, name, type, title, attributes }));
    }
}

export const deleteInputThunk = (payload) => {
    const { sectionId, inputId } = payload;
    return (dispatch) => {
        dispatch(deleteInputFromSection({
            sectionId,
            inputId
        }));

        dispatch(deleteInput({ inputId }));
    }
}

export default inputsSlice.reducer;