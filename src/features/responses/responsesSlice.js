import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'b6d15384-2aab-40eb-87f5-c6bc9fac14ef': {
        formId: "71f7163b-924e-40f2-9ab1-a96b2ad7f858",
        responseId: "b6d15384-2aab-40eb-87f5-c6bc9fac14ef",
        timestamp: '2021-10-05T18:25:35.804Z',
        body: {
            soloflight: "on",
            lessonsgraded: "on",
            totalflight: "30",
            totalsolo: "5",
            totalsim: "3",
            totallandings: "10",
            multi_1: "answer 4",
            multi_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Mi tempus imperdiet nulla malesuada.",
            select_1: "option 2",
            select_2: "option 2",
            text_input_1: "asdf, asdf",
            color_input_1: "#000000",
            email_input_1: "af320040@gmail.com",
            phone_input_1: "4697669314",
            url_input_1: "https: //www.google.com",
            week_input_1: "2021-W42",
            date_input_1: "2021-01-01",
            datetime_input_1: "2021-10-06T14: 11"
        }
    },
    'b6d15384-3bbe-40eb-87f5-c6bc9fac14ef': {
        formId: "71f7163b-924e-40f2-9ab1-a96b2ad7f858",
        responseId: "b6d15384-3bbe-40eb-87f5-c6bc9fac14ef",
        timestamp: '2021-10-05T17:25:35.804Z',
        body: {
            soloflight: "on",
            lessonsgraded: "on",
            totalflight: "30",
            totalsolo: "5",
            totalsim: "3",
            totallandings: "10",
            multi_1: "answer 4",
            multi_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Mi tempus imperdiet nulla malesuada.",
            select_1: "option 2",
            select_2: "option 2",
            text_input_1: "asdf, asdf",
            color_input_1: "#000000",
            email_input_1: "af320040@gmail.com",
            phone_input_1: "4697669314",
            url_input_1: "https: //www.google.com",
            week_input_1: "2021-W42",
            date_input_1: "2021-01-01",
            datetime_input_1: "2021-10-06T14: 11"
        }
    }
};

const responsesSlice = createSlice({
    name: 'responses',
    initialState,
    reducers: {
        addResponse(state, action) {
            state[action.payload.responseId] = {...action.payload, timestamp: new Date()};
        },
        deleteResponse(state, action) {
            delete state[action.payload.responseId];
        }
    }
});

export const selectResponses = (state) => state.responses;
export const { addResponse, deleteResponse } = responsesSlice.actions;
export default responsesSlice.reducer;
