// src/features/form/formThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitFormApi } from '../services/api';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export const submitFormThunk = createAsyncThunk(
  'form/submitForm',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await submitFormApi(formData);
      console.log("response", response)
      return response; 
    } catch (error) {
      return rejectWithValue('Failed to submit form');
    }
  }
);
