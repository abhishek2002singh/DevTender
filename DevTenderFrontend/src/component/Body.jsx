import {  Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import axios from "axios"
import {BASE_URL}  from '../utils/Constant'
import { useDispatch, useSelector } from "react-redux"
import {addUser} from '../utils/userSlice'
import { useEffect } from "react"
import Footer from "./Footer"


const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const selector = useSelector((store)=>store.user)

  const fetchUser = async()=>{
    if(selector) return
    try{
      const res =await axios.get(BASE_URL+"/profile/view" ,{
        withCredentials:true,
      })
      dispatch(addUser(res.data))

    }catch(err){
      if(err.status === 401){
        navigate("/login")
      }
      
      console.error(err)
    }
    
  }

  useEffect(()=>{
    
       fetchUser()
    
   
  } ,[])

  return (
    // <div>
    //     <NavBar />
    //     <Outlet/>
        
    // </div>

    <div className="flex flex-col min-h-screen">
    <NavBar />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer /> {/* Add Footer here */}
  </div>
  )
}

export default Body