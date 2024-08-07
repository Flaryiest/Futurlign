import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/App.jsx'
import Info from './components/Info.jsx'
import Events from './components/Events.jsx'
import Network from './components/Network.jsx'
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
