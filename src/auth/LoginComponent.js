import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/UseAuth';

export default function LoginComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

   useEffect(()=>{
    if(isAuthenticated){
      navigate('/pages')
    }

   }, [])
  return (
    <div>
        Login
    </div>
  )
}
