import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlices';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });
 const [success, successSet] = useState(false);
 const [error, setError] = useState(null);
 const dispatch = useDispatch();
 const loading = useSelector((state) => state.auth.loading);
 const globalError = useSelector((state) => state.auth.error);
 const navigate = useNavigate();

 // Fungsi untuk melakukan pengecekan email
 const checkEmailPattern = (email) => {
  const emailPattern = /^admin/ || /^admin\d+@/; // Ekspresi reguler untuk memeriksa email yang diawali "admin" dan diikuti oleh angka
  return emailPattern.test(email);
 };

 const onLoginSubmit = async (data) => {
  try {
   const userEmail = data.email;
   if (!checkEmailPattern(userEmail)) {
    setError('Email Tidak Valid'); // Tampilkan pesan kesalahan jika email tidak sesuai pola
   } else {
    setError(null);
    await dispatch(loginUser(data.email, data.password));
    await successSet(!success);
    await setTimeout(() => {
     navigate('/');
    }, 500);
   }
  } catch (error) {
   console.error('Error during login:', error);
  }
 };

 return (
  <section className='flex justify-center items-center min-h-screen w-full bg-[#dddddd]'>
   <div className='card bg-white text-primary-content relative shadow-xl mx-4 md:mx-0 md:w-80 lg:w-96'>
    {/* <div className=' absolute -top-[15%] left-1/2 -translate-x-1/2 rounded-full bg-primary'>
     <FaUserAlt className='text-white hidden lg:block lg:text-[8rem] lg:p-8' />
    </div> */}
    <div className='card-body'>
     <h2 className='card-title text-heading-2 mt-2 mb-5 justify-center text-primary'>Login</h2>
     <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className='form-control mb-4'>
       <label className='label text-black'>Email:</label>
       <input
        type='email'
        {...register('email', { required: 'Email harus diisi', pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Email tidak valid' } })}
        className='input input-bordered w-full mt-1 focus:border-primary focus:ring-2 focus:ring-primary placeholder:text-slate-500 text-black'
       />
       {errors.email && <span className='text-red-500 mt-1'>{errors.email.message}</span>}
      </div>
      <div className='form-control mb-4'>
       <label className='label text-black'>Password:</label>
       <input type='password' {...register('password', { required: 'Password harus diisi' })} className='input input-bordered w-full mt-1 focus:border-primary focus:ring-2 focus:ring-primary placeholder:text-slate-500 text-black' />
       {errors.password && <span className='text-red-500 mt-1'>{errors.password.message}</span>}
      </div>
      {globalError && <p className='text-red-500 mt-1'>{globalError}</p>}
      {error && <p className='text-red-500 mt-1'>{error}</p>}
      {success && (
       <div className='alert alert-success gap-0 lg:gap-4'>
        <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
        <span>Login Success, Redirect To Dashboard ...</span>
       </div>
      )}
      <div className='card-actions justify-center mt-5'>
       <button type='submit' className='btn bg-primary text-white hover:bg-primary_dark  disabled:bg-primary_dark w-full' disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
       </button>
      </div>
     </form>
    </div>
   </div>
  </section>
 );
};

export default Login;
