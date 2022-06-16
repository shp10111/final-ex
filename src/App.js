import Menu from './routes/Menu.js';
import Home from './routes/Home.js';
import AppRouter from './AppRouter.js';

import React, { useState } from "react"


function App() {
  const [isHome, setIsHome] = useState(true)

  return (
    <div>
      
      <Home></Home>
      <Menu></Menu>
      <AppRouter name="react" isHome/>
    </div>
  )
}

export default App;
