import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../config/firebase';

const pengajiansAdapter = createEntityAdapter();

export const fetchPengajians = createAsyncThunk('pengajians/fetchPengajians', async () => {
 const pengajiansRef = collection(db, 'pengajians');
 const querySnapshot = await getDocs(pengajiansRef);

 const pengajiansData = [];
 querySnapshot.forEach((doc) => {
  pengajiansData.push({ id: doc.id, ...doc.data() });
 });

 return pengajiansData;
});

export const addPengajian = createAsyncThunk('pengajians/addPengajian', async (pengajianData) => {
 const pengajiansRef = collection(db, 'pengajians');
 const docRef = await addDoc(pengajiansRef, pengajianData);

 return { id: docRef.id, ...pengajianData };
});

export const updatePengajian = createAsyncThunk('pengajians/updatePengajian', async ({ id, data }) => {
 const pengajianRef = doc(db, 'pengajians', id);
 await updateDoc(pengajianRef, data);
 return { id, data };
});

export const deletePengajian = createAsyncThunk('pengajians/deletePengajian', async (pengajianId) => {
 const pengajianRef = doc(db, 'pengajians', pengajianId);
 await deleteDoc(pengajianRef);
 return pengajianId;
});

const pengajianSlice = createSlice({
 name: 'pengajians',
 initialState: pengajiansAdapter.getInitialState({ loading: false, error: null }),
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchPengajians.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchPengajians.fulfilled, (state, action) => {
    state.loading = false;
    pengajiansAdapter.setAll(state, action.payload);
   })
   .addCase(fetchPengajians.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
   })
   .addCase(addPengajian.fulfilled, pengajiansAdapter.addOne)
   .addCase(updatePengajian.fulfilled, pengajiansAdapter.updateOne)
   .addCase(deletePengajian.fulfilled, pengajiansAdapter.removeOne);
 },
});

export default pengajianSlice.reducer;
