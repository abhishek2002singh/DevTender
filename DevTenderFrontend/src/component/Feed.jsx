import axios from "axios"
import { BASE_URL } from '../utils/Constant'
import { useDispatch, useSelector } from "react-redux"
import{addFeed} from '../utils/feedSlice'
import { useEffect } from "react"
import UserCard from "./UserCard"


const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store)=>store.feed)
  console.log(feed)

  const getfeed = async()=>{
    if(feed)return
    try{
      
         const res = await axios.get(BASE_URL+"/feed",{withCredentials:true});
         dispatch(addFeed(res.data))
    }catch(err){
      console.error(err)
    }
  
  }

  useEffect(()=>{
        getfeed()
  } ,[])

  return feed && (
    <div>
      <UserCard user={feed[7]}/>
    </div>
  )
}

export default Feed