// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  formData: {},
  inputStarted: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setInputStarted: (state, action) => {
        state.inputStarted = action.payload;
      },
      
    setStep: (state, action) => {
      state.step = action.payload;
    }
  },
});

export const { nextStep, prevStep, setFormData, setInputStarted, setStep } = formSlice.actions;

export default formSlice.reducer;
