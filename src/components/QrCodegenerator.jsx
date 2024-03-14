import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import './qr.css';

const QrCodegenerator = () => {
    const [qrCode,setQrCode] = useState('')
    const [input,setInput] = useState('')

    function handleGenerate(){
        setQrCode(input);
    }
  return (
    <div className='qrcode'><h1>Qrcode Generator</h1>
    <div>
    <input className='input'onChange={(e)=>setInput(e.target.value)}
    type='text' name='qr-code' placeholder='Enter your value'/>
    <button className='btn'disabled={input && input.trim()!== '' ? false : true } onClick={handleGenerate}>Generate</button>
    </div>
    <div>
        <QRCode
        id='qr-code-value'
        value={qrCode} size={400} bgColor="#FFF"
        />
    </div>
    </div>
  )
}

export default QrCodegenerator