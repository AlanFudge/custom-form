import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const responsesSlice = createSlice({
    name: 'responses',
    initialState,
    reducers: {
        addResponse(state, action) {
            state[action.payload.responseId] = action.payload;
        },
        deleteResponse(state, action) {
            delete state[action.payload.responseId];
        }
    }
});

export const selectResponses = (state) => state.responses;
export const { addResponse, deleteResponse } = responsesSlice.actions;
export default responsesSlice.reducer;
