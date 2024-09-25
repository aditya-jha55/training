import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Home(){
    const formData = useSelector((state: RootState) => state.form.formData);
    return (
        <div className="formdata">
            <h2>Form Data</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
    )
}