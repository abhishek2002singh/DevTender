import axios from "axios"
import { BASE_URL } from "../utils/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addRequest } from "../utils/requstSlice"
import { useEffect } from "react"
import CardRequest from "./CardRequest"


const Request = () => {
  const dispatch = useDispatch()
  const selector = useSelector((store)=> store.request)

  const fetchRequest = async()=>{
     try{
      const res = await axios.get(BASE_URL+"/user/requests/received" , {
          withCredentials:true,
      })
      dispatch(addRequest(res.data.data))
      console.log(selector)
      

     }catch(err){
      console.error(err)
     }
  }

  useEffect(()=>{
    fetchRequest()
  } ,[])

  if(!selector) return
  if(selector.length===0){
    return <h1>
      No request found
    </h1>
  }

  return selector && (
    <div className=" bg-base-100 flex flex-col items-center gap-5 my-5">
          {selector.map((user, index) => (
        <CardRequest key={index} user={user} />
      ))}
    </div>
     
  )
}

export default Request