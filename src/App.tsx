
import './App.css';
import Header from './components/Header';
import Parent from './components/Parent';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './Utils/constants';
import RoutesWrapper from './Router';
const Home = lazy(() => import('./Pages/Home'));
const Services = lazy(() => import('./Pages/Services'));
const Products = lazy(() => import('./Pages/Products'));
const NotFound = lazy(() => import('./components/NotFound'));
const About = lazy(() => import('./Pages/About'))


function App() {
  return (
    // <div className='main'>
    //   <Parent/>
    // </div>
    // <Router>
    //   <Header/>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Routes>
    //       <Route path={ROUTES.HOME} element={<Home />} />
    //       <Route path={ROUTES.SERVICES} element={<Services />} />
    //       <Route path={ROUTES.PRODUCTS} element={<Products />} />
    //       <Route path={ROUTES.ABOUT} element={<About />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </Suspense>
    // </Router>
    <RoutesWrapper />
  );
}

export default App;
