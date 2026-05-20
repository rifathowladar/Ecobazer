import React from 'react'
import { Routes, Route } from "react-router";
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';
import Hw from './pages/Hw';
import Home from './pages/home/Home';


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hw" element={<Hw />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


