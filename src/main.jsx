import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Recipe from './components/Recipe.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Blogs from './components/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   
  },
  {
    path: "recipe/:id",
    element: <RecipeDetails></RecipeDetails>,
    loader: ({params})=> fetch(`https://a10-chef-recipe-hunter-server.vercel.app/recipe/${params.id}`),
   
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: 'blogs',
    element: <Blogs></Blogs>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
