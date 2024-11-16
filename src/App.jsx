import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <header className='homepageheader'>
          <nav className='homepagenavheader'>
            <a href='#'> Home </a>
            <a href='#'> Financial Services </a>
            <a href='#'> Login </a>
          </nav>
          </header>
          <body>
            <div className='middlearea'>
            <h1 className='title'> Goldman Sachs </h1>
            <h2> X </h2>
            <h1 className='utdtitle'> UTDHackRipple </h1>
            </div>
          </body>
      </div>
  )
}

export default App
