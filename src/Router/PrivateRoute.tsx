import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import PageLayout from '../Containers/PageLayout';
import { ROUTES } from '../Utils/constants';
import { routeTypes } from '../Utils/types';

interface Props {
  children: React.ReactNode;
  route: routeTypes;
}

const PrivateRoute: React.FC<any> = ({ children, route }: Props | any) => {
  const location = useLocation();
  const user_access_token = localStorage.getItem("user_access_token");
  return(
    <React.Fragment>
          {/* <MainContainer children={component} /> */}
        
        
        {user_access_token !== null  ? (
          <PageLayout children={children} />
        ) : (
          <Navigate to={ROUTES.LOGIN} />
        )}
      </React.Fragment>
  )
};

export default PrivateRoute;
