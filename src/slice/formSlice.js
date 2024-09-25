import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  isSubmitting: false,
  error: null,
  successMessage: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
        const { field, value } = action.payload;
        state.formData[field] = value;
      },
      submitFormLocally: (state) => {
        // Simply mark as submitted locally
        state.isSubmitting = false;
        state.successMessage = 'Logged in successfully!';
      },
      resetForm: (state) => {
        state.formData = initialState.formData;
        state.isSubmitting = false;
        state.error = null;
        state.successMessage = '';
      },
  }
});

export const { updateFormData, submitFormLocally, resetForm } = formSlice.actions;
export default formSlice.reducer;
