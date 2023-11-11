import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/auth/Login'
import Home from '../pages/home/Home'
import Fovorite from '../pages/favorite/Fovorite'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/favorite' element={<Fovorite/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
     
    </Routes>
  )
}

export default MainRoutes