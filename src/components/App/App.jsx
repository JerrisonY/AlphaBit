import 'normalize.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage/LandingPage'
import LoginPage from '../../pages/LoginPage/LoginPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </main>
  )
}

export default App
