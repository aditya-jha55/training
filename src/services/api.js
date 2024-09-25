import { useNavigate } from "react-router-dom";

export const submitFormApi = async (formData) => {
    // const navigate = useNavigate()
    const response = await fetch('https://api.example.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit form');
    }
  
    return await response.json();
  };
  