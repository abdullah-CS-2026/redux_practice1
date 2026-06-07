
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Products from './Products'
import { ProductsList } from './ProductsList'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>

         <Route path="/products" element={<Products />} />
         <Route path="/productlist" element={<ProductsList/>}></Route>
         
    </Routes>
    </>
  )
}

export default App
