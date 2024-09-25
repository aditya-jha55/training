import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { submitFormLocally, updateFormData } from "../../slice/formSlice";
import { Routes, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Utils/constants";

export default function Login(){
 
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form.formData);
    const successMessage = useSelector((state: RootState) => state.form.successMessage);
    
    const handleChange = (field: any, value: any) => {
      dispatch(updateFormData({ field, value }));
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      // Dispatch action to store data locally without API call
      dispatch(submitFormLocally());
      navigate(ROUTES.HOME);
      localStorage.setItem('user_access_token', 'true')
    };

    return(
       <div className="login">
         <form>
          <label htmlFor="name">Name</label>
        <input 
        type="text"
        id="name"
        name="name" 
        placeholder="Enter name" 
        value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
        type="text"
        id="email"
        name="email" 
        placeholder="Enter email" 
        value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
        type="text"
        id="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
        type="text"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Enter confirm password"
        value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          required
        />
        <div>
       
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>

{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form> 
       </div>
    )
}