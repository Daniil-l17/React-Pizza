import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound/NotFound'
import styles from './App.scss'
import Cart from '../Pages/Cart'
export const SershContext = createContext()



const Router = () => {
  const [sersh,setsershValue] = useState('')


  return (
    <BrowserRouter>
      <div className="wrapper">
    <SershContext.Provider value={{sersh,setsershValue}}>
    <Header/>
      <div className="content">
        <Routes>
      <Route path='/' element={<Home sersh={sersh}/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/Cart' element={<Cart/>} />
    </Routes>
      </div>
      </SershContext.Provider>
    </div>  
    </BrowserRouter>
  )
}

export default Router