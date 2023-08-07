import Sidebar from '../../../Global/Sidebar';
import Navbar from '../../../Global/Navbar';
import DashboardCard from './DashboardCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
 const navigate = useNavigate();
 // !!mengubah suatu data menjadi truthy atau falsy
 const isLoggedIn = useSelector((state) => !!state.auth.user);

 useEffect(() => {
  if (!isLoggedIn) {
   navigate('/login');
  }
 }, []);

 return (
  <div className='drawer lg:drawer-open '>
   <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
   <div className='drawer-content flex flex-col'>
    {/* Navbar */}
    <Navbar title='Dashboard' breadcrumb='dashboard' type='dashboard' />
    {/* Page content here */}
    <div className='sm:px-14 pt-36 w-full h-full min-h-screen bg-[#dddddd]'>
     <DashboardCard />
    </div>
   </div>
   <Sidebar />
  </div>
 );
};

export default Dashboard;
