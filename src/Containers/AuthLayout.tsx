import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login';
import CustomButton from '../components/CustomButton';
import { ROUTES } from '../Utils/constants';
interface Props {
  page: string | undefined;
}

export default function AuthLayout({ page }: Props): JSX.Element {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  const navigate = useNavigate();


  return (
    <>
      <div className="authContainer">
        <div className="authBody">
         <h3>Login</h3>
         <br />
          <div className="componentContainer">{<Login />}</div>
        </div>
      </div>
     
    </>
  );
}
