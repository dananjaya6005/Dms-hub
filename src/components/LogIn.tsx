import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = () => {
    return(
      email == "admin@dms.lk" && password == 'admin' && navigate('/dashboard')   
    );
  }
  return (
    <>
      <form className="w-100%">
        <h1 className='m-5 ml-0'>Sign In</h1>
        <div className="mb-5">
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="username@dms.lk" required onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="mb-5">
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type="submit" className="text-white bg-[#f05438] hover:bg-[#8d5332] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={(e) => {e.preventDefault(); login()}}>Submit</button>
      </form>
    </>
  );
};

export default Login;