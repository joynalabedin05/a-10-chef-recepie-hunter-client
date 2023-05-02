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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   
  },
  {
    path: "recipe/:id",
    element: <RecipeDetails></RecipeDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/recipe/${params.id}`),
   
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
