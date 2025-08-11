import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Routs/Routs.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <StrictMode>
      <RouterProvider router={Routs}></RouterProvider>
    </StrictMode>,
  </div>
)
