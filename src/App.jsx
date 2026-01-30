import { useState } from 'react';
import './App.css'
import Buttons from './components/buttons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoomCard />
     
    </>
  )
}
export default App;