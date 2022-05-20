import React, {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {auth} from "../auth";
import Navigation from "./Navigation";




const Layout = ({children}) => {
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
    <div className='bg-black'>
      <Navigation logOut={logOut} />
      {children}
    </div>
  )
}

export default Layout
