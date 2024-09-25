import { Suspense, useEffect } from 'react';
import {
  Route,
  // useNavigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { pageRoutes } from './routes';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header';
import { routeTypes } from '../Utils/types';
import PageNotFound from '../components/NotFound';
import Loading from '../components/Loading';

function RoutesWrapper() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
            <Outlet />
        }
      >
        {pageRoutes.map((route: routeTypes) => {
          if (route.isPrivate) {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <PrivateRoute route={route}>
                    <div className="main">
                      <Header />
                      <div className="mainContainer" id="main_container">
                        <route.Component {...route.pageProp} />
                      </div>
                    </div>
                  </PrivateRoute>
                }
              />
            );
          }
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<route.Component {...route.pageProp} />}
            />
          );
        })}
      
        <Route
          path="*"
          element={
            <div className="main">
              <Header />
              <PageNotFound/>
            </div>
          }
        />
      </Route>,
    ),
  );

  return (
    <Suspense
      fallback={<Loading/>}
    >
      <RouterProvider router={router} />
    </Suspense>
  );
  {
    /* </Routes>
    </Suspense> */
  }
  // )
}

export default RoutesWrapper;

