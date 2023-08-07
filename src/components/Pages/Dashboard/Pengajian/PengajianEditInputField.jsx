import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { linkPengajian } from '../../../../helper/linkData';
import Navbar from '../../../Global/Navbar';
import Sidebar from '../../../Global/Sidebar';
import { failToastPengajian, successToastPengajian } from '../../../../store/action/actionToast';
import { updatePengajian } from '../../../../store/slices/pengajianSlices';

const PengajianEditInputField = () => {
 const { pengajianId } = useParams();
 const dispatch = useDispatch();
 const allEvents = useSelector((state) => state.pengajians);
 const pengajianToUpdate = allEvents.entities[pengajianId];
 const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
 } = useForm();

 const [isLoading, setIsLoading] = useState(false);
 const navigate = useNavigate();

 const onSubmit = async (data) => {
  setIsLoading(true);
  try {
   await dispatch(updatePengajian({ id: pengajianId, data }));
   setIsLoading(false);
   dispatch(successToastPengajian('Pengajian edit successfully'));
   reset();
   navigate(linkPengajian);
  } catch (error) {
   setIsLoading(false);
   dispatch(failToastPengajian('Failed to edit pengajian'));
   reset();
  }
 };

 return (
  <div className='drawer lg:drawer-open'>
   <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
   <div className='drawer-content flex flex-col'>
    {/* Navbar */}
    <Navbar title='Schedule Event' breadcrumb='schedule-event' type='event' />
    {/* Page content here */}
    <div className='sm:px-14 pt-36 pb-14 w-full h-full bg-[#dddddd]'>
     <div className='container p-6 mx-auto bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold'>Edit Pengajian</h2>
      <form className='mt-4 space-y-4' onSubmit={handleSubmit(onSubmit)}>
       <div className='flex flex-col'>
        <label className='text-lg'> Name:</label>
        <input type='text' defaultValue={pengajianToUpdate.name} className={`input input-bordered ${errors.name ? 'input-error' : ''}`} {...register('name', { required: 'Event Name is required' })} />
        {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
       </div>

       {/* Description */}
       <div className='flex flex-col'>
        <label className='text-lg'>Description:</label>
        <textarea defaultValue={pengajianToUpdate.description} className={`textarea textarea-bordered ${errors.description ? 'input-error' : ''}`} {...register('description', { required: 'Description is required' })}></textarea>
        {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
       </div>

       {/* Date */}
       <div className='flex flex-col'>
        <label className='text-lg'>Date:</label>
        <input type='date' defaultValue={pengajianToUpdate.date} className={`input input-bordered ${errors.date ? 'input-error' : ''}`} {...register('date', { required: 'Date is required' })} />
        {errors.date && <span className='text-red-600'>{errors.date.message}</span>}
       </div>

       {/* Location */}
       <div className='flex flex-col'>
        <label className='text-lg'>Location:</label>
        <input type='text' defaultValue={pengajianToUpdate.location} className={`input input-bordered ${errors.location ? 'input-error' : ''}`} {...register('location', { required: 'Location is required' })} />
        {errors.location && <span className='text-red-600'>{errors.location.message}</span>}
       </div>

       {/* StartTime */}
       <div className='flex flex-col'>
        <label className='text-lg'>Start Time:</label>
        <input type='time' defaultValue={pengajianToUpdate.startTime} className={`input input-bordered ${errors.startTime ? 'input-error' : ''}`} {...register('startTime', { required: 'Start Time is required' })} />
        {errors.startTime && <span className='text-red-600'>{errors.startTime.message}</span>}
       </div>

       {/* EndTime */}
       <div className='flex flex-col'>
        <label className='text-lg'>End Time:</label>
        <input type='time' defaultValue={pengajianToUpdate.endTime} className={`input input-bordered ${errors.endTime ? 'input-error' : ''}`} {...register('endTime', { required: 'End Time is required' })} />
        {errors.endTime && <span className='text-red-600'>{errors.endTime.message}</span>}
       </div>

       {/* Presenter */}
       <div className='flex flex-col'>
        <label className='text-lg'>Presenter:</label>
        <input type='text' defaultValue={pengajianToUpdate.presenter} className={`input input-bordered ${errors.presenter ? 'input-error' : ''}`} {...register('presenter', { required: 'Presenter is required' })} />
        {errors.presenter && <span className='text-red-600'>{errors.presenter.message}</span>}
       </div>

       {/* Picture */}
       <div className='flex flex-col'>
        <label className='text-lg'>Picture (URL):</label>
        <input
         type='text'
         defaultValue={pengajianToUpdate.picture}
         className={`input input-bordered ${errors.picture ? 'input-error' : ''}`}
         {...register('picture', {
          required: 'Picture is required',
          pattern: {
           value: /^(https?|HTTPS?)+\S+\.(jpg|jpeg|png)$/,
           message: 'Invalid picture URL. Please use http://www or https://www format and ends with .jpg, .jpeg, or .png',
          },
         })}
        />
        {errors.picture && <span className='text-red-600'>{errors.picture.message}</span>}
       </div>

       {/* Status */}
       <div className='flex flex-col'>
        <label className='text-lg'>Status:</label>
        <select defaultValue={pengajianToUpdate.status} className={`select select-bordered ${errors.status ? 'input-error' : ''}`} {...register('status', { required: 'Status is required' })}>
         <option value=''>Select Status</option>
         <option value='upcoming'>Upcoming</option>
         <option value='ongoing'>Ongoing</option>
         <option value='completed'>Completed</option>
        </select>
        {errors.status && <span className='text-red-600'>{errors.status.message}</span>}
       </div>

       <button type='submit' className='btn bg-primary_dark hover:bg-primary text-heading-5 px-4 py-2 text-white transition-all duration-300 ease-in-out' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Update Pengajian'}
       </button>
      </form>
     </div>
    </div>
   </div>
   <Sidebar />
  </div>
 );
};

export default PengajianEditInputField;
