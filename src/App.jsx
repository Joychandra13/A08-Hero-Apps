import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
