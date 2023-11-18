import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import ListEmployeeComponent from '././components/ListEmployeeComponent'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<ListEmployeeComponent />} />
      <Route path='add-employee' element={<CreateEmployee />} />
      <Route path='update-employee/:id' element={<UpdateEmployee />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
