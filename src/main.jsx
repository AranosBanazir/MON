import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouer, RouterProvider} from 'react-router-dom'


const router = createBrowserRouer([
  {path:'/', element: <App/>, error: <Error/>,
    children: [
      {index:true,
        element: <Home/>
      },
      
    ]
  },
  {path: '*', element: <NotFound/>}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)