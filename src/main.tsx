import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './context/themeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
)
