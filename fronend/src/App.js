
import './App.css';
import Navbar from './pages/navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <Navbar/>
     <MainRoutes/>
     <ToastContainer />
    </div>
  );
}

export default App;
