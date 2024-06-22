import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.scss'
import Home from '../pages/Home';
import Layout from './routes/Layout';
import About from '../pages/About';
import Services from '../pages/Services';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/services',
          element:<Services/>
        },
        
        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  )
}

export default App