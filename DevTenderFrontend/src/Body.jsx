import { Outlet } from "react-router-dom"
import NavBar from "./navBar"


const Body = () => {
  return (
    <div>
        <NavBar />
        <Outlet/>
        
    </div>
  )
}

export default Body