import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import FooterSection from './Pages/Home/FooterSection';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
      <FooterSection/>
    </div>
  );
}

export default App;
