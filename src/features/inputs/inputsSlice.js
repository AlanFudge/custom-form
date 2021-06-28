import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        addInput(state, action) {
            state[action.payload.id] = action.payload
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
export default inputsSlice.reducer;