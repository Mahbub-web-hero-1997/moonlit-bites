import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import AuthProvider from './ContextAPI/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <div className='w-full  mx-auto md:px-2 '>
     <StrictMode>
         <AuthProvider>
             <RouterProvider router={router}/>
     </AuthProvider>
  </StrictMode>,
 </div>
)
