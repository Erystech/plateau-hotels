import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Buttons from './components/ui/buttons';
import Navbar from './components/layout/Navbar';
import RoomDetail from './pages/RoomDetail';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App;