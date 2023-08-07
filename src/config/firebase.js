import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: 'AIzaSyC3tUM1S36mrfKGYi9KELNoEx8hDlffZ1M',
 authDomain: 'mesjid-asy-syahid.firebaseapp.com',
 projectId: 'mesjid-asy-syahid',
 storageBucket: 'mesjid-asy-syahid.appspot.com',
 messagingSenderId: '972346941593',
 appId: '1:972346941593:web:f47502774fb6894cc6d808',
 measurementId: 'G-KP6KFJ0LLW',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export default db;
