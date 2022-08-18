import './App.css';
import {React} from 'react'
import {Route,Routes} from 'react-router-dom'
import { Dashbord } from './component/pages/dashbord';
import { Login } from './component/auth/login';
import { Navbar } from './component/pages/navbar';
function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Dashbord />} />
       <Route path='/login' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
