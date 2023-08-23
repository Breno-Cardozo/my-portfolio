import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/Global.css"
import {theme} from "./styles/theme"
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
