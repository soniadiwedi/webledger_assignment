import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
   const token = JSON.parse(localStorage.getItem("token"))
   const location=useLocation()
   if(!token){
    return <Navigate state={location.pathname } to={"/login"}  replace />
   }

   return children
}


