import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY; // Importing the key 

  const [data, setData] = useState(null)

  const [showModal, setShowModal] = useState(false)   //HTMLDialogElement: showModal() method

  // Setting the new state of showModal using the handleDisplayModal, false to true
  function handleToggleModal(){
    setShowModal(!showModal)
  }

  // In React, to fetch data from the API, we use useEffect hook
  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod" + 
      `?api_key=${NASA_KEY}`  //API parameters in query strings (like ?api_key=YOUR_KEY) do not tolerate spaces around the equals sign (=)

      //Caching

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`        // Setting a unique key for the data stored for tha day
      if(localStorage.getItem(localKey)){              // Checking if the data is already there
        const apiData = JSON.parse(localStorage.getItem(localKey)); //retrieving it if yes
        setData(apiData)
        console.log("Fetched from cache today")
        return
      }

      localStorage.clear()       // If the data didn't exist in localStorage, clearing the localStorage call before the API call

      try{
        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API today")
      } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])  // The function gets executed whenever the conditions of dependency array are met

  /* If the dependency array is empty, it means we are asking the function to execute whenever the page loads  */ 

  return (
    <>
    { data ? (<Main data = {data}/>): (
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>   {/* Try to animate for 2 gears later*/}
      </div>
    )}
    { showModal && (
      
      <SideBar data = {data} handleToggleModal = {handleToggleModal} />)} {/* Passing props, these are the attributes to the component, received by the sidebar component*/}

    {data && (<Footer data = {data} handleToggleModal={handleToggleModal}/>) } {/* Passing props, these are the attributes to the component, received by the footer component*/}
    </> 
  )
}

export default App
