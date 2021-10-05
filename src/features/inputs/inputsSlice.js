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
    "dbda2ef8-1613-40e8-8730-fa1b13a8191e": {
        inputId: "dbda2ef8-1613-40e8-8730-fa1b13a8191e",
        name: "multi_1",
        type: "radio",
        title: "Mulitple choice 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        },
        selectOptions: [
            "answer 1"
            , "answer 2"
            , "answer 3"
            , "answer 4"
        ]
    },
    '31bb2b7c-cebb-4a8d-a38d-e5aab55166ba': {
        inputId: "31bb2b7c-cebb-4a8d-a38d-e5aab55166ba",
        name: "multi_2",
        type: "radio",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaque?",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        },
        selectOptions: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat."
            , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum."
            , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Mi tempus imperdiet nulla malesuada."
        ]
    },
    '06ba6179-c5f2-4210-bfbb-dcb33b72a38d': {
        inputId: "06ba6179-c5f2-4210-bfbb-dcb33b72a38d",
        name: "select_1",
        type: "select",
        title: "Select Option 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        },
        selectOptions: [
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ]
    },
    '0f8b4207-2c4a-4ccc-9a46-970f1a923bd1': {
        inputId: "0f8b4207-2c4a-4ccc-9a46-970f1a923bd1",
        name: "select_2",
        type: "select",
        title: "Select Option 2",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null
        },
        selectOptions: [
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ]
    },
    '269aa62d-a24d-45da-9770-72d21619fa14': {
        inputId: "269aa62d-a24d-45da-9770-72d21619fa14",
        name: "text_input_1",
        type: "text",
        title: "Text Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: ".+,.+",
            maxLength: null,
            required: true,
            placeholder: "words, seperated, by, comma",
            step: null,
        },
        selectOptions: []
    },
    '01cd1fdd-95a7-4654-bc91-c7bdda990886': {
        inputId: "01cd1fdd-95a7-4654-bc91-c7bdda990886",
        name: "color_input_1",
        type: "color",
        title: "Color Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null,
        },
        selectOptions: []
    },
    '8307b3ac-2e3e-4f8b-86bd-a1763a6448df': {
        inputId: "8307b3ac-2e3e-4f8b-86bd-a1763a6448df",
        name: "email_input_1",
        type: "email",
        title: "Email Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: "example@someurl.com",
            step: null,
        },
        selectOptions: []
    },
    '704b55fd-44d6-4a76-9a45-826a318455c1': {
        inputId: '704b55fd-44d6-4a76-9a45-826a318455c1',
        name: "phone_input_1",
        type: "tel",
        title: "Phone Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: "(469)-766-4674",
            step: null,
        },
        selectOptions: []
    },
    '0274b7cb-d7da-4975-b77e-f13d43afd07c': {
        inputId: "0274b7cb-d7da-4975-b77e-f13d43afd07c",
        name: "url_input_1",
        type: "url",
        title: "URL Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: "https://www.someurl.com/",
            step: null,
        },
        selectOptions: []
    }, 'a6c84e72-4652-4477-9544-89756aba7571': {
        inputId: "a6c84e72-4652-4477-9544-89756aba7571",
        name: "week_input_1",
        type: "week",
        title: "Week Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null,
        },
        selectOptions: []
    },
    'dbb73a38-508c-4ea3-a031-29c2cc9cfea9': {
        inputId: "dbb73a38-508c-4ea3-a031-29c2cc9cfea9",
        name: "date_input_1",
        type: "date",
        title: "Date Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null,
        },
        selectOptions: []
    },
    '80b30a27-262b-40d3-b414-8796fa6d54d1': {
        inputId: "80b30a27-262b-40d3-b414-8796fa6d54d1",
        name: "datetime_input_1",
        type: "datetime-local",
        title: "Date Time Input 1",
        attributes: {
            min: null,
            max: null,
            pattern: null,
            maxLength: null,
            required: true,
            placeholder: null,
            step: null,
        },
        selectOptions: []
    }
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