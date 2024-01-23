import SideMenu from '../../components/Menu';
import Header from '../../components/Header';
import DashboardContext from './DashboardContext';
import ClientReg from '../Clients/ClientReg';
import AllClient  from '../Clients/AllClient'
import {Routes , Route} from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className='min-h-screen bg-orange-100' >
        <Header />
        <div className='flex'>
          <SideMenu />
          <Routes>
            <Route path='/*' element={<DashboardContext />} />
            <Route path='dashboard/clients' element={<AllClient />} />
            <Route path='dashboard/clientsReg' element={<ClientReg />} />
          </Routes>          
        </div>
      </div>
    </>
  )
}
