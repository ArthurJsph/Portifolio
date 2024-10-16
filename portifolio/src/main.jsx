import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Nav/NavBar.jsx'
import Body from './Body/Body.jsx'
import Footer from './Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Body />
    <Footer />
  </StrictMode>,
)
