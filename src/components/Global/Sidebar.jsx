import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdLibraryBooks } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';
import { BiSolidLogOut } from 'react-icons/bi';
import { linkEvent, linkEventAdd, linkHome, linkPengajian, linkSignOut } from '../../helper/linkData';
import { AiFillHome } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slices/authSlices';

const Sidebar = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleLogout = async () => {
  try {
   // Dispatch action logout untuk menghapus data user dari state Redux
   dispatch(logoutUser());
   // Redirect pengguna ke halaman login
   navigate(linkSignOut);
  } catch (error) {
   console.error('Error during logout:', error);
  }
 };
 const location = useLocation();
 return (
  <div className='drawer-side h-full shadow-xl z-20'>
   <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
   <div className='flex justify-center items-center h-[102px] bg-white border-b-2 border-primary'>
    <h1 className='text-heading-4 font-bold text-primary'>Masjid Asy Syahid</h1>
   </div>
   <ul className='pt-8 pb-4 px-6 w-70 h-full bg-white flex flex-col gap-6'>
    {/* Sidebar content here */}
    <Link to={linkHome} className={`flex items-center gap-3 rounded-xl ${location.pathname === linkHome ? 'shadow-xl' : ''}`}>
     <div className='bg-[#7895CB] p-2 my-2 ms-3 rounded-xl '>
      <AiFillHome className='text-white text-heading-4' />
     </div>
     <p className='text-heading-5 text-[#7895CB]'>Dashboard</p>
    </Link>
    <Link to={linkPengajian} className={`flex items-center gap-3 rounded-xl ${location.pathname === linkPengajian ? 'shadow-xl' : ''}`}>
     <div className='bg-[#7895CB] p-2 my-2 ms-3  rounded-xl'>
      <MdLibraryBooks className='text-white text-heading-4' />
     </div>
     <p className='text-heading-5 text-[#7895CB]'>Schedule Pengajian</p>
    </Link>
    <Link to={linkEvent} className={`flex items-center gap-3 rounded-xl ${(location.pathname === linkEvent || location.pathname === linkEventAdd) && 'shadow-xl'}`}>
     <div className='bg-[#7895CB] p-2 my-2 ms-3 rounded-xl'>
      <HiNewspaper className='text-white text-heading-4' />
     </div>
     <p className='text-heading-5 text-[#7895CB]'>Schedule Event</p>
    </Link>
    <h3 className='text-heading-5 text-[#7895CB]'>Account Page</h3>
    <div onClick={handleLogout} className={`flex items-center gap-3 rounded-xl cursor-pointer ${location.pathname === linkSignOut ? 'shadow-xl' : ''}`}>
     <div className='bg-[#7895CB] p-2 my-2 ms-3 rounded-xl'>
      <BiSolidLogOut className='text-white text-heading-4' />
     </div>
     <p className='text-heading-5 text-[#7895CB]'>Sign Out</p>
    </div>
   </ul>
  </div>
 );
};

export default Sidebar;
