import Login from './components/Pages/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { linkEvent, linkEventAdd, linkEventEdit, linkHome, linkLogin, linkPengajian, linkPengajianAdd, linkPengajianEdit } from './helper/linkData';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Home/Dashboard';
import Event from './components/Pages/Dashboard/Event/Event';
import EventAddInputFields from './components/Pages/Dashboard/Event/EventAddInputFields';
import EventEditInputField from './components/Pages/Dashboard/Event/EventEditInputField';
import Pengajian from './components/Pages/Dashboard/Pengajian/Pengajian';
import PengajianAddInputFields from './components/Pages/Dashboard/Pengajian/PengajianAddInputFields';
import PengajianEditInputField from './components/Pages/Dashboard/Pengajian/PengajianEditInputField';

const router = createBrowserRouter([
 {
  path: linkHome,
  element: <Dashboard />,
 },
 {
  path: linkLogin,
  element: <Login />,
 },
 {
  path: linkEvent,
  element: <Event />,
 },
 {
  path: linkEventAdd,
  element: <EventAddInputFields />,
 },
 {
  path: linkEventEdit + ':eventId',
  element: <EventEditInputField />,
 },
 {
  path: linkPengajian,
  element: <Pengajian />,
 },
 {
  path: linkPengajianAdd,
  element: <PengajianAddInputFields />,
 },
 {
  path: linkPengajianEdit + ':pengajianId',
  element: <PengajianEditInputField />,
 },
]);

function App() {
 return (
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
 );
}

export default App;
