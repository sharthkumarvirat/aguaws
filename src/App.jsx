import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import WelcomePage from './Components/WelcomePage'
import Notification from './Components/Notification'
import OrderHistory from './Components/OrderHistory'
import { useState } from 'react'

import lightImage from './assets/Light_Mode_Background.svg'
import darkImage from './assets/Dark_Mode_Background.svg'
import blueImage from './assets/Light_Mode_TopImage.svg'
import darkBlueImage from './assets/Dark_Mode_TopImage.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <>
      <div
        className="app-container"
        style={{
          backgroundImage: `url(${toggleTheme ? lightImage : darkImage}), url(${toggleTheme ? blueImage : darkBlueImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top, top right',
          minHeight: '100vh',
          display: 'flex',
        }}>
        <BrowserRouter basename='/'>
          <Sidebar toggleTheme={toggleTheme} />
          <Navbar setToggleTheme={setToggleTheme} toggleTheme={toggleTheme} />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
