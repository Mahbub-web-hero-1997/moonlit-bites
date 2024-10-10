import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <div className='w-full px-3 mx-auto border-4'>
     <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
 </div>
)
