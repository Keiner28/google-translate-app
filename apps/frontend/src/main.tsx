import React from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import App from './app/index'
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <NextUIProvider>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'>
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </React.StrictMode>
  )
} else {
  throw new Error('Could not find root element')
}
