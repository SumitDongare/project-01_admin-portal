import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/UseAuth';

export default function PagesComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  console.log(isAuthenticated)
  useEffect(()=>{

    //  console.log("navigate back")

    // if(!isAuthenticated){
    //   navigate('/login')
    // }

  },[])

  return (
    <div>
      Pages Component
    </div>
  )
}
