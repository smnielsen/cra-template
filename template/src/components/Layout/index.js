import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="about">About</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  )
}

export default Layout
