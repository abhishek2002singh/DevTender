import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/Constant"
import { removeUser } from "../utils/userSlice"

const NavBar = () => {

  const user= useSelector((store)=>store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   
  const handlelogout = async()=>{
    try{
          await axios.post(BASE_URL+"/logout" ,{}, {withCredentials:true})
          dispatch(removeUser())
          return navigate("/")


    }catch(err){
      console.error(err)
    }
    
  }

  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
      <Link to='/app' className="btn btn-ghost text-3xl">DevTinder</Link>
      
    </div>
    <div className="flex-none gap-2">
    
      {user &&<div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoUrl} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to='/app/profile' className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><Link to="/app/connection">see all connection</Link></li>
          <li><Link to="/app/request">connection request</Link></li>
          <li><a onClick={handlelogout}>Logout</a></li>
        </ul>
      </div>}
    </div>
  </div>
  )
}

export default NavBar