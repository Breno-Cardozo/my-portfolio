import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import {theme} from "./styles/theme"
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'
import { Header } from './components/header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <AllRoutes />
          <Navigation />
          <Footer/>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
