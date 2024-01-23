import React from 'react';

const SignUp: React.FC = () => {
  return (
    <>
       <form className="w-100%">
        <h1 className='m-5 ml-0'>Sign Up Here</h1>
        <div className="mb-5">
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@dms.lk" required></input>
        </div>
        <div className="mb-5">
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required placeholder="password"></input>
        </div>
        <div className="mb-5">
          <input type="date" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required placeholder="date of birth"></input>
        </div>
        <button type="submit" className="text-white bg-[#f05438] hover:bg-[#8d5332] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </>
  );
};

export default SignUp;