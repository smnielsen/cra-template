import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../Layout'

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))

function App() {
  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
