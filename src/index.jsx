import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//This was earlier needed when I was having a seperate App.js file which created confusion
//import App from './App';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import RestauranMenu from './components/RestauranMenu.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
//This line is used to import the componets that need seperate bundling
//It uses lazy and this takes a call back function import()
//This import is different thing from normal imports
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        //For this we will be using react dynamic bundling/code spliting/lazy loading It uses 'lazy' and 'Suspense' from react
        //We need to use Suspense component to avoid the error because it takes some time to load the grocery page
        //During the time react wont have data and it will throw error and hence we will use Suspense
        path: '/grocery',
        element: <Suspense fallback = {/** any JSX code */ <h1>Loading...!</h1>}><Grocery /></Suspense>,
      },
      {
        //Works only if the resId is in API and it does not work for random things
        path: '/restaurants/:resId', //the path after : is dynamic and resId will be taken dynamically based on the user input
        element: <RestauranMenu />, //This resId can be accessed by useParams hook in the RestauranMenu components
      },
    ],
    errorElement: <Error />,
  },
])

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RouterProvider router = { appRouter } />
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router = { appRouter } />
// )