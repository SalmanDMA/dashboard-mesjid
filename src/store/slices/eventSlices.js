// eventSlice.js

import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../config/firebase';

const eventsAdapter = createEntityAdapter();

// Fungsi async untuk memanggil API Firebase untuk mendapatkan semua data event (Read)
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
 const eventsRef = collection(db, 'events');
 const querySnapshot = await getDocs(eventsRef);

 const eventsData = [];
 querySnapshot.forEach((doc) => {
  eventsData.push({ id: doc.id, ...doc.data() });
 });

 return eventsData;
});

// Fungsi async untuk memanggil API Firebase untuk menambahkan data event (Create)
export const addEvent = createAsyncThunk('events/addEvent', async (eventData) => {
 const eventsRef = collection(db, 'events');
 const docRef = await addDoc(eventsRef, eventData);

 return { id: docRef.id, ...eventData };
});

// Fungsi async untuk memanggil API Firebase untuk mengupdate data event (Update)
export const updateEvent = createAsyncThunk('events/updateEvent', async ({ id, data }) => {
 const eventRef = doc(db, 'events', id);
 await updateDoc(eventRef, data);
 return { id, data };
});

// Fungsi async untuk memanggil API Firebase untuk menghapus data event (Delete)
export const deleteEvent = createAsyncThunk('events/deleteEvent', async (eventId) => {
 const eventRef = doc(db, 'events', eventId);
 await deleteDoc(eventRef);
 return eventId;
});

const eventSlice = createSlice({
 name: 'events',
 initialState: eventsAdapter.getInitialState({ loading: false, error: null }),
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchEvents.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchEvents.fulfilled, (state, action) => {
    state.loading = false;
    eventsAdapter.setAll(state, action.payload);
   })
   .addCase(fetchEvents.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
   })
   .addCase(addEvent.fulfilled, eventsAdapter.addOne)
   .addCase(updateEvent.fulfilled, eventsAdapter.updateOne)
   .addCase(deleteEvent.fulfilled, eventsAdapter.removeOne);
 },
});

export default eventSlice.reducer;
