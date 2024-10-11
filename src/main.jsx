import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'


createRoot(document.getElementById('root')).render(
  <div className='w-full md:px-2 mx-auto'>
     <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
 </div>
)
