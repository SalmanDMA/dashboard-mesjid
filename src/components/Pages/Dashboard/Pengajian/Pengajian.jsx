import Navbar from '../../../Global/Navbar';
import Sidebar from '../../../Global/Sidebar';
import { ToastContainer } from 'react-toastify';
import PengajianTable from './PengajianTable';

const Pengajian = () => {
 return (
  <div className='drawer lg:drawer-open '>
   <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
   <div className='drawer-content flex flex-col'>
    {/* Navbar */}
    <Navbar title='Schedule Event' breadcrumb='schedule-event' type='event' />
    {/* Page content here */}
    <div className='sm:px-14 pt-36 w-full min-h-screen bg-[#dddddd]'>
     <PengajianTable />
    </div>
   </div>
   <Sidebar />
   <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  </div>
 );
};

export default Pengajian;
