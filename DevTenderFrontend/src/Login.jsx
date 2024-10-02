import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async ()=>{
    try{
        const res = await axios.post("http://localhost:3000/login" ,{
            emailId ,
            password,
        } ,{withCredentials:true})

    } catch(err){
        console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center" style={{ paddingTop: "30px" }}>
      <section className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 p-10 bg-base-300 shadow-lg rounded-lg">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm w-full">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-2xl font-bold">Log In</h2>
          </div>

          <label className="block text-sm font-medium mb-1">Enter Email ID</label>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
            type="text"
            placeholder="Enter Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />

          <label className="block text-sm font-medium mb-1">Enter Password</label>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-6"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
