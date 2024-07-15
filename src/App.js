import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import AdminLoginPage from './authPages/AdminLoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';

import Dashboard from './Dashboard/Dashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import AlertNotification from './shared/components/AlertNotification';


const router = createBrowserRouter(
  createRoutesFromElements(
    //<Route path='/'>
    <Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/adminlogin' element={<AdminLoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
      <Route path='*' element={<Navigate to="/login" />} />
    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <AlertNotification />
    </>
  );
}

export default App;
