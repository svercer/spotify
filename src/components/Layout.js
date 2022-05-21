import React, {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {auth} from "../auth";
import Navigation from "./Navigation";




const Layout = ({children, title}) => {
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault()
    localStorage.clear();
    navigate('/')
  }

  if (!auth()){
    return (
      <Navigate push to={{
          pathname: '/'
        }}
      />
    )
  }
  return (
    <div className='bg-black min-h-screen'>
      <Navigation logOut={logOut} />
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="py-8">
        <h2 className="text-white text-4xl">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
