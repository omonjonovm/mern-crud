import React from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './pages/Main.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './pages/Add.jsx'
import Update from './pages/Update.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <div className="raw">
          <div className='col-lg-8 offset-lg-2'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/add' element={<Add />} />
              <Route path='/update/:id' element={<Update />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App