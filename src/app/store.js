import { configureStore } from "@reduxjs/toolkit";
import forms from '../features/forms/formsSlice';
import sections from "../features/sections/sectionsSlice";
import inputs from "../features/inputs/inputsSlice";

export default configureStore({
    reducer: {
        forms,
        sections,
        inputs
    }
});