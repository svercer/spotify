import React from "react";
import {Link, Navigate} from "react-router-dom";

const Layout = ({auth, children}) => {
  console.log('auth', auth)
  if (!auth){
    return (
      <Navigate push to={{
          pathname: '/'
        }}
      />
    )
  }
  return (
    <div className='bg-red-300'>
      <nav>
        <Link className='mr-3' to="/new-releases">New Releases</Link>
        <Link className='mr-3' to="/featured-playlist">Featured</Link>
        <Link className='mr-3' to="/category-playlist">Category</Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
