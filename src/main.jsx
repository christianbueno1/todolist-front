import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import SignIn from './components/Auth/SignIn'
import { UserProvider } from './MyContext'
import PrivateRoute from './components/routes-components/private-route'

const router = createBrowserRouter([
  {
    // path: '/',
    // // element: <App />
    // // element: <div>Hello react-router-dom</div>
    // element: (
    //   <UserProvider>
    //     <SignIn />
    //   </UserProvider>
    // )
    path: '/',
    // element: <App />
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    )
  },
  {
    path: '/login',
    element: <SignIn />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)