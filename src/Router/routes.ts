import { lazy } from "react";
import { ROUTES } from "../Utils/constants";
import { routeTypes } from "../Utils/types";
const Home = lazy(() => import('../Pages/Home'));
const Services = lazy(() => import('../Pages/Services'));
const Products = lazy(() => import('../Pages/Products'));
const NotFound = lazy(() => import('../components/NotFound'));
const About = lazy(() => import('../Pages/About'));
const AuthLayout = lazy(() => import('../Containers/AuthLayout'))

export const pageRoutes: routeTypes[] = [
    {
      id: 1,
      name: 'Home',
      path: ROUTES.HOME,
      Component: Home,
      isPrivate: true,
    },
    {
        id: 2,
        name: 'Services',
        path: ROUTES.SERVICES,
        Component: Services,
        isPrivate: true,
      },
      {
        id: 3,
        name: 'Products',
        path: ROUTES.PRODUCTS,
        Component: Products,
        isPrivate: true,
      },
      {
        id: 4,
        name: 'About',
        path: ROUTES.ABOUT,
        Component: About,
        isPrivate: true,
      },
      {
        id: 5,
        name: 'Login',
        path: ROUTES.LOGIN,
        Component: AuthLayout,
        isPrivate: false,
      }
  ];