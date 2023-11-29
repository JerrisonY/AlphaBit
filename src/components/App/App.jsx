import 'normalize.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'


function App() {

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </main>
  )
}

export default App
