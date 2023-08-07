import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const initialState = {
 user: null,
 loading: false,
 error: null,
 success: false,
};

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  loginStart: (state) => {
   state.loading = true;
   state.error = null;
  },
  loginSuccess: (state, action) => {
   state.loading = false;
   state.user = action.payload;
  },

  loginFailure: (state, action) => {
   state.loading = false;
   state.error = action.payload;
  },
  logout: (state) => {
   state.email = !state.email;
   state.user = null;
   state.loading = false;
   state.error = null;
  },
 },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

// Action untuk login user
export const loginUser = (email, password) => async (dispatch) => {
 dispatch(loginStart());
 try {
  // Panggil fungsi signInWithEmailAndPassword dari firebase untuk melakukan login
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  // Dapatkan token dari user
  const token = await userCredential.user.getIdToken();

  // Simpan token ke dalam localStorage
  localStorage.setItem('token', token);
  // Jika berhasil, panggil action loginSuccess untuk menyimpan data user di global state
  dispatch(
   loginSuccess({
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    // dan informasi lain yang relevan dari user
   })
  );
 } catch (error) {
  // Tangani error jika login gagal
  dispatch(loginFailure(error.message));
 }
};

// Action untuk logout user
export const logoutUser = () => async (dispatch) => {
 try {
  // Panggil fungsi signOut() dari firebase/auth untuk melakukan logout
  await signOut(auth);

  // Hapus token dari localStorage saat logout
  localStorage.removeItem('token');

  // Dispatch action logout untuk menghapus data user dari state Redux
  dispatch(logout());
 } catch (error) {
  console.error('Error during logout:', error);
 }
};

export default authSlice.reducer;
