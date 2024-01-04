import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/navbar'
import Salesgpt from './pages/Salesgpt'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/salesgpt" element={<Salesgpt />} />
      </Routes>
    </Router>
  )
}

export default App