import { useSelector } from 'react-redux';

const DashboardCard = () => {
 const getAllEvents = useSelector((state) => state.events);
 const lenghtAllEvents = getAllEvents.ids.length;
 const getAllPengajian = useSelector((state) => state.pengajians);
 const lenghtAllPengajian = getAllPengajian.ids.length;
 return (
  <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-24 mb-9'>
   <div className='bg-white w-full max-w-[300px] mx-auto sm:mx-0 sm:max-w-none py-6 md:px-10 md:pt-6 md:pb-12 rounded-xl shadow-lg flex flex-col justify-center items-center text-center'>
    <p className='text-heading-3 sm:text-[50px] md:text-[70px] lg:text-[96px] text-primary font-bold '>{lenghtAllEvents}</p>
    <p className='text-heading-4 text-primary_dark font-bold'>Schedule Event</p>
   </div>
   <div className='bg-white w-full max-w-[300px] mx-auto sm:mx-0 sm:max-w-none py-6 md:px-10 md:pt-6 md:pb-12 rounded-xl shadow-lg flex flex-col justify-center items-center text-center'>
    <p className='text-heading-3 sm:text-[50px] md:text-[70px] lg:text-[96px] text-primary font-bold '>{lenghtAllPengajian}</p>
    <p className='text-heading-4 text-primary_dark font-bold'>Schedule Pengajian</p>
   </div>
  </div>
 );
};

export default DashboardCard;
