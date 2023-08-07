import { BiPlus, BiSearch } from 'react-icons/bi';
import Skeleton from 'react-loading-skeleton';
const skeletonStyle = {
 backgroundColor: '#dddddd',
 borderRadius: '0.5rem',
};
const TableItemSkleton = ({ filteredData, handleSearch, type }) => {
 return (
  <div className='overflow-x-auto bg-white rounded-xl pb-8 mb-5 w-full max-w-[300px] mx-auto sm:mx-0 sm:max-w-lg md:max-w-[40rem] lg:max-w-[58rem] xl:max-w-[78rem]'>
   <h2 className='text-heading-4 text-primary font-bold ps-8 pt-5'>Schedule Event</h2>
   <div className='flex flex-wrap items-center gap-5 py-6 px-8'>
    <button className='bg-primary_dark hover:bg-primary transition duration-300 text-white px-4 py-2 rounded'>
     <BiPlus className='inline-block text-heading-4 mr-2' /> Add Event
    </button>
    <div className='relative'>
     <input type='text' placeholder='Search by name here' className='input input-bordered w-full max-w-xs pr-8 placeholder:text-primary_dark focus:ring-primary focus:outline-primary text-primary' onChange={handleSearch} />
     <BiSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-primary_dark text-heading-4' />
    </div>
   </div>

   <table className='table border-collapse whitespace-nowrap'>
    <thead className='border-b-2 border-primary text-center'>
     {type === 'event' && (
      <tr>
       <th className='text-primary text-heading-4 p-5'>No</th>
       <th className='text-primary text-heading-4 p-5'>Event Name</th>
       <th className='text-primary text-heading-4 p-5'>Description</th>
       <th className='text-primary text-heading-4 p-5'>Date</th>
       <th className='text-primary text-heading-4 p-5'>Location</th>
       <th className='text-primary text-heading-4 p-5'>Start Time</th>
       <th className='text-primary text-heading-4 p-5'>End Time</th>
       <th className='text-primary text-heading-4 p-5'>Organizer</th>
       <th className='text-primary text-heading-4 p-5'>Contact Organizer</th>
       <th className='text-primary text-heading-4 p-5'>Presenter</th>
       <th className='text-primary text-heading-4 p-5'>Picture</th>
       <th className='text-primary text-heading-4 p-5'>Status</th>
       <th className='text-primary text-heading-4 p-5'>Action</th>
      </tr>
     )}
     {type === 'pengajian' && (
      <tr>
       <th className='text-primary text-heading-4 p-5'>No</th>
       <th className='text-primary text-heading-4 p-5'>Name</th>
       <th className='text-primary text-heading-4 p-5'>Description</th>
       <th className='text-primary text-heading-4 p-5'>Date</th>
       <th className='text-primary text-heading-4 p-5'>Location</th>
       <th className='text-primary text-heading-4 p-5'>Start Time</th>
       <th className='text-primary text-heading-4 p-5'>End Time</th>
       <th className='text-primary text-heading-4 p-5'>Presenter</th>
       <th className='text-primary text-heading-4 p-5'>Picture</th>
       <th className='text-primary text-heading-4 p-5'>Status</th>
       <th className='text-primary text-heading-4 p-5'>Action</th>
      </tr>
     )}
    </thead>
    <tbody className='text-center'>
     {/* Placeholder for loading */}
     {Array.from({ length: filteredData.length }).map((_, index) => (
      <tr key={index}>
       <td className='p-5'>
        <Skeleton width={40} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={120} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={200} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={100} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={100} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={80} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={80} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={120} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={160} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={120} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={40} height={24} style={skeletonStyle} />
       </td>
       <td className='p-5'>
        <Skeleton width={80} height={24} style={skeletonStyle} />
       </td>
       <td className='p-7 flex flex-wrap gap-2 justify-center items-center'>
        <Skeleton width={24} height={24} style={skeletonStyle} />
        <Skeleton width={24} height={24} style={skeletonStyle} />
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default TableItemSkleton;
