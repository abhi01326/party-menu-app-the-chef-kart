import data from "./constants/data"
import {useState} from 'react'
import Header from './components/Header/Header'
import { MenuContext } from "./context/MenuContext"
import Dishes from './components/Dishes'




function App() {
  const [menuState, setMenuState] = useState({
    dishes : data,
    search : "",
    category : "",
    type: ""
  })

  return (
    <>
      <MenuContext.Provider value={{menuState,setMenuState}} >
        <Header />
        <Dishes />
      </MenuContext.Provider>
    </>
  )
}

export default App
