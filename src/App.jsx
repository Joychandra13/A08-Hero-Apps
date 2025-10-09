import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ToastContainer />
    </>
  )
}

export default App
