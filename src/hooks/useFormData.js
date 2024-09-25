
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, updateFormData } from '../slice/formSlice';

const useFormData = () => {
  const dispatch = useDispatch();
  const { formData, isSubmitting, error, successMessage } = useSelector(
    (state) => state.form
  );

  const handleChange = (field, value) => {
    dispatch(updateFormData({ field, value }));
  };

  const clearForm = () => {
    dispatch(resetForm());
  };

  return {
    formData,
    isSubmitting,
    error,
    successMessage,
    handleChange,
    clearForm,
  };
};

export default useFormData;
