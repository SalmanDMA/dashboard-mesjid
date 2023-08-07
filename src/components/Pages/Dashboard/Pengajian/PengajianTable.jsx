import { useEffect, useState } from 'react';
import { BiEdit, BiPlus, BiSearch, BiTrash } from 'react-icons/bi';
import 'react-loading-skeleton/dist/skeleton.css';
import Pagination from '../../../Global/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deletePengajian, fetchPengajians } from '../../../../store/slices/pengajianSlices';
import { Link, useNavigate } from 'react-router-dom';
import { linkPengajianAdd, linkPengajianEdit } from '../../../../helper/linkData';
import { failToastPengajian, successToastPengajian } from '../../../../store/action/actionToast';
import TableItemSkleton from '../../../Global/TableItemSkleton';

const PengajianTable = () => {
 const dispatch = useDispatch();
 const pengajians = useSelector((state) => state.pengajians);
 const pengajiansArray = pengajians.ids.map((id) => pengajians.entities[id]);
 const loading = pengajians.loading;
 const error = pengajians.error;
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5;
 const navigate = useNavigate();

 const lastIndex = currentPage * itemsPerPage;
 const firstIndex = lastIndex - itemsPerPage;
 const [searchTerm, setSearchTerm] = useState('');
 const [pengajianIdToDelete, setPengajianIdToDelete] = useState(null);
 const [showConfirmation, setShowConfirmation] = useState(false);

 useEffect(() => {
  dispatch(fetchPengajians());
 }, [dispatch]);

 const filterData = (searchTerm) => {
  return pengajiansArray.filter((data) => data.name.toLowerCase().includes(searchTerm.toLowerCase()));
 };

 const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  setCurrentPage(1);
 };

 const filteredData = filterData(searchTerm);
 const currentItems = filteredData.slice(firstIndex, lastIndex);

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 };

 const totalPages = Math.ceil(filteredData.length / itemsPerPage);

 const handleAddPengajian = () => {
  navigate(linkPengajianAdd);
 };

 // Render skeleton jika data sedang dimuat
 if (loading) {
  return <TableItemSkleton filteredData={currentItems} handleSearch={handleSearch} type={'pengajian'} />;
 }

 if (error) {
  return (
   <div className='text-center'>
    <p className='text-red-500 text-heading-5 mt-10'>Oops, something went wrong. Please try again later.</p>
   </div>
  );
 }

 const handleShowConfirmation = (pengajianId) => {
  setPengajianIdToDelete(pengajianId);
  setShowConfirmation(true);
 };

 const handleHideConfirmation = () => {
  setPengajianIdToDelete(null);
  setShowConfirmation(false);
 };

 const handleDeletePengajian = async (pengajianId) => {
  try {
   await dispatch(deletePengajian(pengajianId));
   dispatch(successToastPengajian('Pengajian deleted successfully'));
  } catch (error) {
   dispatch(failToastPengajian('Failed to delete pengajian'));
  }
 };

 return (
  <div className='overflow-x-auto bg-white rounded-xl pb-8 mb-5 w-full max-w-[300px] mx-auto sm:mx-0 sm:max-w-lg md:max-w-[40rem] lg:max-w-[58rem] xl:max-w-[78rem]'>
   <h2 className='text-heading-4 text-primary font-bold ps-8 pt-5'>Schedule Pengajian</h2>
   <div className='flex flex-wrap items-center gap-5 py-6 px-8'>
    <button className='bg-primary_dark hover:bg-primary transition duration-300 text-white px-4 py-2 rounded' onClick={handleAddPengajian}>
     <BiPlus className='inline-block text-heading-4 mr-2' /> Add Pengajian
    </button>
    <div className='relative'>
     <input type='text' placeholder='Search by name here' className='input input-bordered w-full max-w-xs pr-8 placeholder:text-primary_dark focus:ring-primary focus:outline-primary text-primary' onChange={handleSearch} />
     <BiSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-primary_dark text-heading-4' />
    </div>
   </div>

   <table className='table border-collapse whitespace-nowrap'>
    {/* head */}
    <thead className='border-b-2 border-primary text-center'>
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
    </thead>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {!loading && !error && currentItems.length === 0 && (
     <tbody className='text-center'>
      <tr>
       <td colSpan={10} className='text-center'>
        <p className='text-red-500 text-heading-5 mt-10'>Oops, no pengajian found.</p>
       </td>
      </tr>
     </tbody>
    )}
    {!loading && !error && (
     <tbody className='text-center'>
      {currentItems.map((item, index) => (
       <tr key={item.id}>
        <td className='p-5'>{firstIndex + index + 1}</td>
        <td className='p-5'>{item.name}</td>
        <td className='p-5'>{item.description}</td>
        <td className='p-5'>{item.date}</td>
        <td className='p-5'>{item.location}</td>
        <td className='p-5'>{item.startTime}</td>
        <td className='p-5'>{item.endTime}</td>
        <td className='p-5'>{item.presenter}</td>
        <td className='p-5'>
         <img src={item.picture} alt={`Event ${item.id}`} className='h-8 w-8 mx-auto' />
        </td>
        <td className='p-5'>{item.status}</td>
        <td className='p-7 flex flex-wrap gap-2 justify-center items-center'>
         <Link to={linkPengajianEdit + item.id}>
          <BiEdit className='text-primary_dark cursor-pointer text-heading-4 hover:text-primary' />
         </Link>
         <BiTrash className='text-red-500 cursor-pointer text-heading-4 hover:text-red-700' onClick={() => handleShowConfirmation(item.id)} />
        </td>
       </tr>
      ))}
     </tbody>
    )}
   </table>

   {totalPages > 1 && <Pagination totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />}

   {showConfirmation && (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
     <div className='bg-white rounded-lg p-9'>
      <p className='text-lg font-semibold mb-4'>Are you sure you want to delete this pengajian?</p>
      <div className='flex justify-end'>
       <button
        className='bg-primary text-white px-4 py-2 rounded mr-2'
        onClick={() => {
         handleDeletePengajian(pengajianIdToDelete);
         handleHideConfirmation();
        }}
       >
        Delete
       </button>
       <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded' onClick={handleHideConfirmation}>
        Cancel
       </button>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default PengajianTable;
