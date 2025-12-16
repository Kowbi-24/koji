import { useState } from 'react'
import LoginPage from './pages/LoginPage.tsx';
import LandingPage from './pages/LandingPage.tsx'; 
import Dashboard from './pages/Dashboard.tsx';
import { Routes , Route , Navigate } from 'react-router-dom';
 
// src/App.tsx

function App() {
 
  const [isAuthenticated] = useState(false);
 
  return (
    <>
      <Routes>
       
        {/* 1. Set the root path to navigate to the landing page */}
        <Route path='/' element={<Navigate to="/landing" replace />}></Route>
       
        {/* 2. Add the Landing Page Route */}
        <Route path='/landing' element={<LandingPage/>}></Route>

        <Route path='/login' element={<LoginPage/>}></Route>
 
        {/* Protected Dashboard Route (unchanged) */}
        <Route path='/dashboard' element={
          isAuthenticated ? <Dashboard/> : <Navigate to="/login" replace/>
        }></Route>
 
        {/* Fallback Route (unchanged) */}
        <Route path='*' element={<Navigate to="/" replace/>}></Route>
 
      </Routes>
    </>
  )
}
 
export default App