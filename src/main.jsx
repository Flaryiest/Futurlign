import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/App.jsx'
import Info from './components/Info.jsx'
import Events from './components/Events.jsx'
import Network from './components/Network.jsx'
import SignUpForm from './components/SignUpForm/SignUpForm.jsx'
import './style/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/info",
    element: <Info/>
  },
  {
    path: "/events",
    element: <Events/>
  },
  {
    path: "/network",
    element: <Network/>
  },
  {
    path: "/signUp",
    element: <SignUpForm/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
