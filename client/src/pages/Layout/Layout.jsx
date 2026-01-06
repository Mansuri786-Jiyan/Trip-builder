import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AppRoutes from '../../routes/routes'


function Layout() {
  return <>
    <Navbar /> 
    <AppRoutes />
    <Footer />
  </>
}

export default Layout