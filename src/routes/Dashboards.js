import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from "../components/Navbar"
import Sidebar from '../components/Sidebar';
import Footer from '../component/Footer';
// import Routee from '../Routes';
import Apps from '../Apps';





const Dashboards = ({children}) => {

  return (
    // <Router >
    <>
    <Navbar />
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <Sidebar />
        {children}
      </div>
    <Footer />
    </>

    // </Router>
  )
}

export default Dashboards
