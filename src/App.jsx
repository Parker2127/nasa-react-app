import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const [showModal, setShowModal] = useState(false)

  // Setting the new state of showModal using the handleDisplayModal, false to true
  function handleToggleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
    <Main />
    { showModal && (
      
      <SideBar handleToggleModal = {handleToggleModal} />)} {/* Passing props, these are the attributes to the component, received by the sidebar component*/}

    <Footer handleToggleModal={handleToggleModal}/> {/* Passing props, these are the attributes to the component, received by the footer component*/}
    </> 
  )
}

export default App
