import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import './App.css'
import BreadCrumbs from './components/BreadCrumbs'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
        <h1>Website BreadCrumbs</h1>
        <BreadCrumbs/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductListing/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App