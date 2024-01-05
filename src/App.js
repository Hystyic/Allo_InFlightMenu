import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import MealPage from './Components/MealPage';
import { Auth0Provider } from '@auth0/auth0-react';

// Define the function that dictates the redirect behavior after login
const onRedirectCallback = (appState) => {
  window.location.pathname = appState?.returnTo || '/meals';
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'meals',
        element: <React.Fragment><MealPage /><Navbar /></React.Fragment>
      },
    ],
  },
]);

function App() {
  return (
    <Auth0Provider
      domain="dev-ve636rbkghbr0a3r.us.auth0.com"
      clientId="l00WE3C5Ktv7H9SGW3MZzNqGCbuw5kgn"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback} 
    >
      <RouterProvider router={appRouter} />
    </Auth0Provider>
  );
}

export default App;
