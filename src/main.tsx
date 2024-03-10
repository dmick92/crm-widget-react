import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'



declare global {
  interface Window {
    ZOHO: ZOHO,
    ZDK: ZDK,
    $Client: $Client
  }
}

window.ZOHO.embeddedApp.on("PageLoad", function (data) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
window.ZOHO.embeddedApp.init();