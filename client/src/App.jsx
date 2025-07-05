import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
            <Routes>
                <Route path='/' element={<ProductList/>} />
                <Route path='/product-detail/:id' element={<ProductDetail/>} />
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
    </div>
  )
}

export default App