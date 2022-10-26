import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/userContext'
 
 const PrivateRoute = ({children}) => {
      const {user,loading} = useContext(AuthContext)

      const location = useLocation()
      
      loading &&  <Spinner animation="border" variant="primary" />

      return (!user) ?  <Navigate to="/login" state={{from: location}} replace /> :  children
 }
 
 export default PrivateRoute