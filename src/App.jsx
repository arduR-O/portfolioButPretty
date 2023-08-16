import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Dotgroup from "./components/Dotgroup";

function App() {
  //we want to keep track of the current section of page so that we can render that onto the navbar and dotgroup, so we declare states for the same, default is home
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
    {/* we are going to use relative positioning to positioning all elements*/}
    {/* we pass currentPage and setCurrentPage to both navbar and dotgroup because depending on that they have certain graphics, also both components involve interactions that update the current page */}
    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <DotGroup currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App
