import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/App.jsx'
import Info from './components/Info.jsx'
import Events from './components/Events.jsx'
import Network from './components/Network.jsx'
import SignUpForm from './components/SignUpForm/SignUpForm.jsx'
import Form from "./components/Form.jsx"
import Class from "./components/Class.jsx"
import Map from "./components/Map.jsx"
import Access from "./components/Access.jsx"
import Colab from "./components/Colab.jsx"
import Interest from "./components/Interest.jsx"
import WeekOne from './components/WeekOne.jsx'
import WeekTwo from './components/WeekTwo.jsx'
import TeachMachine from './components/teachMachine.jsx'
import "/src/style/App.css"
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
    path: "/signup",
    element: <Form/>
  },
  {
    path: "/interest",
    element: <Interest/>
  },
  {
    path: "/register",
    element: <Form/>
  },
  {
    path: "/class",
    element: <Class/>
  },
  {
    path: "/map",
    element: <Map/>
  },
  {
    path: "/qr",
    element: <Access/>
  },
  {
    path: "/colab",
    element: <Colab/>
  },
  {
    path: "/week1",
    element: <WeekOne/>
  },
  {
    path: "/week2",
    element: <WeekTwo/>
  },
  {
    path: "/teach.machine",
    element: <TeachMachine/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
