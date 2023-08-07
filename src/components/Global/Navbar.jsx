import { AiFillHome } from 'react-icons/ai';
import { MdLibraryBooks } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';

const Navbar = ({ title, breadcrumb, type }) => {
 let icon;

 if (type === 'dashboard') {
  icon = <AiFillHome className='text-heading-4 text-primary_dark' />;
 } else if (type === 'pengajian') {
  icon = <MdLibraryBooks className='text-heading-4 text-primary_dark' />;
 } else if (type === 'event') {
  icon = <HiNewspaper className='text-heading-4 text-primary_dark' />;
 } else {
  icon = null; // Jika type tidak sesuai, tidak menampilkan ikon apa pun.
 }

 return (
  <nav className='w-full navbar bg-white border-b-2 border-primary py-5 px-8 fixed z-10'>
   <div className='flex-none lg:hidden'>
    <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
     </svg>
    </label>
   </div>
   <div className='flex-1 px-2 mx-2'>
    <div>
     <div className='flex items-center gap-2'>
      {icon}
      <div className='text-primary_dark flex gap-1'>
       <span>/</span>
       <span>{breadcrumb}</span>
      </div>
     </div>
     <div className='text-heading-4 text-primary font-bold'>{title}</div>
    </div>
   </div>
   <div className='pe-64 flex-none hidden lg:flex gap-2'>
    <h1 className='text-heading-4 text-primary font-bold'>Hendra Setiawan</h1>
    <img src='https://via.placeholder.com/150' alt='avatar' className='w-12 h-12 rounded-full' />
   </div>
  </nav>
 );
};

export default Navbar;
