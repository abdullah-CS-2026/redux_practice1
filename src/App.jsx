
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Products from './Products'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>

         <Route path="/products" element={<Products />} />
         
    </Routes>
    </>
  )
}

export default App
