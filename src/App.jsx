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
import ScrollToTop from './utils/ScrollToTop';
import AdminUpload from './pages/adminUpload';
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/upload" element={<AdminUpload />} />
      </Routes>
    </>
  )
}
export default App;