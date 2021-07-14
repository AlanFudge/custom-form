import { createSlice } from "@reduxjs/toolkit";
import { addInputToSection, deleteInputFromSection } from "../sections/sectionsSlice";

const initialState = {
    '5d3c0b0d-7f57-406a-99c8-59faeed35c80': {
        inputId: '5d3c0b0d-7f57-406a-99c8-59faeed35c80',
        name: 'soloflight',
        type: 'checkbox',
        title: 'At least one solo flight',
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        }
    },
    '6f8213bd-79cf-496e-9146-76b1749cc238': {
        inputId: '6f8213bd-79cf-496e-9146-76b1749cc238',
        name: 'lessonsgraded',
        type: 'checkbox',
        title: 'All lessons graded',
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        }
    },
    '5d2c2dfc-e57a-4431-a962-31c025b748d7': {
        inputId: '5d2c2dfc-e57a-4431-a962-31c025b748d7',
        name: 'totalflight',
        type: 'number',
        title: 'Total Flight Time',
        attributes: {
            min: '30',
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: '0.1'
        }
    },
    '74e90405-12ec-4aca-b06f-ccb6545317a6': {
        inputId: '74e90405-12ec-4aca-b06f-ccb6545317a6',
        name: 'totalsolo',
        type: 'number',
        title: 'Total Solo Time',
        attributes: {
            min: '5',
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: '0.1'
        }
    },
    '12b7b138-9f4d-4efe-b33b-1bab0f024b0f': {
        inputId: '12b7b138-9f4d-4efe-b33b-1bab0f024b0f',
        name: 'totalsim',
        type: 'number',
        title: 'Total Sim Time',
        attributes: {
            min: '3',
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: '0.1'
        }
    },
    '38e33044-5f1b-493c-a0bc-6921406c8b50': {
        inputId: '38e33044-5f1b-493c-a0bc-6921406c8b50',
        name: 'totallandings',
        type: 'number',
        title: 'Total Landings',
        attributes: {
            min: '10',
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: '1'
        }
    },
}

const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        addInput(state, action) {
            state[action.payload.inputId] = action.payload
        },
        updateInput(state, action) {
            state[action.payload.inputId] = action.payload;
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
export const { addInput, updateInput, deleteInput, addAttributes } = inputsSlice.actions;

export const addInputThunk = (payload) => {
    const { sectionId, input } = payload;
    const { inputId, name, type, title, attributes, selectOptions } = input;
    return (dispatch) => {
        dispatch(addInputToSection({ sectionId, inputId }));

        dispatch(addInput({ inputId, name, type, title, attributes, selectOptions }));
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