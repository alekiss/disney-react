import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Contato from './pages/contato'
import Sobre from './pages/sobre'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contato" element={<Contato/>} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
