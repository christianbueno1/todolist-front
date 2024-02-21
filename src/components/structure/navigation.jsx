import App from "../../App";

export const nav = [
  {
    path: '/',
    name: 'Home',
    element: <App />,
    isPrivate: true
  },
  {
    path: '*',
    name: 'Login',
    element: <SignIn />,
    isPrivate: false
  },
  {
    path: '/login',
    name: 'Login',
    element: <SignIn />,
    isPrivate: false
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: <Dashboard />,
    isPrivate: true
  },
  {
    path: '/profile',
    name: 'Profile',
    element: <Profile />,
    isPrivate: true
  },
  {
    path: '/settings',
    name: 'Settings',
    element: <Settings />,
    isPrivate: true
  },
  {
    path: '/logout',
    name: 'Logout',
    element: <Logout />,
    isPrivate: true
  }  
]