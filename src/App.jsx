import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Salesgpt from './pages/Salesgpt'
import Navbar from './components/Navbar'
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