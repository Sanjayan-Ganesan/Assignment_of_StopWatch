import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from 'react-router-dom';
///6import Timer from './Pages/Timer'
import Stopwatch from './Pages/Stopwatch'
//import Navbar from './Pages/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button>Add me</button>
   
     
    </div>
  )
}

export default App
