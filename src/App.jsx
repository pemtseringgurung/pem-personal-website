import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      </header>
      <main className="p-8">
        <h2 className="text-2xl">Projects</h2>
        {/* Add your project details here */}
      </main>
    </div>
  )
}

export default App
