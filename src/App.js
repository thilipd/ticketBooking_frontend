
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Signup from './screens/Signupwindow';
import Login from './screens/Loginwindow';
import Shows from './screens/ShowsScreen';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path='/' element={<Homescreen />} />
          <Route path='/home' element={<Homescreen />} />
          <Route path='/book/:id' element={<Bookingscreen />} />
          <Route path='/book/:id/shows' element={<Shows />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
