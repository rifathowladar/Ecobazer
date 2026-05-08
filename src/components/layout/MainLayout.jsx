import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FooterTop from '../FooterTop'

const MainLayout = () => {
  return (
    <>
        <TopBar/>
        <SearchBar/>
        <Navbar/>
        <Outlet/>
        <FooterTop/>
        <Footer/>
    </>
  )
}

export default MainLayout