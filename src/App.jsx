import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import Qrcode from './components/Qrcode'
import QrCodegenerator from './components/QrCodegenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Accordian/> */}
     
     <QrCodegenerator/>
      </div>
    </>
  )
}

export default App
