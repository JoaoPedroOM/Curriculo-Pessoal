import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"

import GlobalStyles from './styles/global.js';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Analytics />
    <Routes />
  </React.StrictMode>,
)
