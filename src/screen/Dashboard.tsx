import React from 'react';
import Menu from '../components/Menu'

const Dashboard:React.FC = () => {
  return (
    <div style={{maxHeight: '100vh', overflowY: 'hidden'}}>
      <Menu />  
    </div>
  )
}

export default Dashboard;
