import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Landing, Proyecto } from './components';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/proyecto" element={<Proyecto />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
