import React, {useState} from 'react';
import bg from '../assets/bg.png'
import logo from '../assets/logo.png';
import { Button, Flex } from 'antd';
import Login from '../components/LogIn';
import SignUp from '../components/Signup';

const Admin: React.FC = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div style={{height: '100vh',maxHeight: '100vh', overflow: 'hidden'}}>
      <div className='bg-img absolute' >
        <img src={bg} alt='background.png'/>
        <div className='flex container absolute' style={{top: '1rem', left: '2rem', width: '200px', height: 'auto' }}>
          <img src={logo} alt='logo.png'/>
        </div>
        <div className='absolute top-0.5 right-0.5'>
          <Flex gap="small" wrap="wrap">
            <Button type="text" onClick={() => setSignIn((signIn) => signIn = true)}>Sign In</Button>
            <Button type="link" onClick={() => setSignIn((signIn) => signIn = false)}>Sign Up</Button>
          </Flex>
        </div>
        <div className='absolute column-md-4 column-md-6 shadow-lg p-10 rounded-lg w-1/3'  style={{top:'25%', right: '10%'}}>
          {signIn ? <Login/> : <SignUp/>}
        </div>
      </div>
    </div>
  );
};

export default Admin;