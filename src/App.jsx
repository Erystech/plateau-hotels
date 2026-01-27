import { useState } from 'react';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-secondary p-8">
      <h1 className="text-3xl font-bold text-primary">
        Plateau Hotels Dashboard
      </h1>
      <p className="mt-2 text-neutral-medium">
        Testing custom theme colors.
      </p>
      <button className="mt-4 bg-accent text-white px-4 py-2 rounded">
        Accent Button
      </button>
    </div>
  )
}
export default App;