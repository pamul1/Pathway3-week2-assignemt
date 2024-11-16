import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentAbout } from '../ComponentAbout'
import { ComponentContact } from '../ComponentContact'
import { ComponentProjects } from '../ComponentProjects'
import { ComponentMenu } from '../ComponentMenu'
import { ComponentHome } from '../ComponentHome'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <ComponentMenu/>
        <Routes>
          <Route path='/'  element={<ComponentHome />} ></Route>
          <Route path='/about' element={<ComponentAbout />} ></Route>
          <Route path='/projects' element={<ComponentProjects />} ></Route>
          <Route path='/contact' element={<ComponentContact />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
