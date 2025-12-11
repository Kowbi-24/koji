import { useState } from 'react'
import LoginPage from './pages/LoginPage.tsx';
import LandingPage from './pages/LandingPage.tsx';
import Dashboard from './pages/Dashboard.tsx';
import { Routes , Route , Navigate } from 'react-router-dom';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    setIsAuthenticated(false); // For testing purposes
  }
  

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>

        {/* Redirect to LoginPage when not authenticated */}
        <Route path='/dashboard' element={
          isAuthenticated ? <Dashboard/> : <Navigate to="/login" replace/>
        }></Route>

        <Route path='*' element={<Navigate to="/" replace/>}></Route>

      </Routes>
    </>
  )
}

export default App
