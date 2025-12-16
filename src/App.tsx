import { useState } from 'react'
import LoginPage from './pages/LoginPage.tsx';
{/*import LandingPage from './pages/LandingPage.tsx'; */}
import Dashboard from './pages/Dashboard.tsx';
import { Routes , Route , Navigate } from 'react-router-dom';
 
function App() {
 
  const [isAuthenticated] = useState(false);
 
  return (
    <>
      <Routes>
       
        <Route path='/' element={<Navigate to="/login" replace />}></Route>
       
        <Route path='/login' element={<LoginPage/>}></Route>
 
        {/* Protected Dashboard Route */}
        <Route path='/dashboard' element={
          isAuthenticated ? <Dashboard/> : <Navigate to="/login" replace/>
        }></Route>
 
        {/* Fallback Route - should always redirect to the intended starting point */}
        <Route path='*' element={<Navigate to="/" replace/>}></Route>
 
      </Routes>
    </>
  )
}
 
export default App